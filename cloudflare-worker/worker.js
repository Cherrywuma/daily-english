// Daily English - Cloudflare Worker
// 中转 OpenAI TTS + Whisper STT，保护 API Key，做每日限额
//
// 部署后绑定环境变量:
//   OPENAI_API_KEY = sk-...
//   APP_PASSWORD   = 自己设一个，比如 mama2026
// 可选 KV 绑定 RATE_KV 用于每日次数限制

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
    const url = new URL(req.url);

    if (url.pathname === '/tts' && req.method === 'POST') {
      return handleTTS(req, env);
    }
    if (url.pathname === '/stt' && req.method === 'POST') {
      return handleSTT(req, env);
    }
    if (url.pathname === '/health') {
      return new Response('ok', { headers: CORS });
    }
    return new Response('Daily English Worker', { headers: CORS });
  },
};

// ============ TTS：OpenAI gpt-4o-mini-tts ============
async function handleTTS(req, env) {
  let body;
  try { body = await req.json(); } catch { return j({ error: 'bad json' }, 400); }

  const { text, voice = 'shimmer', instructions = '', password = '' } = body;
  if (password !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);
  if (!text || text.length > 300) return j({ error: 'bad text' }, 400);

  if (!(await rateLimit(env, 'tts', 2000))) return j({ error: 'daily limit' }, 429);

  const resp = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice,
      input: text,
      instructions,
      response_format: 'mp3',
    }),
  });

  if (!resp.ok) {
    const err = await resp.text();
    return j({ error: 'openai', detail: err }, 500);
  }

  const audio = await resp.arrayBuffer();
  return new Response(audio, {
    headers: { ...CORS, 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=2592000' },
  });
}

// ============ STT：OpenAI Whisper ============
// 接收 multipart/form-data:
//   file: audio blob (iOS MediaRecorder 默认 audio/mp4，Chrome 是 audio/webm)
//   password: APP_PASSWORD
// 返回: { text: "..." }
async function handleSTT(req, env) {
  let form;
  try { form = await req.formData(); } catch { return j({ error: 'bad form' }, 400); }

  const password = form.get('password') || '';
  if (password !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);

  const file = form.get('file');
  if (!file || typeof file === 'string') return j({ error: 'no file' }, 400);
  // Whisper API 限制 25MB；我们前端录音 4s 远小于此
  if (file.size > 10 * 1024 * 1024) return j({ error: 'file too large' }, 413);

  if (!(await rateLimit(env, 'stt', 2000))) return j({ error: 'daily limit' }, 429);

  // 转发到 OpenAI Whisper
  const upstream = new FormData();
  // 给个能让 Whisper 识别格式的文件名后缀
  const filename = (file.type || '').includes('webm') ? 'audio.webm'
                 : (file.type || '').includes('mp4')  ? 'audio.mp4'
                 : (file.type || '').includes('mpeg') ? 'audio.mp3'
                 : 'audio.m4a';
  upstream.append('file', file, filename);
  upstream.append('model', 'whisper-1');
  upstream.append('language', 'en');
  upstream.append('response_format', 'json');
  // 给 Whisper 一点上下文 → 提高短句识别质量
  upstream.append('prompt', 'A child or parent speaks a short English sentence from a daily-life dialogue.');

  const resp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}` },
    body: upstream,
  });

  if (!resp.ok) {
    const err = await resp.text();
    return j({ error: 'whisper', detail: err }, 500);
  }

  const data = await resp.json();
  return j({ text: data.text || '' });
}

// ============ 每日限额（共享 KV） ============
async function rateLimit(env, kind, dailyLimit) {
  if (!env.RATE_KV) return true; // 没绑 KV 就不限
  const today = new Date().toISOString().slice(0, 10);
  const key = `cnt:${kind}:${today}`;
  const cur = parseInt((await env.RATE_KV.get(key)) || '0');
  if (cur > dailyLimit) return false;
  await env.RATE_KV.put(key, String(cur + 1), { expirationTtl: 172800 });
  return true;
}

function j(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

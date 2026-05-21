// Daily English - Cloudflare Worker
// 中转 OpenAI TTS，保护 API Key，做每日限额
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
    if (url.pathname === '/health') {
      return new Response('ok', { headers: CORS });
    }
    return new Response('Daily English Worker', { headers: CORS });
  },
};

async function handleTTS(req, env) {
  let body;
  try { body = await req.json(); } catch { return j({ error: 'bad json' }, 400); }

  const { text, voice = 'shimmer', instructions = '', password = '' } = body;
  if (password !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);
  if (!text || text.length > 300) return j({ error: 'bad text' }, 400);

  // 每日限额（可选）
  if (env.RATE_KV) {
    const today = new Date().toISOString().slice(0, 10);
    const key = `cnt:${today}`;
    const cur = parseInt(await env.RATE_KV.get(key) || '0');
    if (cur > 2000) return j({ error: 'daily limit' }, 429);
    await env.RATE_KV.put(key, String(cur + 1), { expirationTtl: 172800 });
  }

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

function j(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

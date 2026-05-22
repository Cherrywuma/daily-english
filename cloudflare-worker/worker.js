// Daily English - Cloudflare Worker
// SpeechGen child voices + OpenAI TTS/STT. Keeps API keys private and applies daily limits.
//
// Required secrets:
//   APP_PASSWORD     = app password used by the web app
//   OPENAI_API_KEY   = OpenAI API key for parent/other TTS + Whisper STT
// Optional secrets:
//   SPEECHGEN_TOKEN  = SpeechGen token for sister/brother child voices
//   SPEECHGEN_EMAIL  = SpeechGen account email
// Optional:
//   RATE_KV           = KV namespace for daily rate limits

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const MINIMAX_ENDPOINT = 'https://api.minimax.io/v1/t2a_v2';
const SPEECHGEN_TEXT_ENDPOINT = 'https://speechgen.io/index.php?r=api/text';

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
      const engines = {
        speechgenKids: !!(env.SPEECHGEN_TOKEN && env.SPEECHGEN_EMAIL),
        openaiAdults: !!env.OPENAI_API_KEY,
      };
      return j({ ok: true, tts: 'speechgen-kids-openai-others', model: 'gpt-4o-mini-tts', engines });
    }
    return new Response('Daily English Worker', { headers: CORS });
  },
};

async function handleTTS(req, env) {
  let body;
  try { body = await req.json(); } catch { return j({ error: 'bad json' }, 400); }

  const { text, password = '' } = body;
  if (password !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);
  if (!text || text.length > 300) return j({ error: 'bad text' }, 400);

  if (!(await rateLimit(env, 'tts', 2000))) return j({ error: 'daily limit' }, 429);

  if (shouldUseSpeechGenKid(body) && env.SPEECHGEN_TOKEN && env.SPEECHGEN_EMAIL) {
    try {
      return await handleSpeechGenKidTTS(body, env);
    } catch (e) {
      console.warn('SpeechGen child voice failed, falling back to OpenAI:', e.message);
    }
  }
  return handleOpenAITTSFallback(body, env);
}

function shouldUseSpeechGenKid(body) {
  const role = inferRole(body.voice_id || body.voice || '');
  return role === 'brother' || role === 'sister';
}

async function handleSpeechGenKidTTS(body, env) {
  const role = inferRole(body.voice_id || body.voice || '');
  const voice = role === 'sister' ? 'Hana' : 'Justin plus';
  const params = new URLSearchParams({
    token: env.SPEECHGEN_TOKEN,
    email: env.SPEECHGEN_EMAIL,
    voice,
    text: body.text,
    format: 'mp3',
    speed: String(tuneSpeechGenSpeed(role, body.speed)),
    pitch: String(tuneSpeechGenPitch(role, body.emotion)),
    pause_sentence: '0',
    pause_paragraph: '0',
    sample_rate: '24000',
    bitrate: '192',
    channels: '1',
  });

  const resp = await fetch(SPEECHGEN_TEXT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const raw = await resp.text();
  if (!resp.ok) throw new Error(`SpeechGen HTTP ${resp.status}: ${raw.slice(0, 200)}`);

  let data;
  try { data = JSON.parse(raw); } catch { throw new Error(`SpeechGen bad JSON: ${raw.slice(0, 200)}`); }
  if (data.status !== 1) throw new Error(`SpeechGen: ${data.error || 'audio not ready'}`);

  const audioUrl = data.file_cors || data.file;
  if (!audioUrl) throw new Error('SpeechGen returned no audio URL');
  const audioResp = await fetch(audioUrl);
  if (!audioResp.ok) throw new Error(`SpeechGen audio HTTP ${audioResp.status}`);
  const audio = await audioResp.arrayBuffer();

  return new Response(audio, {
    headers: { ...CORS, 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=2592000' },
  });
}

function tuneSpeechGenSpeed(role, speed) {
  const n = Number(speed || 1.45);
  if (role === 'brother') return clamp(Number(Math.max(1.28, Math.min(1.55, n)).toFixed(2)), 0.8, 1.6);
  if (role === 'sister') return clamp(Number(Math.max(1.22, Math.min(1.48, n)).toFixed(2)), 0.8, 1.55);
  return clamp(Number(Math.min(1.42, Math.max(1.1, n)).toFixed(2)), 0.8, 1.5);
}

function tuneSpeechGenPitch(role, emotion) {
  const mood = normalizeEmotion(emotion);
  if (role === 'brother') return mood === 'sad' ? 2 : 4;
  if (role === 'sister') return mood === 'angry' || mood === 'happy' ? 3 : 2;
  return 0;
}

async function handleMiniMaxTTS(body, env) {
  const voiceId = mapMiniMaxVoice(body.voice_id || body.voice || 'English_FriendlyPerson');
  const emotion = normalizeEmotion(body.emotion || body.type || 'neutral');
  const text = addPerformanceCue(body.text, emotion);
  const payload = {
    model: env.MINIMAX_TTS_MODEL || 'speech-2.8-turbo',
    text,
    stream: false,
    language_boost: 'English',
    output_format: 'hex',
    voice_setting: {
      voice_id: voiceId,
      speed: tuneSpeed(body.speed, emotion, voiceId),
      vol: tuneVolume(body.vol, emotion),
      pitch: tunePitch(body.pitch, voiceId),
    },
    audio_setting: {
      sample_rate: 32000,
      bitrate: 128000,
      format: 'mp3',
      channel: 1,
    },
  };

  const resp = await fetch(MINIMAX_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.MINIMAX_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const raw = await resp.text();
  if (!resp.ok) return j({ error: 'minimax', detail: raw.slice(0, 500) }, 500);

  let data;
  try { data = JSON.parse(raw); } catch { return j({ error: 'minimax bad json', detail: raw.slice(0, 200) }, 500); }
  if (data.base_resp && data.base_resp.status_code !== 0) {
    return j({ error: 'minimax', detail: data.base_resp.status_msg || 'request failed' }, 500);
  }
  const hex = data && data.data && data.data.audio;
  if (!hex) return j({ error: 'minimax no audio', detail: data }, 500);

  return new Response(hexToBytes(hex), {
    headers: { ...CORS, 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=2592000' },
  });
}

// OpenAI TTS for mom, dad, and any non-child role.
async function handleOpenAITTSFallback(body, env) {
  if (!env.OPENAI_API_KEY) return j({ error: 'missing OPENAI_API_KEY' }, 500);
  const voiceId = body.voice_id || body.voice || 'shimmer';
  const voice = mapOpenAIVoice(voiceId);
  const instructions = buildOpenAICharacterInstructions(voiceId, body.emotion, body.speed, body.vol);
  const resp = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini-tts',
      voice,
      input: body.text,
      instructions,
      response_format: 'mp3',
    }),
  });

  if (!resp.ok) return j({ error: 'openai', detail: (await resp.text()).slice(0, 500) }, 500);
  const audio = await resp.arrayBuffer();
  return new Response(audio, {
    headers: { ...CORS, 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=2592000' },
  });
}

function mapMiniMaxVoice(voiceId) {
  const map = {
    'female-yujie': 'English_Upbeat_Woman',
    'male-qn-jingying': 'English_Trustworth_Man',
    'cherry_sister_v1': 'cherry_sister_v1',
    'male-qn-badao': 'English_Strong-WilledBoy',
    'female-chengshu': 'English_CalmWoman',
    'male-qn-qingse': 'English_ReservedYoungMan',
    'female-tianmei': 'English_LovelyGirl',
    'presenter_male': 'English_Gentle-voiced_man',
    'female-shaonv': 'English_Strong-WilledBoy',
    shimmer: 'English_Upbeat_Woman',
  };
  return map[voiceId] || voiceId;
}

function mapOpenAIVoice(voiceId) {
  const id = String(voiceId || '').toLowerCase();
  if (id.includes('strong-willedboy') || id.includes('badao') || id.includes('shaonv')) return 'echo';
  if (id.includes('sister') || id.includes('girl')) return 'coral';
  if (id.includes('jingying') || id.includes('presenter') || id.includes('qingse')) return 'onyx';
  if (id.includes('teacher') || id.includes('chengshu')) return 'sage';
  if (id.includes('yujie') || id.includes('mom')) return 'nova';
  return 'shimmer';
}

function buildOpenAICharacterInstructions(voiceId, emotion, speed, vol) {
  const role = inferRole(voiceId);
  const mood = normalizeEmotion(emotion);
  const pace = Number(speed || 1.1);
  const loudness = Number(vol || 1);

  const base = [
    'This is for a children English speaking practice app.',
    'Make the performance highly characterful and easy to tell apart with eyes closed.',
    'Use real-life family conversation timing: quick responses, lively rhythm, almost no dead air, and expressive intonation.',
    'Speak faster than classroom reading, like people talking at home.',
    'Keep each sentence clear enough for kids to repeat, but avoid textbook narration.',
    'The acting should be strong and vivid. Keep it believable and safe for children.',
  ];

  const roles = {
    brother: [
      'Character: a tiny five-year-old boy, much younger than everyone else.',
      'Voice feel: very small, bright, cute, breathy, playful, impatient, and a little squeaky, but still understandable.',
      'He talks fast in quick little bursts with lots of upward intonation, cute pleading, tiny complaints, and dramatic kid energy.',
      'Make him sound clearly different from dad: much higher, smaller, faster, more bouncy, more emotional, more childlike.',
      'When he complains, make it whiny and pleading. When excited, make it jumpy and delighted. When annoyed, make it cute-angry, not adult-angry.',
    ],
    sister: [
      'Character: a nine-to-ten-year-old older sister.',
      'Voice feel: crisp, bright, quick, slightly nasal, bossy, clever, teasing, and school-age.',
      'She is not a mother. Do not make her warm and adult. Make her sound like a smart big sister who rolls her eyes and talks fast.',
      'Make her clearly different from mom: higher, sharper, younger, quicker, more playful, more teasing, and more reactive.',
      'When annoyed, she snaps lightly. When proud, she sounds smug. When caring, she softens but still sounds like a child.',
    ],
    mom: [
      'Character: an adult mom managing two kids at home.',
      'Voice feel: mature, warm, lower than the sister, steady, practical, a little tired, sometimes firm.',
      'Make her clearly different from sister: adult, grounded, smoother, slower, less sharp, more caring authority.',
      'When firm, use a mom voice that ends downward and leaves no room for debate. When warm, sound protective and close.',
    ],
    dad: [
      'Character: an adult dad.',
      'Voice feel: much lower, rounder, relaxed, amused, steady, and obviously adult.',
      'Make him clearly different from brother: deeper, slower, calmer, less emotional, with a gentle smile in the voice.',
      'He should sound like a dad watching the family chaos with patience and humor.',
    ],
    teacher: [
      'Character: a kind elementary school teacher.',
      'Voice feel: clear, patient, encouraging, classroom-friendly.',
    ],
    doctor: [
      'Character: a calm doctor speaking to a child.',
      'Voice feel: reassuring, clear, slow, gentle.',
    ],
    default: [
      'Character: a friendly person in a lively family scene.',
      'Voice feel: natural, warm, expressive.',
    ],
  };

  const moods = {
    happy: 'Emotion: happy or excited. Add a strong smile to the voice, lift phrase endings, speed up slightly, and make the rhythm energetic.',
    sad: 'Emotion: sad, worried, tired, or pleading. Soften the voice, add a small sigh feeling, and make it tender without becoming flat.',
    angry: 'Emotion: annoyed, rushed, or complaining. Add attitude, sharper rhythm, and urgency, but do not become harsh or scary.',
    neutral: 'Emotion: natural daily conversation. Keep it alive with lively intonation and quick conversational timing.',
  };

  const pacing = pace >= 1.45
    ? 'Pace: fast real-life conversation. Keep it quick and responsive, but not garbled.'
    : pace <= 0.95
      ? 'Pace: still conversational, only slightly softer and slower.'
      : 'Pace: brisk natural conversation, faster than classroom reading.';

  const volume = loudness >= 1.4
    ? 'Volume: energetic and present, but do not yell.'
    : loudness <= 0.95
      ? 'Volume: softer and closer.'
      : 'Volume: normal speaking volume.';

  return [
    ...base,
    ...(roles[role] || roles.default),
    moods[mood],
    pacing,
    volume,
  ].join(' ');
}

function inferRole(voiceId) {
  const id = String(voiceId || '').toLowerCase();
  if (id.includes('strong-willedboy') || id.includes('badao') || id.includes('shaonv')) return 'brother';
  if (id.includes('sister') || id.includes('girl')) return 'sister';
  if (id.includes('yujie') || id.includes('mom')) return 'mom';
  if (id.includes('jingying') || id.includes('presenter')) return 'dad';
  if (id.includes('chengshu') || id.includes('teacher')) return 'teacher';
  if (id.includes('qingse') || id.includes('doctor')) return 'doctor';
  return 'default';
}

function normalizeEmotion(emotion) {
  const e = String(emotion || '').toLowerCase();
  if (e.includes('sad')) return 'sad';
  if (e.includes('angry')) return 'angry';
  if (e.includes('happy')) return 'happy';
  return 'neutral';
}

function addPerformanceCue(text, emotion) {
  return String(text || '').trim();
}

function pickCue(text, options) {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = ((h << 5) - h + text.charCodeAt(i)) | 0;
  return options[Math.abs(h) % options.length];
}

function tuneSpeed(speed, emotion, voiceId) {
  let s = Number(speed || 1.15);
  // The old frontend used very high values like 1.5-1.85. MiniMax already sounds lively,
  // so compress the range to keep children expressive without making them squeaky.
  if (s >= 1.8) s = 1.24;
  else if (s >= 1.45) s = 1.1;
  else if (s <= 0.95) s = 0.9;
  else s = Math.min(1.18, Math.max(0.92, s));
  if (emotion === 'sad') s -= 0.06;
  if (emotion === 'angry' || emotion === 'happy') s += 0.04;
  if (voiceId.includes('Boy')) s += 0.02;
  return clamp(Number(s.toFixed(2)), 0.85, 1.28);
}

function tuneVolume(vol, emotion) {
  let v = Number(vol || 1.05);
  if (v >= 1.45) v = 1.15;
  else if (v <= 0.95) v = 0.95;
  else v = 1.05;
  if (emotion === 'angry' || emotion === 'happy') v += 0.05;
  if (emotion === 'sad') v -= 0.05;
  return clamp(Number(v.toFixed(2)), 0.85, 1.2);
}

function tunePitch(pitch, voiceId) {
  if (Number.isFinite(Number(pitch))) return clamp(Number(pitch), -4, 5);
  if (voiceId === 'English_Strong-WilledBoy') return 3;
  if (voiceId === 'English_ReservedYoungMan') return 1;
  if (voiceId.includes('Girl')) return 1;
  return 0;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function hexToBytes(hex) {
  const clean = String(hex).replace(/\s+/g, '');
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) {
    bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  }
  return bytes;
}

// ============ STT: OpenAI Whisper ============
async function handleSTT(req, env) {
  let form;
  try { form = await req.formData(); } catch { return j({ error: 'bad form' }, 400); }

  const password = form.get('password') || '';
  if (password !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);

  const file = form.get('file');
  if (!file || typeof file === 'string') return j({ error: 'no file' }, 400);
  if (file.size > 10 * 1024 * 1024) return j({ error: 'file too large' }, 413);

  if (!(await rateLimit(env, 'stt', 2000))) return j({ error: 'daily limit' }, 429);

  const upstream = new FormData();
  const filename = (file.type || '').includes('webm') ? 'audio.webm'
                 : (file.type || '').includes('mp4')  ? 'audio.mp4'
                 : (file.type || '').includes('mpeg') ? 'audio.mp3'
                 : 'audio.m4a';
  upstream.append('file', file, filename);
  upstream.append('model', 'whisper-1');
  upstream.append('language', 'en');
  upstream.append('response_format', 'json');
  upstream.append('prompt', 'A child or parent speaks a short English sentence from a daily-life dialogue.');

  const resp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}` },
    body: upstream,
  });

  if (!resp.ok) return j({ error: 'whisper', detail: (await resp.text()).slice(0, 500) }, 500);
  const data = await resp.json();
  return j({ text: data.text || '' });
}

async function rateLimit(env, kind, dailyLimit) {
  if (!env.RATE_KV) return true;
  const today = new Date().toISOString().slice(0, 10);
  const key = `cnt:${kind}:${today}`;
  const cur = parseInt((await env.RATE_KV.get(key)) || '0');
  if (cur >= dailyLimit) return false;
  await env.RATE_KV.put(key, String(cur + 1), { expirationTtl: 172800 });
  return true;
}

function j(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

// Daily English - core.js
// MiniMax TTS（speech-02-turbo + 英文音色 + 性格化映射 + 真人语速）

const Storage = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { localStorage.removeItem(k); },
};

const Config = {
  get workerUrl() { return Storage.get('cfg_worker_url', ''); },
  set workerUrl(v) { Storage.set('cfg_worker_url', v); },
  get password()  { return Storage.get('cfg_password', ''); },
  set password(v) { Storage.set('cfg_password', v); },
  isReady() { return !!this.workerUrl && !!this.password; },
};

const AudioCache = {
  db: null,
  name: 'daily_english_audio_v2',
  store: 'audio',

  open() {
    if (this.db) return Promise.resolve(this.db);
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.name, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(this.store);
      req.onsuccess = () => { this.db = req.result; resolve(this.db); };
      req.onerror = () => reject(req.error);
    });
  },

  async get(key) {
    try {
      const db = await this.open();
      return await new Promise((resolve, reject) => {
        const req = db.transaction(this.store, 'readonly').objectStore(this.store).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => reject(req.error);
      });
    } catch { return null; }
  },

  async set(key, value) {
    try {
      const db = await this.open();
      await new Promise((resolve, reject) => {
        const req = db.transaction(this.store, 'readwrite').objectStore(this.store).put(value, key);
        req.onsuccess = resolve;
        req.onerror = () => reject(req.error);
      });
    } catch {}
  },
};

// ===== MiniMax 官方音色 ID（确认存在的）=====
// 这些是 MiniMax API 实际支持的 voice_id
// 虽然名字带"中文"但说英文也很流利（MiniMax 是多语言模型）
const VOICE_IDS = {
  mom:       'female-yujie',           // 御姐音 - 妈妈成熟温暖
  dad:       'male-qn-jingying',       // 精英青年男声 - 爸爸
  sister:    'cherry_sister_v1',       // 姐姐真人克隆声音 🎉
  brother:   'English_Strong-WilledBoy', // 英文男孩声 - 弟弟 6 岁左右
  teacher:   'female-chengshu',        // 成熟女声 - 老师
  doctor:    'male-qn-qingse',         // 青年男声 - 医生
  grandma:   'female-tianmei',         // 甜美女声 - 暂代奶奶
  grandpa:   'presenter_male',         // 男主播 - 暂代爷爷
  classmate: 'English_Strong-WilledBoy', // 男孩同学
  kid:       'English_Strong-WilledBoy', // 通用小男孩
};

// type → MiniMax emotion（只用最稳的 4 种）
function _typeToEmotion(type) {
  if (!type) return 'neutral';
  const t = String(type).toLowerCase();
  if (t.includes('cry') || t.includes('whine') || t.includes('sad') || t.includes('scare') || t.includes('worry')) return 'sad';
  if (t.includes('angry') || t.includes('annoy') || t.includes('yell') || t.includes('loud') || t.includes('pout') || t.includes('rushed') || t.includes('boss') || t.includes('stern')) return 'angry';
  if (t.includes('excite') || t.includes('proud') || t.includes('cute') || t.includes('cheer') || t.includes('laugh') || t.includes('silly') || t.includes('sweet') || t.includes('play') || t.includes('surprise') || t.includes('curious')) return 'happy';
  return 'neutral';
}

// type → speed（ESL 友好版：默认 1.0，让 ESL 小孩听得懂）
// 旧值（1.5-1.8 夸张版）对刚学英语的姐弟太快，听不清。
// 现在压到正常对话节奏附近，最快也只到 1.15，保留情绪起伏但不再失控。
function _typeToSpeed(type) {
  if (!type) return 1.0;
  const t = String(type).toLowerCase();
  // 稍快：急、生气、激动、兴奋（比正常快 15%，仍清晰）
  if (t.includes('rushed') || t.includes('yell') || t.includes('angry') || t.includes('annoy') || t.includes('excite') || t.includes('loud') || t.includes('boss')) return 1.15;
  // 慢：哭、伤心、害怕（颤抖感）
  if (t.includes('cry') || t.includes('sad') || t.includes('scare')) return 0.85;
  // 稍慢：温柔、悄悄话、累
  if (t.includes('whisper') || t.includes('soft') || t.includes('tired') || t.includes('cozy')) return 0.9;
  // 小孩相关情绪：正常对话速度
  if (t.includes('bro') || t.includes('sis') || t.includes('cute') || t.includes('whine') || t.includes('pout') || t.includes('tease')) return 1.0;
  // 默认：正常对话速度
  return 1.0;
}

// type → 音量（生气/兴奋更响，哭/悄悄话更轻）
function _typeToVol(type) {
  if (!type) return 1.2;
  const t = String(type).toLowerCase();
  if (t.includes('yell') || t.includes('loud') || t.includes('angry') || t.includes('annoy') || t.includes('excite') || t.includes('cheer')) return 1.5;  // 大声
  if (t.includes('whisper') || t.includes('soft') || t.includes('cry')) return 0.9;  // 小声
  return 1.2;  // 默认稍响一点
}

// 在原句前加语气词（让 AI 念得更有情绪）
// AI 会读出语气词，但 UI 上仍显示原句，跟读评分也基于原句
function _enhanceText(text, type) {
  let out = String(text || '').trim();
  out = out
    .replace(/^(Ugh|Aww|Yay|Whoa|Hey|Ouch|Waaa|Hmph|Eek|Haha|Hehe|Quick|Wait|Hmm|Oh no)[,!?. ]+/i, '')
    .replace(/^(Yes|No)[,!?. ]+$/i, '$1.')
    .trim();
  return out;
}

// ============ TTS：Web Audio API + AudioContext ============
const TTS = {
  ctx: null,
  cache: new Map(),
  fetching: new Map(),
  playing: false,
  currentSrc: null,

  // 句间停顿（超快节奏，真人对话感）
  pauseAfter(type) {
    if (!type) return 0;
    const t = String(type).toLowerCase();
    if (t.includes('whisper') || t.includes('soft') || t.includes('cozy') || t.includes('tired') || t.includes('cry')) return 20;
    return 0;
  },

  _ensureCtx() {
    if (!this.ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) throw new Error('浏览器不支持 Web Audio');
      this.ctx = new Ctx();
    }
    return this.ctx;
  },

  async unlock() {
    const ctx = this._ensureCtx();
    if (ctx.state === 'suspended') {
      try { await ctx.resume(); } catch (e) { console.warn('resume failed', e); }
    }
    try {
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    } catch {}
  },

  _key(text, voice, emotion, speed = '', vol = '') { return `v5-speechgen-kids::${voice}::${emotion}::${speed}::${vol}::${text}`; },

  // 单次拉取（不重试）
  async _fetchArrayBufferOnce(text, voiceId, emotion, speed, vol) {
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        voice_id: voiceId,
        emotion,
        speed,
        vol,
        password: Config.password,
      }),
    });
    if (!resp.ok) {
      const e = await resp.text();
      throw new Error('TTS ' + resp.status + ': ' + e.slice(0, 100));
    }
    return await resp.arrayBuffer();
  },

  async _decodeArrayBuffer(arr) {
    const ctx = this._ensureCtx();
    return await new Promise((res, rej) => {
      try {
        const p = ctx.decodeAudioData(arr.slice(0), b => res(b), e => rej(e));
        if (p && p.then) p.then(res, rej);
      } catch (e) { rej(e); }
    });
  },

  // 拉取 + 失败重试（最多 4 次）
  async _fetchBuffer(text, voiceId, type) {
    const emotion = _typeToEmotion(type);
    const speed = _typeToSpeed(type);
    const vol = _typeToVol(type);
    const enhancedText = _enhanceText(text, type);

    const key = this._key(enhancedText, voiceId, emotion, speed, vol);
    if (!enhancedText) throw new Error('empty after cleanup');
    if (this.cache.has(key)) return this.cache.get(key);
    if (!Config.isReady()) throw new Error('请先在设置里填 Worker 地址和密码');
    const stored = await AudioCache.get(key);
    if (stored) {
      const buf = await this._decodeArrayBuffer(stored);
      this.cache.set(key, buf);
      return buf;
    }
    if (this.fetching.has(key)) return this.fetching.get(key);

    const job = (async () => {
      let lastErr;
      for (let attempt = 1; attempt <= 4; attempt++) {
        try {
          const arr = await this._fetchArrayBufferOnce(enhancedText, voiceId, emotion, speed, vol);
          await AudioCache.set(key, arr.slice(0));
          const buf = await this._decodeArrayBuffer(arr);
          this.cache.set(key, buf);
          return buf;
        } catch (e) {
          lastErr = e;
          console.warn(`TTS attempt ${attempt}/4 failed for "${text.slice(0,30)}": ${e.message}`);
          const isRateLimit = e.message && (e.message.includes('429') || e.message.includes('1002') || e.message.includes('1024') || e.message.includes('rate limit'));
          const wait = isRateLimit ? 3000 * attempt : 500 * attempt;
          if (attempt < 4) await new Promise(r => setTimeout(r, wait));
        }
      }
      throw lastErr;
    })().finally(() => this.fetching.delete(key));
    this.fetching.set(key, job);
    return job;
  },

  async prefetchAll(sentences, onProgress) {
    // 智能策略：
    // 1. 先快速下载前 5 句（让用户尽快能开始听）
    // 2. 后台慢速下载剩下的句子（不超 RPM）
    let done = 0;
    const total = sentences.length;
    const PRIORITY = Math.min(5, sentences.length);

    // 阶段 1：前 5 句快速下载（3 秒间隔）
    for (let i = 0; i < PRIORITY; i++) {
      const s = sentences[i];
      try {
        await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
      } catch (e) {
        console.warn('priority prefetch fail', s.en, e.message);
      }
      done++;
      onProgress && onProgress(done, total);
      await new Promise(r => setTimeout(r, 900));
    }

    // 阶段 2：剩下的句子后台慢慢下载（不阻塞用户）
    (async () => {
      for (let i = PRIORITY; i < sentences.length; i++) {
        const s = sentences[i];
        try {
          await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
        } catch (e) {
          console.warn('background prefetch fail', s.en, e.message);
        }
        done++;
        onProgress && onProgress(done, total);
        await new Promise(r => setTimeout(r, 900));
      }
    })();
  },

  async playOne(s) {
    this.stop();
    const buf = await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
    await this._playBuffer(buf);
  },

  async playAll(sentences, onLine, onDone) {
    this.stop();
    this.playing = true;
    let lastFetchTime = 0;
    for (let i = 0; i < sentences.length; i++) {
      if (!this.playing) break;
      onLine && onLine(i, 'playing');
      const s = sentences[i];
      let buf;

      // 检查是否有缓存
      const emotion = _typeToEmotion(s.type);
      const enhancedText = _enhanceText(s.en, s.type);
      const voiceId = _getVoiceId(s.speaker);
      const cacheKey = this._key(enhancedText, voiceId, emotion);
      const fromCache = this.cache.has(cacheKey);

      // 如果没缓存，需要远程拉取，要保证距离上次拉取 >= 3.2 秒
      if (!fromCache) {
        const elapsed = Date.now() - lastFetchTime;
        const wait = Math.max(0, 900 - elapsed);
        if (wait > 0) {
          console.log(`等 ${wait}ms 避免限速`);
          await new Promise(r => setTimeout(r, wait));
        }
      }

      try {
        buf = await this._fetchBuffer(s.en, voiceId, s.type);
        if (!fromCache) lastFetchTime = Date.now();
      } catch (e) {
        console.warn('playAll skip', s.en, e.message);
        onLine && onLine(i, 'skipped');
        if (this.playing) await new Promise(r => setTimeout(r, 50));
        continue;
      }
      if (!this.playing) break;
      await this._playBuffer(buf);
      onLine && onLine(i, 'done');
      const pause = this.pauseAfter(s.type);
      if (this.playing && pause) await new Promise(r => setTimeout(r, pause));
    }
    this.playing = false;
    onDone && onDone();
  },

  _playBuffer(buf) {
    return new Promise(res => {
      const ctx = this._ensureCtx();
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      let ended = false;
      const done = () => { if (!ended) { ended = true; res(); } };
      src.onended = done;
      this.currentSrc = src;
      try { src.start(0); } catch (e) { done(); }
    });
  },

  stop() {
    this.playing = false;
    if (this.currentSrc) {
      try { this.currentSrc.stop(); } catch {}
      try { this.currentSrc.disconnect(); } catch {}
      this.currentSrc = null;
    }
  },
};

const Ambience = {
  ctx: null,
  nodes: [],
  gain: null,
  active: false,

  async start(kind = 'home') {
    this.stop();
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = TTS._ensureCtx();
    if (this.ctx.state === 'suspended') {
      try { await this.ctx.resume(); } catch {}
    }
    this.gain = this.ctx.createGain();
    this.gain.gain.value = 0.035;
    this.gain.connect(this.ctx.destination);
    this.active = true;
    this._build(kind);
  },

  stop() {
    this.active = false;
    this.nodes.forEach(n => {
      try { n.stop && n.stop(); } catch {}
      try { n.disconnect && n.disconnect(); } catch {}
    });
    this.nodes = [];
    if (this.gain) {
      try { this.gain.disconnect(); } catch {}
      this.gain = null;
    }
  },

  _build(kind) {
    if (!this.gain || !this.ctx) return;
    if (kind === 'rain') return this._noise(0.045, 900, 0.9);
    if (kind === 'kitchen') { this._hum(170, 0.012); return this._noise(0.018, 1800, 0.35); }
    if (kind === 'market') { this._hum(220, 0.012); return this._noise(0.026, 1200, 0.45); }
    if (kind === 'park') { this._hum(520, 0.008); return this._noise(0.018, 2200, 0.3); }
    if (kind === 'night') { this._hum(110, 0.01); return this._noise(0.01, 700, 0.25); }
    this._hum(140, 0.01);
    this._noise(0.012, 1000, 0.25);
  },

  _noise(level, freq, q) {
    const len = this.ctx.sampleRate * 2;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * level;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = freq;
    filter.Q.value = q;
    src.connect(filter);
    filter.connect(this.gain);
    src.start();
    this.nodes.push(src, filter);
  },

  _hum(freq, level) {
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    g.gain.value = level;
    osc.connect(g);
    g.connect(this.gain);
    osc.start();
    this.nodes.push(osc, g);
  },
};

function _getVoiceId(speaker) {
  if (VOICE_IDS[speaker]) return VOICE_IDS[speaker];
  return 'female-shaonv';
}

// ============ Recorder：MediaRecorder + Whisper /stt ============
const Recorder = {
  rec: null,
  chunks: [],
  stream: null,
  lastBlob: null,
  _lastUrl: null,

  isSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  },

  _pickMime() {
    const cands = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus'];
    for (const m of cands) {
      try { if (MediaRecorder.isTypeSupported(m)) return m; } catch {}
    }
    return '';
  },

  async start() {
    if (!this.isSupported()) throw new Error('浏览器不支持录音 (iOS 14.3+ Safari 才行)');
    this.chunks = [];
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = this._pickMime();
    this.rec = new MediaRecorder(this.stream, mime ? { mimeType: mime } : undefined);
    this.rec.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
    this.rec.start();
  },

  isRecording() { return !!(this.rec && this.rec.state === 'recording'); },

  stop() {
    return new Promise(res => {
      if (!this.rec) { res(null); return; }
      const rec = this.rec;
      rec.onstop = () => {
        const type = rec.mimeType || 'audio/mp4';
        const blob = this.chunks.length ? new Blob(this.chunks, { type }) : null;
        this.lastBlob = blob;
        if (this._lastUrl) { try { URL.revokeObjectURL(this._lastUrl); } catch {} this._lastUrl = null; }
        if (this.stream) {
          this.stream.getTracks().forEach(t => { try { t.stop(); } catch {} });
          this.stream = null;
        }
        this.rec = null;
        res(blob);
      };
      try { rec.stop(); } catch { res(null); }
    });
  },

  async transcribe(blob) {
    if (!Config.isReady()) throw new Error('请先填 Worker 设置');
    if (!blob) throw new Error('录音为空');
    const form = new FormData();
    const filename = (blob.type || '').includes('webm') ? 'audio.webm'
                  : (blob.type || '').includes('ogg')  ? 'audio.ogg'
                  : 'audio.mp4';
    form.append('file', blob, filename);
    form.append('password', Config.password);
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/stt', {
      method: 'POST', body: form,
    });
    if (!resp.ok) {
      const e = await resp.text();
      throw new Error('STT ' + resp.status + ': ' + e.slice(0, 100));
    }
    const data = await resp.json();
    return (data && data.text) || '';
  },

  hasPlayback() { return !!this.lastBlob; },

  playback() {
    if (!this.lastBlob) return;
    if (!this._lastUrl) this._lastUrl = URL.createObjectURL(this.lastBlob);
    const a = new Audio(this._lastUrl);
    a.play().catch(err => console.warn('playback fail', err));
  },
};

// ============ 发音评分 ============
const Pronunciation = {
  norm(s) {
    return (s || '').toLowerCase()
      .replace(/[\u2018\u2019']/g, "'")
      .replace(/\(laughs\)|\(sighs\)|\(gasps\)|\(coughs\)|\(crying\)/g, '') // 去掉表情标签
      .replace(/[^a-z0-9'\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\bgonna\b/g, 'going to')
      .replace(/\bwanna\b/g, 'want to')
      .replace(/\bgotta\b/g, 'got to')
      .replace(/\blemme\b/g, 'let me')
      .replace(/\bgimme\b/g, 'give me')
      .replace(/\bkinda\b/g, 'kind of')
      .replace(/\bdunno\b/g, "don't know")
      .replace(/'/g, '')
      .trim();
  },
  similarity(target, heard) {
    const t = this.norm(target);
    const h = this.norm(heard);
    if (!t) return 0;
    if (!h) return 0;
    const tw = t.split(' '), hw = h.split(' ');
    const wordDist = this._lev(tw, hw);
    const wordSim = 1 - wordDist / Math.max(tw.length, hw.length);
    const charDist = this._lev(t.split(''), h.split(''));
    const charSim = 1 - charDist / Math.max(t.length, h.length);
    const sim = wordSim * 0.7 + charSim * 0.3;
    return Math.max(0, Math.min(100, Math.round(sim * 100)));
  },
  lengthRatio(target, heard) {
    const tw = this.norm(target).split(' ').filter(Boolean).length;
    const hw = this.norm(heard).split(' ').filter(Boolean).length;
    return tw === 0 ? 0 : hw / tw;
  },
  _lev(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n; if (n === 0) return m;
    const dp = Array(n + 1).fill(0).map((_, i) => i);
    for (let i = 1; i <= m; i++) {
      let prev = dp[0]; dp[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = dp[j];
        dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
        prev = tmp;
      }
    }
    return dp[n];
  },
  passed(target, heard, minScore = 70, minLenRatio = 0.6) {
    const s = this.similarity(target, heard);
    const r = this.lengthRatio(target, heard);
    return { score: s, lenRatio: r, ok: s >= minScore && r >= minLenRatio };
  },
};

// ============ 打卡追踪 ============
const Tracking = {
  _key: 'track_v1',
  _load() { return Storage.get(this._key, { days: {}, streak: 0, lastDate: '', startDate: '' }); },
  _save(d) { Storage.set(this._key, d); },

  markDone(dayId, sentenceIdx) {
    const d = this._load();
    const today = this.todayStr();
    if (!d.startDate) d.startDate = today;
    if (!d.days[today]) d.days[today] = { dayId, done: [] };
    if (!d.days[today].done.includes(sentenceIdx)) d.days[today].done.push(sentenceIdx);
    this._save(d);
  },

  completeDay(dayId) {
    const d = this._load();
    const today = this.todayStr();
    if (!d.days[today]) d.days[today] = { dayId, done: [] };
    d.days[today].finished = true;
    const yest = this.dateOffset(-1);
    if (d.lastDate === yest || d.lastDate === today) {
      if (d.lastDate !== today) d.streak += 1;
    } else if (d.lastDate !== today) {
      d.streak = 1;
    }
    d.lastDate = today;
    this._save(d);
    return d.streak;
  },

  getToday() { return this._load().days[this.todayStr()] || null; },
  getStreak() { return this._load().streak; },
  getAllDays() { return this._load().days; },

  currentDayId(maxDay) {
    const d = this._load();
    const finished = Object.values(d.days).filter(x => x.finished).map(x => x.dayId);
    const max = finished.length ? Math.max(...finished) : 0;
    const next = max + 1;
    return next > maxDay ? ((next - 1) % maxDay) + 1 : next;
  },

  todayStr() { return new Date().toISOString().slice(0, 10); },
  dateOffset(n) {
    const d = new Date(); d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  },
};

window.DE = { Storage, Config, TTS, Ambience, Recorder, Pronunciation, Tracking };

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

// ===== 英文音色 ID（speech-02 全套英文音色）=====
// 姐姐：强势霸道
// 弟弟：怂、脾气大、爱惹事
// 妈妈：温暖但能严肃
// 爸爸：沉稳
const VOICE_IDS = {
  mom:       'English_CalmWoman',           // 冷静英文女声 - 妈妈
  dad:       'English_Trustworth_Man',      // 可信任男声 - 爸爸
  sister:    'English_Bossy_Leader',        // 强势女声 - 姐姐 9 岁
  brother:   'English_PlayfulGirl',         // 调皮男声 - 弟弟 7 岁（其实是男孩声音）
  teacher:   'English_Gentle-voiced_man',   // 老师
  doctor:    'English_Trustworth_Man',
  grandma:   'English_Wiselady',
  grandpa:   'English_ReservedYoungMan',
  classmate: 'English_PlayfulGirl',
  kid:       'English_PlayfulGirl',
};

// type → MiniMax emotion 映射（更激进）
function _typeToEmotion(type) {
  if (!type) return 'neutral';
  const t = String(type).toLowerCase();
  if (t.includes('cry') || t.includes('whine') || t.includes('sad')) return 'sad';
  if (t.includes('angry') || t.includes('annoy') || t.includes('yell') || t.includes('loud') || t.includes('pout') || t.includes('rushed') || t.includes('boss') || t.includes('stern')) return 'angry';
  if (t.includes('excite') || t.includes('proud') || t.includes('cute') || t.includes('cheer') || t.includes('laugh') || t.includes('silly') || t.includes('sweet') || t.includes('play')) return 'happy';
  if (t.includes('scare') || t.includes('worry')) return 'fearful';
  if (t.includes('surprise') || t.includes('curious')) return 'surprised';
  return 'neutral';
}

// type → speed（不同情绪不同语速，更真实）
function _typeToSpeed(type) {
  if (!type) return 1.15;
  const t = String(type).toLowerCase();
  // 快语速：急、生气、激动
  if (t.includes('rushed') || t.includes('yell') || t.includes('angry') || t.includes('annoy') || t.includes('excite') || t.includes('loud')) return 1.30;
  // 慢语速：温柔、悄悄话、累、伤心
  if (t.includes('whisper') || t.includes('soft') || t.includes('tired') || t.includes('cozy') || t.includes('cry') || t.includes('sad')) return 1.0;
  // 默认：1.15，比正常稍快，模拟真人对话
  return 1.18;
}

// 给文本加 MiniMax 的表情标签（让语气更逼真）
// 注意：只在特定情绪下加，避免破坏发音学习
function _enhanceText(text, type) {
  if (!type) return text;
  const t = String(type).toLowerCase();
  // 学习用 App，不能加太多干扰，但偶尔加点真人感
  if (t.includes('laugh')) return text + ' (laughs)';
  if (t.includes('cry')) return text + ' (sighs)';
  return text;
}

// ============ TTS：Web Audio API + AudioContext ============
const TTS = {
  ctx: null,
  cache: new Map(),
  playing: false,
  currentSrc: null,

  // 句间停顿（更短，符合真人对话节奏）
  pauseAfter(type) {
    if (!type) return 200;
    const t = String(type).toLowerCase();
    if (t.includes('rushed') || t.includes('yell') || t.includes('loud')) return 80;   // 急促对话，几乎没停顿
    if (t.includes('whisper') || t.includes('soft') || t.includes('cozy')) return 400;
    if (t.includes('tired') || t.includes('cry')) return 350;
    return 220;  // 默认 220ms，真人对话节奏
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

  _key(text, voice, emotion) { return `${voice}::${emotion}::${text}`; },

  // 单次拉取（不重试）
  async _fetchBufferOnce(text, voiceId, emotion, speed) {
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        voice_id: voiceId,
        emotion,
        speed,
        password: Config.password,
      }),
    });
    if (!resp.ok) {
      const e = await resp.text();
      throw new Error('TTS ' + resp.status + ': ' + e.slice(0, 100));
    }
    const arr = await resp.arrayBuffer();
    const ctx = this._ensureCtx();
    const buf = await new Promise((res, rej) => {
      try {
        const p = ctx.decodeAudioData(arr, b => res(b), e => rej(e));
        if (p && p.then) p.then(res, rej);
      } catch (e) { rej(e); }
    });
    return buf;
  },

  // 拉取 + 失败重试（最多 3 次）
  async _fetchBuffer(text, voiceId, type) {
    const emotion = _typeToEmotion(type);
    const speed = _typeToSpeed(type);
    const enhancedText = _enhanceText(text, type);

    const key = this._key(enhancedText, voiceId, emotion);
    if (this.cache.has(key)) return this.cache.get(key);
    if (!Config.isReady()) throw new Error('请先在设置里填 Worker 地址和密码');

    let lastErr;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const buf = await this._fetchBufferOnce(enhancedText, voiceId, emotion, speed);
        this.cache.set(key, buf);
        return buf;
      } catch (e) {
        lastErr = e;
        console.warn(`TTS attempt ${attempt}/3 failed for "${text.slice(0,30)}": ${e.message}`);
        // 限速错误就等久一点
        const isRateLimit = e.message && (e.message.includes('429') || e.message.includes('1024') || e.message.includes('rate'));
        const wait = isRateLimit ? 1500 * attempt : 400 * attempt;
        if (attempt < 3) await new Promise(r => setTimeout(r, wait));
      }
    }
    throw lastErr;
  },

  async prefetchAll(sentences, onProgress) {
    let done = 0;
    const total = sentences.length;
    const queue = sentences.slice();
    const N = 2;  // 并发 2，给 MiniMax 留余地，避免限速
    const work = async () => {
      while (queue.length) {
        const s = queue.shift();
        try {
          await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
        } catch (e) {
          console.warn('prefetch fail', s.en, e.message);
        }
        done++;
        onProgress && onProgress(done, total);
      }
    };
    await Promise.all(Array(N).fill(0).map(work));
  },

  async playOne(s) {
    this.stop();
    const buf = await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
    await this._playBuffer(buf);
  },

  async playAll(sentences, onLine, onDone) {
    this.stop();
    this.playing = true;
    for (let i = 0; i < sentences.length; i++) {
      if (!this.playing) break;
      onLine && onLine(i, 'playing');
      const s = sentences[i];
      let buf;
      try {
        // _fetchBuffer 内部已经重试 3 次了，这里失败就是真的失败
        buf = await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
      } catch (e) {
        console.warn('playAll skip', s.en, e.message);
        onLine && onLine(i, 'skipped');
        // 失败后等 800ms 再继续，避免连续轰炸 MiniMax
        if (this.playing) await new Promise(r => setTimeout(r, 800));
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

function _getVoiceId(speaker) {
  if (VOICE_IDS[speaker]) return VOICE_IDS[speaker];
  return 'English_CalmWoman';
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

window.DE = { Storage, Config, TTS, Recorder, Pronunciation, Tracking };

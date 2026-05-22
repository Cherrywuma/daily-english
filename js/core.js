// Daily English - core.js
// Storage / Config / TTS (Web Audio + MiniMax) / Recorder (MediaRecorder + Whisper) / Pronunciation / Tracking
//
// 关键变化（相比昨晚版）：
//   - TTS 后端从 OpenAI 切换到 MiniMax
//   - voice 参数从 OpenAI 名字（shimmer/alloy）改成 MiniMax voice_id
//   - request body 加 emotion 字段（供 MiniMax 调情绪）
//   - 其他全部不动（WebAudio 调度、prefetch、Recorder、Whisper /stt 全部保留）

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

// ===== MiniMax voice_id 映射表 =====
const VOICE_IDS = {
  mom:       'female-yujie',
  dad:       'male-qn-jingying',
  sister:    'female-shaonv',
  brother:   'male-qn-badao',
  teacher:   'female-chengshu',
  doctor:    'male-qn-qingse',
  grandma:   'female-tianmei',
  grandpa:   'presenter_male',
  classmate: 'male-qn-qingse',
  kid:       'female-shaonv',
};

function _typeToEmotion(type) {
  if (!type) return 'neutral';
  const t = String(type).toLowerCase();
  if (t.includes('cry') || t.includes('whine') || t.includes('sad')) return 'sad';
  if (t.includes('angry') || t.includes('annoy') || t.includes('yell') || t.includes('loud') || t.includes('pout') || t.includes('rushed')) return 'angry';
  if (t.includes('excite') || t.includes('proud') || t.includes('cute') || t.includes('cheer') || t.includes('laugh') || t.includes('silly') || t.includes('sweet') || t.includes('play')) return 'happy';
  if (t.includes('scare')) return 'fearful';
  if (t.includes('surprise') || t.includes('curious')) return 'surprised';
  return 'neutral';
}

// ============ TTS：Web Audio API + AudioContext ============
const TTS = {
  ctx: null,
  cache: new Map(),
  playing: false,
  currentSrc: null,
  pauseAfter(type) {
    if (['rushed', 'yell', 'sisRushed', 'broRushed'].includes(type)) return 150;
    if (['whisper', 'cozy', 'momSoft', 'sisWhisper', 'broWhisper'].includes(type)) return 700;
    return 450;
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

  _key(text, voice) { return `${voice}::${text}`; },

  async _fetchBuffer(text, voiceId, type) {
    const key = this._key(text, voiceId);
    if (this.cache.has(key)) return this.cache.get(key);
    if (!Config.isReady()) throw new Error('请先在设置里填 Worker 地址和密码');

    const emotion = _typeToEmotion(type);
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        voice_id: voiceId,
        emotion,
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
    this.cache.set(key, buf);
    return buf;
  },

  async prefetchAll(sentences, onProgress) {
    let done = 0;
    const total = sentences.length;
    const queue = sentences.slice();
    const N = 3;
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
        buf = await this._fetchBuffer(s.en, _getVoiceId(s.speaker), s.type);
      } catch (e) {
        console.warn('playAll skip', s.en, e.message);
        onLine && onLine(i, 'skipped');
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
  const ds = (window.DAILY_LIFE && window.DAILY_LIFE.defaultSpeakers) || {};
  const v = ds[speaker];
  if (v && (v.includes('-') || v.startsWith('audiobook_') || v.startsWith('presenter_'))) {
    return v;
  }
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

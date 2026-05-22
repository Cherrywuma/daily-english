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

// ===== MiniMax 官方音色 ID（确认存在的）=====
// 这些是 MiniMax API 实际支持的 voice_id
// 虽然名字带"中文"但说英文也很流利（MiniMax 是多语言模型）
const VOICE_IDS = {
  mom:       'female-yujie',           // 御姐音 - 妈妈成熟温暖
  dad:       'male-qn-jingying',       // 精英青年男声 - 爸爸
  sister:    'cherry_sister_v1',       // 姐姐真人克隆声音 🎉
  brother:   'male-qn-badao',          // 霸道少年 - 弟弟 7 岁
  teacher:   'female-chengshu',        // 成熟女声 - 老师
  doctor:    'male-qn-qingse',         // 青年男声 - 医生
  grandma:   'female-tianmei',         // 甜美女声 - 暂代奶奶
  grandpa:   'presenter_male',         // 男主播 - 暂代爷爷
  classmate: 'male-qn-qingse',         // 同学
  kid:       'female-shaonv',          // 通用小孩
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
// 注意：暂时关闭，因为有些模型不认这些标签
function _enhanceText(text, type) {
  return text;  // 保守做法：不加任何标签
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
    for (let attempt = 1; attempt <= 4; attempt++) {
      try {
        const buf = await this._fetchBufferOnce(enhancedText, voiceId, emotion, speed);
        this.cache.set(key, buf);
        return buf;
      } catch (e) {
        lastErr = e;
        console.warn(`TTS attempt ${attempt}/4 failed for "${text.slice(0,30)}": ${e.message}`);
        // RPM 限速错误就等很久
        const isRateLimit = e.message && (e.message.includes('429') || e.message.includes('1002') || e.message.includes('1024') || e.message.includes('rate limit'));
        let wait;
        if (isRateLimit) {
          wait = 3000 * attempt;  // RPM 限速：3秒、6秒、9秒、12秒
        } else {
          wait = 500 * attempt;
        }
        if (attempt < 4) await new Promise(r => setTimeout(r, wait));
      }
    }
    throw lastErr;
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
      await new Promise(r => setTimeout(r, 3200));
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
        await new Promise(r => setTimeout(r, 3200));
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
        const wait = Math.max(0, 3200 - elapsed);
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

window.DE = { Storage, Config, TTS, Recorder, Pronunciation, Tracking };

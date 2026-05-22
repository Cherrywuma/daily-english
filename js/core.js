// Daily English - core.js (v4: MiniMax 版)

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

// ===== MiniMax 内置音色 ID =====
// 这些是 MiniMax 默认提供的，不用克隆就能用
// 如果效果不满意，可以登 MiniMax 后台找更多
const VOICE_IDS = {
  mom:     'female-yujie',      // 御姐音 - 妈妈温暖成熟
  dad:     'male-qn-jingying',  // 精英青年男声 - 爸爸沉稳
  sister:  'female-shaonv',     // 少女音 - 姐姐 9 岁
  brother: 'male-qn-badao',     // 霸道少年 - 弟弟 7 岁（替换为更合适的）
  teacher: 'female-chengshu',   // 成熟女声 - 老师
  doctor:  'male-qn-qingse',    // 青年男声 - 医生
  grandma: 'female-tianmei',    // 甜美女声（暂代奶奶）
  grandpa: 'presenter_male',    // 男主播（暂代爷爷）
  classmate: 'male-qn-qingse',
};

// MiniMax 支持的情绪值（直接传给 API）
// 可选: happy, sad, angry, fearful, disgusted, surprised, neutral
function emotionToMiniMax(type) {
  if (!type) return 'neutral';
  const t = type.toLowerCase();
  if (t.includes('cry') || t.includes('sad') || t.includes('whine')) return 'sad';
  if (t.includes('angry') || t.includes('annoy') || t.includes('yell') || t.includes('loud') || t.includes('pout')) return 'angry';
  if (t.includes('excite') || t.includes('proud') || t.includes('cute') || t.includes('cheer') || t.includes('laugh') || t.includes('silly') || t.includes('sweet')) return 'happy';
  if (t.includes('scare')) return 'fearful';
  if (t.includes('surprise') || t.includes('curious')) return 'surprised';
  return 'neutral';
}

// ============ TTS (MiniMax) ============
const TTS = {
  cache: {},
  _audio: null,
  _unlocked: false,
  _defaultSpeed: 1.0,

  init() {
    if (this._audio) return;
    this._audio = new Audio();
    this._audio.preload = 'auto';
    this._audio.preservesPitch = false;
    this._audio.mozPreservesPitch = false;
    this._audio.webkitPreservesPitch = false;
  },

  async unlock() {
    this.init();
    if (this._unlocked) return;
    try {
      const silent = 'data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgP////////////////////////////////////////////////////////////////8AAAAATGF2YzU3LjEwAAAAAAAAAAAAAAAAJAQHQQAAgAAAAnFMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
      this._audio.src = silent;
      this._audio.volume = 0;
      await this._audio.play();
      this._audio.pause();
      this._audio.currentTime = 0;
      this._audio.volume = 1;
      this._unlocked = true;
    } catch (e) {
      this._unlocked = true;
    }
  },

  async speak(text, speakerOrVoiceId, instructions = '', opts = {}) {
    this.init();
    this.stop();

    if (!Config.isReady()) {
      alert('请先在设置里填 Worker 地址和密码');
      return;
    }

    // speakerOrVoiceId 可以是 "mom"/"sister"，也可以是 voice_id
    let voice_id = speakerOrVoiceId;
    if (VOICE_IDS[speakerOrVoiceId]) {
      voice_id = VOICE_IDS[speakerOrVoiceId];
    }

    const emotion = opts.emotion || 'neutral';
    const key = `${voice_id}::${text}::${emotion}`;
    let url = this.cache[key];

    if (!url) {
      try {
        const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text,
            voice_id,
            password: Config.password,
            speed: opts.apiSpeed || 1.0,
            emotion,
          }),
        });
        if (!resp.ok) {
          const e = await resp.text();
          console.error('TTS error', resp.status, e);
          alert('TTS 调用失败: ' + resp.status + '\n' + e.slice(0, 200));
          return;
        }
        const blob = await resp.blob();
        url = URL.createObjectURL(blob);
        this.cache[key] = url;
      } catch (e) {
        console.error(e);
        alert('网络错误：' + e.message);
        return;
      }
    }

    return new Promise((res) => {
      const a = this._audio;
      const speed = opts.speed || this._defaultSpeed;

      const onEnd = () => {
        a.removeEventListener('ended', onEnd);
        a.removeEventListener('error', onErr);
        res();
      };
      const onErr = (e) => {
        a.removeEventListener('ended', onEnd);
        a.removeEventListener('error', onErr);
        console.error('[TTS] audio error:', e);
        res();
      };
      a.addEventListener('ended', onEnd);
      a.addEventListener('error', onErr);

      a.src = url;
      a.playbackRate = speed;

      const playPromise = a.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch((err) => {
          console.error('[TTS] play failed:', err);
          a.removeEventListener('ended', onEnd);
          a.removeEventListener('error', onErr);
          res();
        });
      }
    });
  },

  async speakAs(speaker, text, type = 'neutral', opts = {}) {
    const emotion = emotionToMiniMax(type);
    return this.speak(text, speaker, '', { ...opts, emotion });
  },

  stop() {
    if (this._audio && !this._audio.paused) {
      try { this._audio.pause(); } catch {}
    }
  },

  voiceIds: VOICE_IDS,
  emotionToMiniMax,
};

const Recognition = {
  rec: null,
  start(onResult, onError) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      onError && onError('iOS Safari 不支持网页语音识别（Apple 限制）');
      return;
    }
    if (this.rec) { try { this.rec.stop(); } catch {} }
    const r = new SR();
    r.lang = 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.continuous = false;
    r.onresult = (e) => {
      const t = e.results[0][0].transcript || '';
      onResult && onResult(t);
    };
    r.onerror = (e) => onError && onError(e.error || 'error');
    r.onend = () => { this.rec = null; };
    try { r.start(); this.rec = r; } catch (e) { onError && onError(e.message); }
  },
  stop() { if (this.rec) { try { this.rec.stop(); } catch {} this.rec = null; } },
  isSupported() { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); },
};

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
    if (!t || !h) return 0;
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
  passed(target, heard, minScore = 75, minLenRatio = 0.7) {
    const s = this.similarity(target, heard);
    const r = this.lengthRatio(target, heard);
    return { score: s, lenRatio: r, ok: s >= minScore && r >= minLenRatio };
  },
};

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

window.DE = { Storage, Config, TTS, Recognition, Pronunciation, Tracking };

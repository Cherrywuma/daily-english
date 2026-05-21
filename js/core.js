// Daily English - core.js
// Storage / TTS / Recognition / Pronunciation / Tracking

const Storage = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { localStorage.removeItem(k); },
};

// ============ 配置 ============
const Config = {
  get workerUrl() { return Storage.get('cfg_worker_url', ''); },
  set workerUrl(v) { Storage.set('cfg_worker_url', v); },
  get password()  { return Storage.get('cfg_password', ''); },
  set password(v) { Storage.set('cfg_password', v); },
  isReady() { return !!this.workerUrl && !!this.password; },
};

// ============ TTS (调 Worker → OpenAI) ============
const TTS = {
  cache: {}, // 内存音频缓存 text+voice -> objectURL
  current: null,

  async speak(text, voice = 'shimmer', instructions = '') {
    this.stop();
    if (!Config.isReady()) {
      alert('请先在设置里填 Worker 地址和密码');
      return;
    }
    const key = `${voice}::${text}`;
    let url = this.cache[key];

    if (!url) {
      try {
        const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voice, instructions, password: Config.password }),
        });
        if (!resp.ok) {
          const e = await resp.text();
          console.error('TTS error', resp.status, e);
          alert('TTS 调用失败: ' + resp.status);
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
      const a = new Audio(url);
      this.current = a;
      a.onended = () => res();
      a.onerror = () => res();
      a.play().catch(() => res());
    });
  },

  stop() {
    if (this.current) { try { this.current.pause(); } catch {} this.current = null; }
  },
};

// ============ 语音识别 ============
const Recognition = {
  rec: null,
  start(onResult, onError) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { onError && onError('浏览器不支持语音识别（用 Safari 或 Chrome）'); return; }
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
};

// ============ 发音评分 ============
const Pronunciation = {
  // 清洗：小写、去标点、缩写归一
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
  // 词级编辑距离 + 字符相似度混合打分
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
  // 句长检查
  lengthRatio(target, heard) {
    const tw = this.norm(target).split(' ').filter(Boolean).length;
    const hw = this.norm(heard).split(' ').filter(Boolean).length;
    return tw === 0 ? 0 : hw / tw;
  },
  // 通用 Levenshtein（接受数组或字符串拆分）
  _lev(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n; if (n === 0) return m;
    const dp = Array(n + 1).fill(0).map((_, i) => i);
    for (let i = 1; i <= m; i++) {
      let prev = dp[0]; dp[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = dp[j];
        dp[j] = a[i - 1] === b[j - 1]
          ? prev
          : 1 + Math.min(prev, dp[j], dp[j - 1]);
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

// ============ 打卡追踪 ============
const Tracking = {
  _key: 'track_v1',
  _load() { return Storage.get(this._key, { days: {}, streak: 0, lastDate: '', startDate: '' }); },
  _save(d) { Storage.set(this._key, d); },

  // 今天打卡 (sentenceIdx 完成)
  markDone(dayId, sentenceIdx) {
    const d = this._load();
    const today = this.todayStr();
    if (!d.startDate) d.startDate = today;
    if (!d.days[today]) d.days[today] = { dayId, done: [] };
    if (!d.days[today].done.includes(sentenceIdx)) d.days[today].done.push(sentenceIdx);
    this._save(d);
  },

  // 整天完成
  completeDay(dayId) {
    const d = this._load();
    const today = this.todayStr();
    if (!d.days[today]) d.days[today] = { dayId, done: [] };
    d.days[today].finished = true;

    // 更新连续天数
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

  getToday() {
    const d = this._load();
    return d.days[this.todayStr()] || null;
  },
  getStreak() { return this._load().streak; },
  getAllDays() { return this._load().days; },

  // 当前应该学第几天（按已完成的天数算 + 1）
  currentDayId(maxDay) {
    const d = this._load();
    const finished = Object.values(d.days).filter(x => x.finished).map(x => x.dayId);
    const max = finished.length ? Math.max(...finished) : 0;
    const next = max + 1;
    return next > maxDay ? ((next - 1) % maxDay) + 1 : next; // 学完循环
  },

  todayStr() { return new Date().toISOString().slice(0, 10); },
  dateOffset(n) {
    const d = new Date(); d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  },
};

window.DE = { Storage, Config, TTS, Recognition, Pronunciation, Tracking };

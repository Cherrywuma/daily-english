# Daily English 手机端三大体验修复 — 设计文档

**日期**: 2026-05-21
**作者**: Cherry + Claude
**状态**: 设计已确认，待实现

---

## 1. 背景

姐弟两娃 + 妈妈/爸爸的日常英语对话学习 PWA，已上线 84 天 2520 句对话。
但在 iPhone 上有三个核心体验问题：

1. **整段对话连读卡住** — 点"开始连播"只能响一句就停。
2. **姐弟说话像"花栗鼠"** — 不像正常对话节奏，因为客户端 pitch shift 同时把语速也拉快了 20–25%。
3. **跟读模式无法打分、无法回放自己的录音** — 浏览器内置语音识别在 iOS Safari 不存在；录音回放功能根本没实现。

## 2. 共同根因

iOS Safari 对两个核心 API 有硬限制：
- `HTMLAudioElement + playbackRate` — autoplay block 严格，后续 `play()` 脱离用户手势上下文会被静默拒绝；且 `preservesPitch=false` 把音调和速度耦合。
- `webkitSpeechRecognition` — 完全不支持。

所以两个引擎都换：
- TTS 播放 → **Web Audio API（AudioContext + AudioBuffer 调度）**
- 跟读识别 → **MediaRecorder 录音 → Worker /stt → OpenAI Whisper API**

## 3. 架构总览

```
┌──────────────────────────────────────────────────────┐
│  pages/daily.html                                    │
│    listenPhase: 预下载进度条 → 连续播放整段对话      │
│    practicePhase: 点 🎤 录音 → 再点停止 → Whisper    │
│                   评分 → 回放按钮                    │
└──────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────┐
│  js/core.js                                          │
│    TTS  (Web Audio API)  ←─ 新                       │
│      ctx: AudioContext (lazy + 用户手势解锁)         │
│      cache: Map<voice::text, AudioBuffer>            │
│      prefetchAll(sentences) → 并行 fetch + decode    │
│      playOne(s) / playAll(sentences)                 │
│                                                      │
│    Recorder  ←─ 新                                   │
│      start() / stop() → blob                         │
│      transcribe(blob) → Whisper transcript           │
│      playback() ← 回放最近一次录音                   │
│                                                      │
│    Pronunciation  ← 保留（接 Whisper transcript）    │
│    Tracking       ← 保留                             │
│    Storage        ← 保留                             │
└──────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────┐
│  cloudflare-worker/worker.js                         │
│    POST /tts  → OpenAI TTS（不变）                   │
│    POST /stt  → OpenAI Whisper（新增）               │
└──────────────────────────────────────────────────────┘
```

## 4. 各模块详细设计

### 4.1 Worker: 新增 /stt 接口

```js
// 接收 multipart/form-data:
//   file: audio blob (audio/mp4 from iOS MediaRecorder)
//   password: APP_PASSWORD
// 返回: { text: "..." }

async function handleSTT(req, env) {
  const form = await req.formData();
  if (form.get('password') !== env.APP_PASSWORD) return j({ error: 'wrong password' }, 401);
  const file = form.get('file');
  if (!file) return j({ error: 'no file' }, 400);

  const upstream = new FormData();
  upstream.append('file', file, 'audio.mp4');
  upstream.append('model', 'whisper-1');
  upstream.append('language', 'en');
  upstream.append('response_format', 'json');

  const resp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.OPENAI_API_KEY}` },
    body: upstream,
  });
  if (!resp.ok) return j({ error: 'whisper', detail: await resp.text() }, 500);
  return new Response(await resp.text(), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
```

每日限额逻辑可复用 TTS 那条（同一个 KV key 或拆开）。

### 4.2 TTS 重写

```js
const TTS = {
  ctx: null,
  cache: new Map(),   // 'voice::text' -> AudioBuffer
  playing: false,

  _ensureCtx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return this.ctx;
  },

  // 必须在用户手势中调一次
  async unlock() {
    const ctx = this._ensureCtx();
    if (ctx.state === 'suspended') await ctx.resume();
  },

  async _fetchBuffer(text, voice, instructions) {
    const key = `${voice}::${text}`;
    if (this.cache.has(key)) return this.cache.get(key);
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, voice, instructions, password: Config.password }),
    });
    if (!resp.ok) throw new Error('TTS ' + resp.status);
    const arr = await resp.arrayBuffer();
    const buf = await this._ensureCtx().decodeAudioData(arr);
    this.cache.set(key, buf);
    return buf;
  },

  async prefetchAll(sentences, onProgress) {
    // 并发 4 路 fetch
    let done = 0;
    const tasks = sentences.map(s => async () => {
      await this._fetchBuffer(s.en, getVoice(s.speaker), getInstructions(s.speaker, s.type));
      done++;
      onProgress && onProgress(done, sentences.length);
    });
    const N = 4;
    const queue = [...tasks];
    await Promise.all(Array(N).fill(0).map(async () => {
      while (queue.length) await queue.shift()();
    }));
  },

  async playOne(s) {
    const buf = await this._fetchBuffer(s.en, getVoice(s.speaker), getInstructions(s.speaker, s.type));
    return this._play(buf);
  },

  _play(buf) {
    return new Promise(res => {
      const ctx = this._ensureCtx();
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.onended = () => res();
      this.currentSrc = src;
      src.start();
    });
  },

  async playAll(sentences, onLine) {
    this.playing = true;
    for (let i = 0; i < sentences.length; i++) {
      if (!this.playing) break;
      onLine && onLine(i);
      const s = sentences[i];
      const buf = await this._fetchBuffer(s.en, getVoice(s.speaker), getInstructions(s.speaker, s.type));
      if (!this.playing) break;
      await this._play(buf);
      // 句间停顿根据情绪决定
      const pause = pauseAfter(s.type);
      if (this.playing && pause) await new Promise(r => setTimeout(r, pause));
    }
    this.playing = false;
  },

  stop() {
    this.playing = false;
    if (this.currentSrc) { try { this.currentSrc.stop(); } catch {} this.currentSrc = null; }
  },
};

function pauseAfter(type) {
  if (['rushed', 'yell', 'sisRushed', 'broRushed'].includes(type)) return 150;
  if (['whisper', 'momSoft', 'cozy', 'sisWhisper', 'broWhisper'].includes(type)) return 700;
  return 450;
}
```

**注意**：iOS Safari 的 `AudioContext` 只有在用户手势中调 `resume()` 才会从 `suspended` 转 `running`。所以**所有播放入口（开始连播、再听一次、播放单句）都必须在 onclick 中先调 `TTS.unlock()`**。

### 4.3 Recorder 模块（新）

```js
const Recorder = {
  rec: null,
  chunks: [],
  lastBlob: null,
  stream: null,

  async start() {
    if (!navigator.mediaDevices) throw new Error('浏览器不支持录音');
    this.chunks = [];
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mime = MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4'
              : MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm'
              : '';
    this.rec = new MediaRecorder(this.stream, mime ? { mimeType: mime } : undefined);
    this.rec.ondataavailable = e => { if (e.data.size) this.chunks.push(e.data); };
    this.rec.start();
  },

  stop() {
    return new Promise(res => {
      if (!this.rec) return res(null);
      this.rec.onstop = () => {
        const blob = new Blob(this.chunks, { type: this.rec.mimeType });
        this.lastBlob = blob;
        if (this.stream) { this.stream.getTracks().forEach(t => t.stop()); this.stream = null; }
        this.rec = null;
        res(blob);
      };
      try { this.rec.stop(); } catch { res(null); }
    });
  },

  async transcribe(blob) {
    const form = new FormData();
    form.append('file', blob, 'audio.mp4');
    form.append('password', Config.password);
    const resp = await fetch(Config.workerUrl.replace(/\/$/, '') + '/stt', {
      method: 'POST', body: form,
    });
    if (!resp.ok) throw new Error('STT ' + resp.status);
    const { text = '' } = await resp.json();
    return text;
  },

  playback() {
    if (!this.lastBlob) return;
    const url = URL.createObjectURL(this.lastBlob);
    const a = new Audio(url);
    a.onended = () => URL.revokeObjectURL(url);
    a.play();
  },
};
```

### 4.4 daily.html 流程改造

**listenPhase**：
- 进入 daily 页面后，**立刻**（不阻塞）后台跑 `TTS.prefetchAll(sentences, onProgress)`，UI 上一个细进度条 `0 / 30`。
- "开始连播"按钮在进度达到 5 句后就启用（不需要等全 30 句都拿到）。
- 点连播 → `TTS.unlock()` → `TTS.playAll(sentences, onLine)`。
- onLine 回调把当前句高亮 + scrollIntoView。

**practicePhase**：

mic 按钮变 toggle，三态：
```
idle      → 🎤 "点麦克风跟读"
recording → 🔴 "录音中... 再点一下停 (4s 自动停)"
uploading → ⏳ "正在判分..."
```

伪代码：
```js
let recording = false, recordTimer = null;

async function onMic() {
  if (recording) return stopRec();
  await TTS.unlock();  // 顺便解锁 audio (回放需要)
  setStep(3);
  await Recorder.start();
  recording = true;
  setMicUI('recording');
  recordTimer = setTimeout(stopRec, 4000);
}

async function stopRec() {
  if (!recording) return;
  recording = false;
  clearTimeout(recordTimer);
  setMicUI('uploading');
  try {
    const blob = await Recorder.stop();
    const heard = await Recorder.transcribe(blob);
    const s = sentences[curIdx];
    const { score, lenRatio, ok } = DE.Pronunciation.passed(s.en, heard, PASS_SCORE, MIN_LEN_RATIO);
    showResult(score, lenRatio, ok, heard);   // 评分卡里渲染"听听刚才"按钮
    if (ok) { setStep(4); DE.Tracking.markDone(day.id, curIdx); setTimeout(next, 1500); }
    else handleFailure();
  } catch (e) {
    showError('网络问题，直接通过', e);
  }
  setMicUI('idle');
}
```

评分卡 HTML：
```html
<div class="result-card">
  <div class="emoji">💪</div>
  <div class="score">78<small>分</small></div>
  <div class="heard">你说的：i want a cookie</div>
  <div class="target">原句：I want one too</div>
  <div class="actions">
    <button onclick="Recorder.playback()">▶️ 听听刚才</button>
    <button onclick="onMic()">🔄 再试</button>
  </div>
</div>
```

**容错**：
- Whisper 返回空 → "没听到你说话，再来一次"，但仍然有 ▶️ 听听刚才（让孩子知道有没有录到）。
- 网络 fail → "网络问题，给你过了 😅"，标记通过，下一句。
- iOS < 14.3 无 MediaRecorder → 检测后降级为"只播放、不评分"模式，给个一次性提示。

### 4.5 数据层调整（data/daily-life.js）

只动三处：

**speakerHints**：写得激进些（替代客户端 pitch shift 的"娃娃音"效果）
```js
sister:    "Voice of a 9-year-old girl: high-pitched, squeaky, slightly nasal, energetic. Like an excited elementary school kid, NOT an adult woman pretending. "
brother:   "Voice of a 7-year-old boy: very high-pitched, breathy, lispy, sometimes mumbles. Like a young child, NOT an adult. "
mom:       "Warm, slightly tired Chinese-American mom voice. "
dad:       "Calm, low Chinese-American dad voice, not too deep. "
classmate: "Voice of an 8-year-old kid, neutral gender, high-pitched. "
teacher:   "Voice of a friendly elementary school teacher, clear and patient. "
doctor:    "Voice of a kind doctor speaking to a child, gentle and reassuring. "
grandma:   "Voice of a kind elderly Chinese-American grandma, soft and warm. "
grandpa:   "Voice of a kind elderly Chinese-American grandpa, calm and slow. "
```

**emotionMap**：给每条情绪加节奏/语速描述
（部分示例，全部 ~40 条都微调，保持原有 key 不变）
```js
broCry:    "Crying out loud, voice cracking, slow and trembling, sobbing between words. "
broWhine:  "Drawn-out whining, dragging vowels, slightly pouty and complaining. "
broExcite: "Speaking rapidly, almost yelling with excitement, breathless. "
broScared: "Voice trembling, hesitant, quiet but tense. "
sisAnnoy:  "Sharp and impatient, slightly exasperated, eye-rolling tone. "
sisProud:  "Bragging tone, slightly slow and deliberate, smug. "
sisWhisper:"Quiet whisper, slow, secretive. "
sisLoud:   "Loud and assertive, almost yelling. "
momTired:  "Slow, sighing, slightly drained voice. "
momCalling:"Calling out from another room, projected and slightly raised. "
rushed:    "Speaking quickly, slightly clipped, almost out of breath. "
yell:      "Loud yelling, almost shouting, voice strained. "
cozy:      "Slow, warm, drawn out, sleepy. "
whisper:   "Quiet whisper, very soft. "
laugh:     "Mid-laugh, giggling between words. "
surprised: "Sharp intake of breath, voice raised in surprise. "
// ... 其余按相同风格补完
```

**speakerPitch**：整个对象删除（客户端不再做 pitch shift）。

### 4.6 CSS 微调（css/style.css）

- 新增 `.result-card`、`.mic-btn.recording`（红点呼吸动画）、`.mic-btn.uploading`（旋转）、`.prefetch-bar`。

## 5. 改动文件清单

| 文件 | 改动 |
|---|---|
| `cloudflare-worker/worker.js` | 加 /stt 路由 + handleSTT 函数 |
| `js/core.js` | TTS 重写、新增 Recorder、删 speakerPitch 相关逻辑 |
| `pages/daily.html` | listenPhase 预下载进度、practicePhase 跟读流程重写 |
| `data/daily-life.js` | speakerHints / emotionMap 改写，speakerPitch 删除 |
| `css/style.css` | 评分卡、mic 状态、预下载进度条样式 |

84 天 2520 句对话**不动**。

## 6. 故障容错矩阵

| 场景 | 行为 |
|---|---|
| iOS < 14.3，无 MediaRecorder | 提示一次"系统太旧无法评分"，跟读变成"只播放原句，点'我说过了'手动下一句" |
| Whisper 网络失败 | 提示"网络问题，给你过了"，自动标记通过，下一句 |
| Whisper 返回空文本 | 提示"没听到你说话"，仍可▶️ 听刚才录的，可重试 |
| TTS prefetch 某句失败 | 继续 prefetch 其他句，连播跳过那句（onLine 标灰） |
| AudioContext.resume() 抛错 | 提示"请重新点一下按钮" |
| 录音权限被拒 | 弹"请在 Safari 设置里允许麦克风"，跟读模式禁用 |

## 7. 部署步骤

1. **Worker 部署**: 把改好的 `cloudflare-worker/worker.js` 整段复制到 Cloudflare Dashboard → Workers & Pages → 现有 worker → Edit code → Save and Deploy。**不需要新增任何环境变量**（OPENAI_API_KEY 和 APP_PASSWORD 已经有了）。
2. **静态站**: `git add -A && git commit -m "mobile fixes: WebAudio + Whisper + recorder" && git push`。GitHub Pages 自动构建。
3. **iPhone 测试**:
   - Safari 打开 `https://cherrywuma.github.io/daily-english/`
   - 在设置里检查 Worker URL 和密码
   - 选 Day 1，点连播，应该能连续播 30 句
   - 进跟读，点麦克风录音 → 再点停 → 看分数 → 点"听听刚才"
4. **验证脚本**: `node validate.cjs` 确认 84 天 30 句格式没破。

## 8. 测试 checklist

- [ ] Worker `/stt` 用 curl 上传一个 mp4 能拿到 transcript
- [ ] iPhone Safari 点连播能连续播完 30 句
- [ ] 姐姐弟弟语速接近成人（不再花栗鼠）
- [ ] 跟读录音 → 上传 → 出分数 → "听听刚才"能听到自己的声音
- [ ] 连播中点暂停立即停
- [ ] 跟读失败 3 次自动通过
- [ ] iOS 锁屏后回来仍能继续（best effort，不强求）

## 9. YAGNI 明确排除的东西

- 真正的 pitch shift（soundtouch.js 等）— 用 voice + instructions 代替
- VAD 自动停止录音 — 用固定 4s 超时 + 用户主动点停
- 三模式入口（上一轮没 push 的那个）— 本次不做，保持现有"先听整段 → 再跟读"两阶段
- 录音的服务端持久化 — 只内存里存 lastBlob
- 跟读分数历史曲线 — 不做，专注当前句

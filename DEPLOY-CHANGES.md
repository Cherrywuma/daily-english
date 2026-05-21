# 手机端三大问题修复 — 部署说明

**日期**: 2026-05-21
**修了什么**: iOS 整段连读卡住 / 姐弟"花栗鼠"变速 / 跟读无法打分+无法回放

---

## 一句话总结

把播放引擎从 `HTMLAudioElement + playbackRate` 换成 **Web Audio API**，把识别从 `webkitSpeechRecognition` 换成 **MediaRecorder + OpenAI Whisper**（走你已有的 Cloudflare Worker），录音回放免费送。

## 改动了哪些文件

| 文件 | 改了啥 |
|---|---|
| `cloudflare-worker/worker.js` | **加 `/stt` 路由**，转发到 OpenAI Whisper API |
| `js/core.js` | TTS 重写为 Web Audio；新增 `Recorder` 模块；删除浏览器内置识别；评分阈值微调 (75/0.7 → 70/0.6) |
| `pages/daily.html` | 预下载进度条；连播改用新 TTS；mic 改 toggle 状态机；评分卡加"▶️ 听听刚才"按钮；iOS<14.3 降级 |
| `data/daily-life.js` | `speakerHints` 写激进（替代 pitch shift）；`emotionMap` 每条加节奏；`speakerPitch` 清空 |
| `css/style.css` | （未改，所有新样式 inline 在 daily.html 的 `<style>` 里） |
| `docs/superpowers/specs/2026-05-21-mobile-fixes-design.md` | 完整设计文档 |

84 天 2520 句对话**一句没动**。`node validate.cjs` 已通过。

## 部署步骤

### ① Cloudflare Worker（必做，否则跟读 STT 不可用）

1. 浏览器打开 https://dash.cloudflare.com
2. **Workers & Pages** → 找到现有的 daily-english worker → **Edit code**
3. 用 `E:\daily english\cloudflare-worker\worker.js` 整个内容覆盖
4. **Save and Deploy**
5. 验证：`curl https://<你的worker>.workers.dev/health` 应该返回 `ok`

**不需要新增环境变量**——Whisper 用的还是同一个 `OPENAI_API_KEY`。

### ② 推到 GitHub Pages

家里这台电脑（git 已经配好的话）：

```bash
cd "E:\daily english"
git add -A
git commit -m "mobile fixes: WebAudio + Whisper + recorder"
git push
```

GitHub Pages 自动构建。1-2 分钟后 https://cherrywuma.github.io/daily-english/ 就是新版本。

> 中国大陆访问 GitHub 慢的话：先开代理软件，再 `git config http.proxy http://127.0.0.1:<端口>`（参考之前的交接文档）。

### ③ iPhone 上验证（5 分钟）

1. Safari 打开 https://cherrywuma.github.io/daily-english/
2. 进**设置**确认 Worker URL 和密码还在
3. 选 **Day 1** → 进页面后顶上有个细进度条（后台预下载 30 句）
4. 等进度跑到 **5/30 以上** 就可以点 **▶️ 开始连播整段对话**
   - **验证点 1**：能连续播完 30 句（不再"只响一句"）
   - **验证点 2**：姐姐弟弟说话速度跟妈妈一样自然（不再"花栗鼠"）
5. 点 **🎤 跳过通听 直接跟读**
6. 第一句播完后点 🎤 → 看到 🔴 录音中 → 念一遍 → 再点一下停
   - **验证点 3**：1-2 秒后出分数（Whisper 转写 + 评分）
   - **验证点 4**：评分卡下面有 **▶️ 听听刚才** 按钮，点了能听到自己刚才念的

如果跟读出现"⚠️ 此设备无法录音"——查 iOS 版本，需要 **14.3+**。你 iPhone 应该没问题。

## 故障应急

| 症状 | 原因 | 解决 |
|---|---|---|
| 点连播完全没声音 | Worker URL/密码错 / Worker 没部署新版 | 进设置重填；重新部署 worker |
| 跟读出分但是 0 分 | Whisper 听到空白（环境噪音太大/麦克风没权限） | Safari 设置 → 网站权限 → 允许麦克风 |
| 评分卡没有 ▶️ 听刚才 按钮 | iOS<14.3 不支持 MediaRecorder | 升级 iOS |
| 进度条卡在 0/30 不动 | TTS 网络全失败 / Worker 限额耗尽 | 看 Worker 日志；检查 OPENAI_API_KEY 余额 |
| 连播中切到微信回来就停了 | iOS 后台音频限制（已知坑） | 回来手动再点 ▶️（不强求修） |

## 回滚

如果新版本出问题，旧版本就是 `git log` 上的 `4730c49` commit。

```bash
git reset --hard 4730c49
git push --force
```

Worker 那边把 `/stt` 接口删掉就退回旧逻辑（其实留着也没事，前端不调就不会被用到）。

## 成本

- Whisper API: $0.006/分钟 ≈ 每句 4 秒 = $0.0004
- 一天 30 句跟读 ≈ 9 分钱人民币
- 跟 TTS 比可以忽略不计

## 不在本次范围内的事（明确不做）

- 真正的 pitch shift 库（soundtouch.js）—— 用 voice + instructions 替代
- 三模式入口（上一轮没 push 那个）—— 保持现在的"先听整段 → 再跟读"两阶段
- 跟读历史曲线 / 评分图表
- 跟读录音云端存储
- VAD 自动停止录音 —— 4 秒超时 + 手动停 已经够用

---

**Sources**:
- 设计文档: [docs/superpowers/specs/2026-05-21-mobile-fixes-design.md](docs/superpowers/specs/2026-05-21-mobile-fixes-design.md)
- 原项目: [GitHub - Cherrywuma/daily-english](https://github.com/Cherrywuma/daily-english)

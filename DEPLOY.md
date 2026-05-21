# 部署指南 — 不懂代码也能跟着做

> 整个过程大约 30-40 分钟。
> 中间需要的密码、URL、key，建议你边做边写在一张纸上。

---

## 你需要准备

- ✅ GitHub 账号（你已经有：Cherrywuma）
- ✅ Anthropic API key（你已经有，**这个项目用不到**，留着）
- ⏳ OpenAI API key（**这个项目要用**，没有的话第 0 步教你买）
- ⏳ Cloudflare 账号（免费，注册一个）

---

## 第 0 步：买 OpenAI 充值（一次性 $5）

1. 去 https://platform.openai.com/ 注册账号
2. 左边菜单 → Billing → Add payment method → 绑信用卡或 PayPal
3. 充 $5（够用半年以上）
4. 左边菜单 → API keys → Create new secret key → 起名 `daily-english`
5. **立刻复制 key**（格式 `sk-proj-xxxxxxxxx...`），关掉就再也看不到了
6. 记在纸上：`OPENAI_API_KEY = sk-proj-...`

> 💡 如果买不了 OpenAI 充值（国内信用卡支付有时被拒），告诉 Cowork 让它帮你查"国内可用的 OpenAI 代充值"，或者改用 DeepSeek + Azure TTS 方案，要重写 Worker 才行。

---

## 第 1 步：把代码传到 GitHub

### 1.1 创建新仓库

1. 登录 GitHub
2. 右上角 + → New repository
3. Repository name: `daily-english`
4. **选 Public**（这样 GitHub Pages 才免费）
5. 不要勾任何东西（README/gitignore/license 都不勾）
6. Create repository

### 1.2 把文件上传

最简单的办法：拖拽。
1. 进入刚建的空仓库
2. 点 "uploading an existing file"（蓝字链接）
3. 把解压后的 `daily-english` 文件夹里**所有东西**（注意不是文件夹本身，是里面的 `index.html`、`css/`、`js/`、`pages/`、`data/`、`cloudflare-worker/`、`README.md`、`DEPLOY.md`）选中拖进浏览器
4. 等上传完，最下面写一句 commit message 比如 `首次上传`
5. Commit changes

### 1.3 开 GitHub Pages

1. 仓库页面 → Settings（最上面那排最右边）
2. 左边菜单 → Pages
3. Source → Deploy from a branch
4. Branch → main → / (root) → Save
5. 等 1-2 分钟，刷新页面，顶上会出现 `Your site is live at https://cherrywuma.github.io/daily-english/`
6. 记在纸上：`APP_URL = https://cherrywuma.github.io/daily-english/`

---

## 第 2 步：部署 Cloudflare Worker

这一步是为了**保护你的 OpenAI key**——直接放前端会被人偷走的。

### 2.1 注册 Cloudflare

1. 去 https://dash.cloudflare.com/sign-up 注册（免费）
2. 邮箱验证一下

### 2.2 创建 Worker

1. 左边菜单 → Workers & Pages
2. Create application → Create Worker
3. 起名 `daily-english-tts`（这个名字会变成你 Worker 的 URL）
4. Deploy（先发个默认的 hello world 上去）
5. 点 "Edit code"（右上角）
6. 把整个 worker 代码删光，把 `cloudflare-worker/worker.js` 文件里的内容**全部复制粘贴**进去
7. 右上角 Deploy
8. 记在纸上：`WORKER_URL = https://daily-english-tts.你的用户名.workers.dev`（页面上能看到）

### 2.3 设置环境变量（重要！）

1. 回到 Worker 主页 → Settings → Variables and Secrets
2. 添加两个：

| 变量名 | 值 | 类型 |
|--------|----|----|
| `OPENAI_API_KEY` | 你的 `sk-proj-...` | **Secret** |
| `APP_PASSWORD` | 你自己起一个，比如 `mahua2026` | **Secret** |

3. 两个都要点 Encrypt（变成 Secret）
4. Save

> 💡 `APP_PASSWORD` 是你 App 用来调 Worker 的密码，**只有你知道**，别人没密码就调不了你的 OpenAI。

---

## 第 3 步：连接 App 和 Worker

1. 打开你的 App：`https://cherrywuma.github.io/daily-english/`
2. 主页顶上有个齿轮图标"⚙ 设置" → 点开
3. 填两个：
   - Worker URL: 第 2.2 步记的 `https://daily-english-tts.你的用户名.workers.dev`
   - App 密码: 第 2.3 步设的 `mahua2026`
4. 点"测试 TTS"
5. 听到妈妈的声音说 "Hello sweetie" → ✅ 成功！
6. 如果没声音 → 看下面的"常见问题"

---

## 第 4 步：加到 iPhone 主屏（让它像个真 App）

1. 用 iPhone 的 **Safari**（不能用微信内置浏览器）打开 `https://cherrywuma.github.io/daily-english/`
2. 底部分享按钮 → "添加到主屏幕"
3. 名字改成"每日英语"
4. 添加
5. 主屏就有图标了，点开像 App 一样

---

## 完成！日常使用

每天点主屏的"每日英语"图标 → 点"开始今日打卡" → 跟孩子一起完成 30 句。

**连续打卡天数**会自动记录，第 25 天自动从 Day 1 重新开始（24 天循环）。

---

## 常见问题

### Q: 测试 TTS 没声音
- 看浏览器开发者工具 → Network → 看那个 `/tts` 请求是不是 200
- 401 错误 → APP_PASSWORD 没对上
- 500 错误 → OPENAI_API_KEY 没设对，或者 OpenAI 余额不够
- CORS 错误 → Worker 没部署成功，重发一遍

### Q: 跟读评分总是不过
- 让孩子靠近麦克风
- 第一次用浏览器要点"允许使用麦克风"
- iPhone 上必须用 Safari，Chrome 也行但 Safari 最稳

### Q: 我想换孩子名字 / 加内容怎么办？
- 名字：App 里只显示"妈妈/姐姐/弟弟"通用称呼，不显示具体名字，所以不用改
- 加内容：让 Cowork 或下次 Claude 对话帮你接着写 Day 25+，格式照 `data/daily-life.js` 里 Day 24 抄

### Q: 担心账单失控
- 去 OpenAI 后台 → Limits → Set monthly budget = $2
- 超额自动停，不会扣爆

### Q: 想多人用 / 给同学家也用
- 把 `APP_URL` 发给她，让她也设置同一个 Worker URL + 密码就行
- 但你的 OpenAI 账单会涨。建议各家自己部署 Worker

---

## 给你的备忘清单（建议存一份）

```
GitHub 仓库:     https://github.com/cherrywuma/daily-english
App 地址:        https://cherrywuma.github.io/daily-english/
Worker 地址:     https://daily-english-tts.<你的>.workers.dev
App 密码:        ___________
OpenAI 用量:    https://platform.openai.com/usage
Cloudflare 用量: https://dash.cloudflare.com → Workers & Pages → daily-english-tts
```

---

部署遇到任何卡壳，截图 + 描述发给 Cowork 或下次和 Claude 说，能帮你定位。

加油，祝姐弟开口说！

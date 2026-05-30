// shadow-widget.js — 可复用的"逐句跟读"小组件
// 给任意页面的句子加 🎤 跟读按钮，点 → 录音 → Whisper 转写 → 逐词高亮评分
//
// 用法（HTML 端）：
//   <button class="line-mic" data-en="Wake up!" onclick="ShadowMic.onClick(this)">🎤</button>
//   按钮所在的 .line（如果有）下面会自动插一个 .line-result 显示结果
//
// 依赖：window.DE.Recorder、window.DE.Pronunciation、window.DE.TTS

(function () {
  const RECORD_MAX_MS = 4000;
  const PASS_SCORE = 70;
  const MIN_LEN_RATIO = 0.6;

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }

  function ensureCss() {
    if (document.getElementById('shadow-mic-css')) return;
    const style = document.createElement('style');
    style.id = 'shadow-mic-css';
    style.textContent = `
      .line-mic, .line-listen, .line-slow {
        color: #fff; border: 0;
        border-radius: 50%; width: 32px; height: 32px;
        font-size: 13px; cursor: pointer;
        display: inline-flex; align-items: center; justify-content: center;
        flex-shrink: 0; transition: transform .1s;
      }
      .line-mic { background: #FFB74D; }
      .line-listen { background: #66BB6A; }
      .line-slow { background: #42A5F5; }
      .line-mic:active, .line-listen:active, .line-slow:active { transform: scale(.9); }
      .line-listen.playing, .line-slow.playing { animation: shmPulse 1.2s ease-in-out infinite; }
      .line-mic.recording { background: #E53935; animation: shmPulse 1.2s ease-in-out infinite; }
      .line-mic.uploading { background: #FFA726; cursor: wait; }
      .line-actions {
        display: flex; gap: 4px; align-items: flex-start;
      }
      @keyframes shmPulse {
        0%,100% { box-shadow: 0 0 0 0 rgba(229,57,53,0.6); }
        50%     { box-shadow: 0 0 0 8px rgba(229,57,53,0); }
      }
      .line-result {
        margin: 6px 0 10px; padding: 10px 12px;
        background: #FFF8E1; border-left: 3px solid #FFB74D;
        border-radius: 6px; font-size: 13px;
      }
      .line-result.hidden { display: none; }
      .word-diff {
        font-size: 16px; line-height: 1.7; font-weight: 700;
        text-align: center; margin: 6px 0; word-wrap: break-word;
      }
      .word-diff .w {
        display: inline-block; padding: 1px 6px; margin: 2px 2px;
        border-radius: 6px;
      }
      .word-diff .w.match { background: #C8E6C9; color: #1B5E20; }
      .word-diff .w.close { background: #FFF59D; color: #6F4500; }
      .word-diff .w.wrong { background: #FFCDD2; color: #B71C1C; text-decoration: line-through; }
      .word-diff .w.miss  { background: #FFCDD2; color: #B71C1C; opacity: .8; }
      .word-diff .w.miss::after { content: '?'; font-size: 11px; vertical-align: super; }
      .word-diff .w .heard {
        display: block; font-size: 10px; font-weight: 400;
        color: #888; margin-top: -2px;
      }
      .line-result .score-row {
        display: flex; align-items: center; justify-content: center;
        gap: 8px; font-size: 13px;
      }
      .line-result .score-num { font-size: 20px; font-weight: 800; color: #E65100; }
      .line-result .whisper-heard {
        font-size: 11px; color: #888; text-align: center; margin-top: 4px;
      }
      .line-result .replay-row {
        display: flex; gap: 8px; justify-content: center; margin-top: 6px;
        flex-wrap: wrap;
      }
      .line-result .replay-row button {
        background: #fff; border: 1px solid #FFB74D; color: #E65100;
        padding: 4px 10px; border-radius: 14px; font-size: 12px;
        cursor: pointer;
      }
      .line-result .replay-row button:active { background: #FFE0B2; }
      .line-legend {
        display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;
        font-size: 10px; color: #888; margin-top: 4px;
      }
      .line-legend span { padding: 0 5px; border-radius: 3px; }
    `;
    document.head.appendChild(style);
  }

  function renderDiff(target, heard) {
    if (!window.DE?.Pronunciation?.wordDiff) {
      return `<div style="text-align:center;">原句：${escapeHtml(target)}</div>`;
    }
    const diff = DE.Pronunciation.wordDiff(target, heard);
    if (!diff.length) return '';
    const tokens = String(target).split(/(\s+)/);
    let di = 0;
    const html = tokens.map(tok => {
      if (/^\s*$/.test(tok)) return tok;
      const rec = diff[di++] || { status: 'miss' };
      const heardHtml = (rec.heardAs && rec.status !== 'match')
        ? `<span class="heard">${escapeHtml(rec.heardAs)}</span>`
        : '';
      return `<span class="w ${rec.status}">${escapeHtml(tok)}${heardHtml}</span>`;
    }).join('');
    return `<div class="word-diff">${html}</div>
      <div class="line-legend">
        <span style="background:#C8E6C9;color:#1B5E20;">读对</span>
        <span style="background:#FFF59D;color:#6F4500;">近似</span>
        <span style="background:#FFCDD2;color:#B71C1C;">读错</span>
        <span style="background:#FFCDD2;color:#B71C1C;opacity:.8;">跳词</span>
      </div>`;
  }

  // 同时只允许一个录音中
  let activeBtn = null;
  let activeTimer = null;

  async function stopRec(btn) {
    if (activeBtn !== btn) return;
    if (activeTimer) { clearTimeout(activeTimer); activeTimer = null; }
    btn.classList.remove('recording');
    btn.classList.add('uploading');
    btn.textContent = '⏳';

    const target = btn.dataset.en || '';
    let heard = '';
    let netFail = false;
    try {
      const blob = await DE.Recorder.stop();
      if (blob) heard = await DE.Recorder.transcribe(blob);
    } catch (e) {
      console.warn('shadow rec err', e);
      netFail = true;
    }

    btn.classList.remove('uploading');
    btn.textContent = '🎤';
    activeBtn = null;

    if (netFail) {
      showInlineMsg(btn, '⚠️ 网络问题，再试一次');
      return;
    }
    showResultInline(btn, target, heard);
  }

  async function onMicClick(btn) {
    if (!btn) return;
    const target = btn.dataset.en || '';
    if (!target) return;

    // 再点一下停止
    if (activeBtn === btn) {
      return stopRec(btn);
    }
    // 别的按钮在录 → 先停
    if (activeBtn) {
      try { await stopRec(activeBtn); } catch {}
    }

    if (!window.DE?.Recorder?.isSupported || !DE.Recorder.isSupported()) {
      showInlineMsg(btn, '⚠️ 此设备无法录音（需要 iOS 14.3+ / 新版 Chrome）');
      return;
    }

    try { await DE.TTS.unlock(); } catch {}
    try {
      await DE.Recorder.start();
    } catch (e) {
      showInlineMsg(btn, '⚠️ ' + e.message);
      return;
    }

    activeBtn = btn;
    btn.classList.add('recording');
    btn.textContent = '⏹️';
    if (activeTimer) clearTimeout(activeTimer);
    activeTimer = setTimeout(() => stopRec(btn), RECORD_MAX_MS);
  }

  function showInlineMsg(btn, msg) {
    const result = ensureResultEl(btn);
    result.innerHTML = `<div style="color:#B71C1C;text-align:center;">${escapeHtml(msg)}</div>`;
    result.classList.remove('hidden');
  }

  function showResultInline(btn, targetEn, heard) {
    const result = ensureResultEl(btn);
    if (!heard || !heard.trim()) {
      result.innerHTML = `<div style="text-align:center;color:#B71C1C;">😅 没听到你说话，再来一次</div>`;
      result.classList.remove('hidden');
      return;
    }
    const r = DE.Pronunciation.passed(targetEn, heard, PASS_SCORE, MIN_LEN_RATIO);
    const emoji = r.ok ? '🎉' : (r.score >= 50 ? '💪' : '😅');
    const tip = r.ok ? '太棒了！' : (r.lenRatio < 0.6 ? '说短了' : '再清楚一点');
    const replay = DE.Recorder.hasPlayback()
      ? '<button onclick="DE.Recorder.playback()">▶️ 听刚才</button>'
      : '';
    result.innerHTML = `
      <div class="score-row">${emoji} <span class="score-num">${r.score}</span> 分 · ${tip}</div>
      ${renderDiff(targetEn, heard)}
      <div class="whisper-heard">Whisper 听到：${escapeHtml(heard)}</div>
      <div class="replay-row">${replay}</div>
    `;
    result.classList.remove('hidden');
  }

  function ensureResultEl(btn) {
    // 优先：紧跟着 .line 之后的 .line-result
    const line = btn.closest('.line');
    if (line) {
      let next = line.nextElementSibling;
      if (next && next.classList.contains('line-result')) return next;
      next = document.createElement('div');
      next.className = 'line-result hidden';
      line.parentElement.insertBefore(next, line.nextElementSibling);
      return next;
    }
    // 兜底：插到按钮的同级
    let r = btn.parentElement.querySelector(':scope > .line-result');
    if (!r) {
      r = document.createElement('div');
      r.className = 'line-result hidden';
      btn.parentElement.appendChild(r);
    }
    return r;
  }

  // ============ 听原句 / 慢速听 ============
  // 用户场景：小孩想反复听、慢慢听才能学会。复用 DE.TTS._fetchBuffer 拿 AudioBuffer
  // 然后自己用 AudioBufferSourceNode 控制 playbackRate（slow=true 时 0.65x）
  let lastListenBtn = null;
  let lastListenSrc = null;

  function resolveVoice(speaker, lineEl) {
    if (lineEl?.dataset.voice) return lineEl.dataset.voice;
    if (typeof window.voiceFor === 'function') {
      try { const v = window.voiceFor(speaker); if (v) return v; } catch {}
    }
    if (window.VOICE_IDS?.[speaker]) return window.VOICE_IDS[speaker];
    if (window.DAILY_LIFE?.defaultSpeakers?.[speaker]) return window.DAILY_LIFE.defaultSpeakers[speaker];
    const fb = { mom: 'shimmer', dad: 'onyx', sister: 'coral', brother: 'echo', teacher: 'sage', kid: 'echo', grandma: 'nova', grandpa: 'onyx', classmate: 'echo', doctor: 'echo' };
    return fb[speaker] || 'shimmer';
  }

  async function listenOnBtn(btn, slow) {
    if (!btn) return;
    const target = btn.dataset.en || '';
    if (!target || !window.DE?.TTS?._fetchBuffer) {
      console.warn('listen: missing target or DE.TTS._fetchBuffer');
      return;
    }
    const line = btn.closest('.line');
    const speaker = line?.dataset.speaker || btn.dataset.speaker || '';
    const type = line?.dataset.type || btn.dataset.type || 'neutral';
    const voiceId = resolveVoice(speaker, line);

    try { await DE.TTS.unlock(); } catch {}

    // 停掉上一次的回放
    if (lastListenSrc) { try { lastListenSrc.stop(); } catch {} lastListenSrc = null; }
    if (lastListenBtn) { lastListenBtn.classList.remove('playing'); lastListenBtn = null; }
    try { DE.TTS.stop?.(); } catch {}

    let buf;
    try {
      buf = await DE.TTS._fetchBuffer(target, voiceId, type);
    } catch (e) {
      console.warn('listen fetch fail', e.message);
      return;
    }

    const ctx = DE.TTS.ctx || (DE.TTS._ensureCtx && DE.TTS._ensureCtx());
    if (!ctx) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    // playbackRate 改变会同时改音调（速度慢→声音也变低）
    // 0.65 对小孩学发音足够清楚，又能听清每个词
    src.playbackRate.value = slow ? 0.65 : 1.0;
    src.connect(ctx.destination);
    btn.classList.add('playing');
    src.onended = () => {
      btn.classList.remove('playing');
      if (lastListenBtn === btn) { lastListenBtn = null; lastListenSrc = null; }
    };
    lastListenBtn = btn;
    lastListenSrc = src;
    try { src.start(0); } catch (e) { btn.classList.remove('playing'); }
  }

  window.ShadowMic = {
    onClick: onMicClick,
    listen: listenOnBtn,
    stop: () => activeBtn && stopRec(activeBtn),
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureCss);
  } else {
    ensureCss();
  }
})();

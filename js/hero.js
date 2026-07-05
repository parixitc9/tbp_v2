/* ============================================================
   THE BROWN PRINT v2 — hero.js
   Liquid cursor reveal canvas (before/after brush trail)
   Optimized: throttled input, batched draws, no willReadFrequently
   ============================================================ */

const TBPHero = (() => {
  'use strict';

  let canvas = null;
  let ctx = null;
  let beforeImg = null;
  let afterImg = null;
  let isReady = false;
  let isDrawing = false;
  let points = [];
  let animFrame = null;
  let container = null;
  let lastMoveTime = 0;

  const BRUSH_RADIUS = 100;
  const DECAY = 0.02;
  const DPR = Math.min(window.devicePixelRatio, 2);
  const THROTTLE_MS = 16; // ~60fps cap on input

  function init(config) {
    container = config.container;
    canvas = config.canvas;
    beforeImg = config.beforeImg;
    afterImg = config.afterImg;

    if (!canvas || !container) return;
    if (TBP.prefersReducedMotion) return;

    ctx = canvas.getContext('2d');

    resize();
    window.addEventListener('resize', resize);

    afterImg.onload = () => {
      drawFull();
      isReady = true;
    };

    if (afterImg.complete) {
      drawFull();
      isReady = true;
    }

    container.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onMouseLeave);
  }

  function resize() {
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * DPR;
    canvas.height = rect.height * DPR;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    if (isReady) drawFull();
  }

  function drawFull() {
    if (!ctx || !afterImg || !afterImg.naturalWidth) return;
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(afterImg, 0, 0, canvas.width, canvas.height);
  }

  function onMouseMove(e) {
    if (!isReady) return;
    const now = performance.now();
    if (now - lastMoveTime < THROTTLE_MS) return;
    lastMoveTime = now;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) * DPR;
    const y = (e.clientY - rect.top) * DPR;
    addPoint(x, y);
  }

  function onTouchMove(e) {
    if (!isReady || !e.touches.length) return;
    const now = performance.now();
    if (now - lastMoveTime < THROTTLE_MS) return;
    lastMoveTime = now;

    const rect = container.getBoundingClientRect();
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) * DPR;
    const y = (touch.clientY - rect.top) * DPR;
    addPoint(x, y);
  }

  function addPoint(x, y) {
    points.push({ x, y, radius: BRUSH_RADIUS * DPR, alpha: 1 });
    if (!isDrawing) {
      isDrawing = true;
      animFrame = requestAnimationFrame(draw);
    }
  }

  function draw() {
    if (!ctx || !beforeImg || !beforeImg.naturalWidth) {
      isDrawing = false;
      return;
    }

    const len = points.length;
    if (len === 0) {
      isDrawing = false;
      return;
    }

    // Draw all active points in one batch per frame
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';

    for (let i = len - 1; i >= 0; i--) {
      const pt = points[i];

      ctx.globalAlpha = pt.alpha;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(beforeImg, 0, 0, canvas.width, canvas.height);
      ctx.resetClip();

      pt.alpha -= DECAY;

      if (pt.alpha <= 0) {
        points.splice(i, 1);
      }
    }

    ctx.restore();

    if (points.length > 0) {
      animFrame = requestAnimationFrame(draw);
    } else {
      isDrawing = false;
    }
  }

  function onMouseLeave() {
    // Points decay naturally in the draw loop
  }

  function destroy() {
    if (animFrame) cancelAnimationFrame(animFrame);
    window.removeEventListener('resize', resize);
    if (container) {
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchmove', onTouchMove);
    }
  }

  return { init, destroy };
})();

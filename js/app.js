/* ============================================================
   THE BROWN PRINT v2 — app.js
   Lenis smooth scroll, adaptive grid, scroll lock, spring helper
   ============================================================ */

const TBP = (() => {
  'use strict';

  let lenis = null;
  let scrollLocked = false;

  /* --- Reduced motion check --- */
  const prefersReducedMotion = (() => {
    try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
    catch (e) { return false; }
  })();

  /* --- Lenis smooth scroll (disabled by default — causes scroll lag) --- */
  function initLenis() {
    // Lenis intercepts native scroll and replays it with animation,
    // which creates perceived input delay. Native smooth scroll is used instead.
    // To re-enable, uncomment below and add Lenis CSS for smooth behavior.
    /*
    if (prefersReducedMotion || typeof Lenis === 'undefined') return;
    try {
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        syncTouch: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis init failed:', e);
    }
    */
  }

  /* --- Scroll lock (for modals, loader) --- */
  function lockScroll() {
    if (scrollLocked) return;
    scrollLocked = true;
    if (lenis) lenis.stop();
    document.body.classList.add('no-scroll');
  }

  function unlockScroll() {
    if (!scrollLocked) return;
    scrollLocked = false;
    if (lenis) lenis.start();
    document.body.classList.remove('no-scroll');
  }

  /* --- Adaptive rem grid (Lumora-style) --- */
  function initAdaptiveGrid() {
    const BASE = 1920;
    const COEF = 0.6666;
    function update() {
      const w = window.innerWidth;
      if (w > BASE) {
        const rem = (w / BASE) * COEF;
        document.documentElement.classList.add('scaled-up');
        document.documentElement.style.setProperty('--scale', rem);
      } else {
        document.documentElement.classList.remove('scaled-up');
      }
    }
    update();
    window.addEventListener('resize', update);
  }

  /* --- Spring stepper --- */
  function spring({ from = 0, to = 0, mass = 1, tension = 200, friction = 24, onUpdate, onComplete }) {
    if (prefersReducedMotion) {
      onUpdate?.(to);
      onComplete?.();
      return;
    }

    let x = from;
    let v = 0;
    let settled = false;

    function step() {
      const springForce = -tension * (x - to);
      const dampingForce = -friction * v;
      const acc = (springForce + dampingForce) / mass;

      v += acc * (1 / 60);
      x += v * (1 / 60);

      if (Math.abs(x - to) < 0.001 && Math.abs(v) < 0.001) {
        x = to;
        v = 0;
        settled = true;
      }

      onUpdate?.(x);

      if (settled) {
        onComplete?.();
      } else {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  /* --- DOM ready --- */
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  return {
    initLenis,
    lockScroll,
    unlockScroll,
    initAdaptiveGrid,
    spring,
    ready,
    get prefersReducedMotion() { return prefersReducedMotion; },
    get lenis() { return lenis; },
  };
})();

/* ============================================================
   THE BROWN PRINT v2 — loader.js
   Combined: counter 000→100 (first visit) + filmstrip wipe (page nav)
   ============================================================ */

const TBPLoader = (() => {
  'use strict';

  const FILL_MS = 1300;
  const COUNTER_EASE = (t) => t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

  let loaderEl = null;
  let counterEl = null;
  let ready = false;
  let readyCallbacks = [];

  /* --- Build loader DOM --- */
  function build() {
    loaderEl = document.createElement('div');
    loaderEl.className = 'page-loader';
    loaderEl.innerHTML = `<span class="page-loader__counter">000</span>`;
    document.body.prepend(loaderEl);
    counterEl = loaderEl.querySelector('.page-loader__counter');
  }

  /* --- Build filmstrip wipe DOM --- */
  function buildFilmstrip() {
    let wipe = document.querySelector('.filmstrip-wipe');
    if (!wipe) {
      wipe = document.createElement('div');
      wipe.className = 'filmstrip-wipe';
      for (let i = 0; i < 5; i++) {
        const panel = document.createElement('div');
        panel.className = 'filmstrip-wipe__panel';
        wipe.appendChild(panel);
      }
      document.body.prepend(wipe);
    }
    return wipe;
  }

  /* --- Counter animation --- */
  function animateCounter(onDone) {
    if (!counterEl) { onDone?.(); return; }

    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / FILL_MS, 1);
      const eased = COUNTER_EASE(progress);
      const value = Math.floor(eased * 100);
      counterEl.textContent = String(value).padStart(3, '0');

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        counterEl.textContent = '100';
        setTimeout(() => {
          loaderEl.classList.add('done');
          setTimeout(() => {
            loaderEl.remove();
            loaderEl = null;
            onDone?.();
          }, 600);
        }, 200);
      }
    }

    requestAnimationFrame(frame);
  }

  /* --- Filmstrip wipe for page navigation ---
     Panels cover the screen and STAY covered while the browser
     navigates; the next page peels them away on load (see init). */
  function filmstripNavigate(url) {
    if (TBP.prefersReducedMotion) {
      window.location.href = url;
      return;
    }
    const wipe = buildFilmstrip();
    wipe.classList.remove('cover', 'uncover');
    void wipe.offsetWidth; // reflow
    wipe.classList.add('cover');
    try { sessionStorage.setItem('tbp-wipe', '1'); } catch (e) {}

    // Last panel finishes covering at ~0.7s (0.2s stagger + 0.5s anim)
    setTimeout(() => {
      window.location.href = url;
    }, 720);
  }

  /* --- Init (counter animation removed — pages become ready immediately).
     If we arrived via a filmstrip wipe, reveal the page from behind it. --- */
  function init() {
    let cameViaWipe = false;
    try {
      cameViaWipe = sessionStorage.getItem('tbp-wipe') === '1';
      sessionStorage.removeItem('tbp-wipe');
    } catch (e) {}

    if (cameViaWipe && !TBP.prefersReducedMotion) {
      const wipe = buildFilmstrip();
      wipe.classList.add('uncover');
      setTimeout(() => wipe.remove(), 1000);
    }
    markReady();
  }

  /* --- Ready system --- */
  function markReady() {
    ready = true;
    readyCallbacks.forEach(fn => fn());
    readyCallbacks = [];
  }

  function onReady(fn) {
    if (ready) fn();
    else readyCallbacks.push(fn);
  }

  /* --- Intercept link clicks for filmstrip --- */
  function interceptLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript:') || link.target === '_blank') return;

      // Only intercept same-origin links
      try {
        const url = new URL(href, window.location.origin);
        if (url.origin !== window.location.origin) return;
      } catch (e) { return; }

      e.preventDefault();
      filmstripNavigate(href);
    });
  }

  return { init, onReady, filmstripNavigate, interceptLinks, get isReady() { return ready; } };
})();

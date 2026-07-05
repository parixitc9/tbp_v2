/* ============================================================
   THE BROWN PRINT v2 — reveals.js
   Scroll reveals, text reveals, stats counter
   ============================================================ */

const TBPReveals = (() => {
  'use strict';

  /* --- Scroll reveal (IntersectionObserver) --- */
  function initReveals() {
    const targets = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!targets.length) return;

    if (TBP.prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('in');
      } else {
        io.observe(el);
      }
    });
  }

  /* --- Hero entrance (gated on loader ready) --- */
  function initHeroEntrance() {
    const elements = document.querySelectorAll('.hero-entrance');
    if (!elements.length) return;

    if (TBP.prefersReducedMotion) {
      elements.forEach(el => el.classList.add('in'));
      return;
    }

    TBPLoader.onReady(() => {
      elements.forEach(el => {
        el.classList.add('in');
      });
    });
  }

  /* --- Stats counter (scroll-driven) --- */
  function initStatsCounter() {
    const stats = document.querySelectorAll('.stat__number[data-target]');
    if (!stats.length) return;

    if (TBP.prefersReducedMotion) {
      stats.forEach(el => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        el.textContent = target + suffix;
      });
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px', threshold: 0.5 });

    stats.forEach(el => io.observe(el));
  }

  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1500;
    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(frame);
  }

  /* --- Image fade-in --- */
  function initImageFade() {
    const imgs = document.querySelectorAll('.work-card img, .story-img img');
    imgs.forEach(img => {
      if (TBP.prefersReducedMotion) {
        img.classList.add('loaded');
        return;
      }
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
      }
    });
  }

  /* --- Init all --- */
  function init() {
    initReveals();
    initHeroEntrance();
    initStatsCounter();
    initImageFade();
  }

  return { init };
})();

/* ============================================================
   THE BROWN PRINT v2 — cards.js
   CSS3D flip cards, hover springs, video hover previews
   ============================================================ */

const TBPCards = (() => {
  'use strict';

  /* --- Flip card touch support --- */
  function initFlipCards() {
    const cards = document.querySelectorAll('.flip-card');
    if (!cards.length) return;

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  }

  /* --- Hover springs (pointer-driven scale) --- */
  function initHoverSprings() {
    if (TBP.prefersReducedMotion) return;

    const targets = document.querySelectorAll('.portfolio-card, .work-card, .btn');
    targets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        TBP.spring({
          from: 1,
          to: 1.03,
          tension: 320,
          friction: 18,
          onUpdate: (v) => { el.style.transform = `scale(${v})`; },
          onComplete: () => { el.style.transform = ''; },
        });
      });

      el.addEventListener('mouseleave', () => {
        TBP.spring({
          from: 1.03,
          to: 1,
          tension: 320,
          friction: 18,
          onUpdate: (v) => { el.style.transform = `scale(${v})`; },
          onComplete: () => { el.style.transform = ''; },
        });
      });
    });
  }

  /* --- Video hover previews --- */
  function initVideoHover() {
    if (TBP.prefersReducedMotion) return;

    document.addEventListener('mouseover', (e) => {
      const card = e.target.closest('.work-card[data-video-src]');
      if (!card || card.dataset.hovered === 'true') return;
      card.dataset.hovered = 'true';

      let video = card.querySelector('.work-card-video');
      if (!video) {
        video = document.createElement('video');
        video.className = 'work-card-video';
        video.src = card.dataset.videoSrc;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute('preload', 'auto');
        card.insertBefore(video, card.querySelector('.work-card__shade') || card.firstChild);
        video.offsetHeight; // force layout
      }

      video.style.opacity = '1';
      video.play().catch(() => {});
    });

    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest('.work-card[data-video-src]');
      if (!card) return;

      const related = e.relatedTarget;
      if (related && card.contains(related)) return;

      card.dataset.hovered = 'false';
      const video = card.querySelector('.work-card-video');
      if (video) {
        video.style.opacity = '0';
        video.pause();
      }
    });
  }

  /* --- Init all --- */
  function init() {
    initFlipCards();
    initHoverSprings();
    initVideoHover();
  }

  return { init };
})();

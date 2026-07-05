/* ============================================================
   THE BROWN PRINT v2 — modal.js
   Request modal (contact form with success state)
   ============================================================ */

const TBPModal = (() => {
  'use strict';

  let backdrop = null;
  let panel = null;

  function init() {
    backdrop = document.querySelector('.modal-backdrop');
    panel = document.querySelector('.modal-panel');
    if (!backdrop) return;

    // Open triggers
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', open);
    });

    // Close triggers
    backdrop.querySelector('.modal-panel__close')?.addEventListener('click', close);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('open')) close();
    });

    // Form submit
    const form = backdrop.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
  }

  function open() {
    if (!backdrop) return;
    backdrop.classList.add('open');
    TBP.lockScroll();
  }

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove('open');
    TBP.unlockScroll();
    // Reset form state after animation
    setTimeout(() => {
      const success = backdrop.querySelector('.modal-success');
      const form = backdrop.querySelector('form');
      if (success) success.style.display = 'none';
      if (form) {
        form.style.display = '';
        form.reset();
      }
    }, 400);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const success = backdrop.querySelector('.modal-success');

    // Show "Sending..."
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.style.display = '';
      btn.textContent = origText;
      btn.disabled = false;
    }, 1200);
  }

  return { init, open, close };
})();

/* ============================================================
   THE BROWN PRINT v2 — nav.js
   Header nav, mobile menu, live clock, scroll state
   ============================================================ */

const TBPNav = (() => {
  'use strict';

  let header = null;
  let menuBtn = null;
  let overlay = null;
  let clockEl = null;
  let clockInterval = null;

  function init() {
    header = document.querySelector('.header');
    menuBtn = document.querySelector('.header__menu-btn');
    overlay = document.querySelector('.nav-overlay');
    clockEl = document.querySelector('.header__clock');

    if (!header) return;

    setupScroll();
    setupMenu();
    setupClock();
    setupNavLinks();
  }

  /* --- Scroll state (glassmorphism on scroll) --- */
  function setupScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* --- Mobile menu toggle --- */
  function setupMenu() {
    if (!menuBtn || !overlay) return;

    menuBtn.addEventListener('click', () => {
      const isOpen = overlay.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close on link click
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });
  }

  function openMenu() {
    menuBtn.classList.add('open');
    overlay.classList.add('open');
    TBP.lockScroll();
  }

  function closeMenu() {
    menuBtn.classList.remove('open');
    overlay.classList.remove('open');
    TBP.unlockScroll();
  }

  /* --- Live clock (Toronto time) --- */
  function setupClock() {
    if (!clockEl) return;

    function update() {
      try {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Toronto',
        });
        clockEl.textContent = time + ' EST';
      } catch (e) {
        clockEl.textContent = '';
      }
    }

    update();
    clockInterval = setInterval(update, 1000);
  }

  /* --- Active nav link based on page --- */
  function setupNavLinks() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('.header__link');
    const overlayLinks = document.querySelectorAll('.nav-overlay__link');

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && path.endsWith(href.replace('./', '').replace(/^\//, ''))) {
        link.classList.add('active');
      }
    });

    overlayLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && path.endsWith(href.replace('./', '').replace(/^\//, ''))) {
        link.classList.add('active');
      }
    });
  }

  /* --- Destroy --- */
  function destroy() {
    if (clockInterval) clearInterval(clockInterval);
  }

  return { init, destroy };
})();

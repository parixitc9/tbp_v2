/* ============================================================
   THE BROWN PRINT v2 — pages/home.js
   Home page carousel, partners
   ============================================================ */

const TBPHome = (() => {
  'use strict';

  let carouselItems = [];
  let carouselDots = [];
  let currentIndex = 0;
  let carouselInterval = null;

  const CAROUSEL_DATA = [
    { label: 'Concert Films', title: 'Arena Live — Rogers Centre', sub: 'Multi-cam live concert film · 2024' },
    { label: 'Wedding Cinema', title: 'The Anand Karaj Film', sub: 'Cinematic feature · Toronto · 2025' },
    { label: 'Music Videos', title: 'Echoes — Full Album Visuals', sub: 'Album visuals · Maninder Gill · 2024' },
    { label: 'Brand Films', title: 'Night Service — Adrak Kitchen', sub: 'Restaurant film · Toronto · 2025' },
  ];

  function init() {
    initCarousel();
    initPartners();
  }

  /* --- Carousel --- */
  function initCarousel() {
    const carousel = document.querySelector('.hero__carousel');
    if (!carousel) return;

    carouselItems = CAROUSEL_DATA;
    const dotsContainer = carousel.querySelector('.hero__carousel-dots');
    const titleEl = carousel.querySelector('.hero__carousel-title');
    const subEl = carousel.querySelector('.hero__carousel-sub');
    const labelEl = carousel.querySelector('.hero__carousel-label');

    if (!titleEl || !subEl || !labelEl) return;

    // Build dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      carouselItems.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'hero__carousel-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      });
      carouselDots = dotsContainer.querySelectorAll('.hero__carousel-dot');
    }

    // Set initial
    goTo(0);

    // Auto-advance
    carouselInterval = setInterval(() => {
      goTo((currentIndex + 1) % carouselItems.length);
    }, 4000);
  }

  function goTo(index) {
    const titleEl = document.querySelector('.hero__carousel-title');
    const subEl = document.querySelector('.hero__carousel-sub');
    const labelEl = document.querySelector('.hero__carousel-label');

    if (!titleEl || !subEl || !labelEl) return;

    currentIndex = index;
    const item = CAROUSEL_DATA[index];

    // Animate out
    titleEl.style.opacity = '0';
    subEl.style.opacity = '0';
    labelEl.style.opacity = '0';

    setTimeout(() => {
      labelEl.textContent = item.label;
      titleEl.textContent = item.title;
      subEl.textContent = item.sub;
      titleEl.style.opacity = '1';
      subEl.style.opacity = '1';
      labelEl.style.opacity = '1';
    }, 200);

    // Update dots
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  /* --- Partners --- */
  function initPartners() {
    // Partner logos are static in HTML, no JS needed unless we add hover effects
  }

  return { init };
})();

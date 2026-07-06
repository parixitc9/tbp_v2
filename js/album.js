/* ============================================================
   THE BROWN PRINT v2 — album.js
   Shared photo-album lightbox (wedding-style). Builds its DOM on
   first use; styles live in components.css (.album-*).

   PhotoAlbum.open(items, startIdx)
     items: [{ src, title, sub }]
   ============================================================ */

const PhotoAlbum = (() => {
  'use strict';

  let backdrop, imgEl, titleEl, subEl, counterEl;
  let items = [];
  let idx = 0;

  function build() {
    backdrop = document.createElement('div');
    backdrop.className = 'album-backdrop';
    backdrop.innerHTML = `
      <div class="album-panel">
        <button class="album-panel__close" aria-label="Close album">✕</button>
        <button class="album-nav album-nav--prev" aria-label="Previous photo">‹</button>
        <button class="album-nav album-nav--next" aria-label="Next photo">›</button>
        <img class="album-panel__img" src="" alt="">
        <div class="album-panel__caption">
          <div class="album-panel__title"></div>
          <div class="album-panel__sub"></div>
        </div>
        <div class="album-counter"></div>
      </div>`;
    document.body.appendChild(backdrop);

    imgEl = backdrop.querySelector('.album-panel__img');
    titleEl = backdrop.querySelector('.album-panel__title');
    subEl = backdrop.querySelector('.album-panel__sub');
    counterEl = backdrop.querySelector('.album-counter');

    backdrop.querySelector('.album-panel__close').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    backdrop.querySelector('.album-nav--prev').addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
    backdrop.querySelector('.album-nav--next').addEventListener('click', (e) => { e.stopPropagation(); step(1); });
    document.addEventListener('keydown', (e) => {
      if (!backdrop.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  function show() {
    const it = items[idx];
    if (!it) return;
    imgEl.src = it.src;
    imgEl.alt = it.title || '';
    titleEl.textContent = it.title || '';
    subEl.textContent = it.sub || '';
    counterEl.textContent = `${idx + 1} / ${items.length}`;
  }

  function step(dir) {
    if (!items.length) return;
    idx = (idx + dir + items.length) % items.length;
    show();
  }

  function open(list, startIdx) {
    if (!Array.isArray(list) || !list.length) return;
    if (!backdrop) build();
    items = list;
    idx = (typeof startIdx === 'number' && startIdx >= 0) ? startIdx : 0;
    show();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  return { open, close };
})();

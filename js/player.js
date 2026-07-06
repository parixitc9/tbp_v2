/* ============================================================
   THE BROWN PRINT v2 — player.js
   Custom protected video player (from v1, adapted for ES modules)
   ============================================================ */

const VideoPlayer = (() => {
  let overlay, video, fill, track, timeEl, bigPlay, playIcon, pauseIcon,
      titleEl, subEl, controls, fsBtn;
  let hideTimer;
  let playlist = null, playIdx = 0;

  const ICONS = {
    play: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
    bigPlay: '<svg width="30" height="30" viewBox="0 0 24 24" fill="#0c0a09"><path d="M8 5v14l11-7z"/></svg>',
    fs: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>',
    close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    vol: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9.5 9.5 0 0 1 0 13"/></svg>',
    muted: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>',
  };

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'vp-overlay';
    overlay.innerHTML = `
      <button class="vp-nav vp-nav--prev" aria-label="Previous video">‹</button>
      <button class="vp-nav vp-nav--next" aria-label="Next video">›</button>
      <div class="vp-shell">
        <button class="vp-close" aria-label="Close">${ICONS.close}</button>
        <div class="vp-frame">
          <video class="vp-video" playsinline preload="metadata"
                 controlslist="nodownload noplaybackrate noremoteplayback"
                 disablepictureinpicture></video>
          <div class="vp-guard"></div>
          <div class="vp-bigplay">
            <div class="vp-bigplay-circle">${ICONS.bigPlay}</div>
          </div>
          <div class="vp-controls">
            <button class="vp-btn vp-playpause">${ICONS.play}</button>
            <div class="vp-track"><div class="vp-fill"></div></div>
            <span class="vp-time">0:00 / 0:00</span>
            <button class="vp-btn vp-mute" aria-label="Toggle sound">${ICONS.vol}</button>
            <button class="vp-btn vp-fs">${ICONS.fs}</button>
          </div>
        </div>
        <div class="vp-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    video    = overlay.querySelector('.vp-video');
    fill     = overlay.querySelector('.vp-fill');
    track    = overlay.querySelector('.vp-track');
    timeEl   = overlay.querySelector('.vp-time');
    bigPlay  = overlay.querySelector('.vp-bigplay');
    controls = overlay.querySelector('.vp-controls');
    titleEl  = overlay.querySelector('.vp-caption h3');
    subEl    = overlay.querySelector('.vp-caption p');
    fsBtn    = overlay.querySelector('.vp-fs');
    const playPauseBtn = overlay.querySelector('.vp-playpause');

    // Protection: kill right-click
    overlay.addEventListener('contextmenu', e => e.preventDefault());
    video.addEventListener('contextmenu', e => e.preventDefault());
    overlay.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') e.preventDefault();
    });

    // Controls
    const toggle = () => video.paused ? video.play() : video.pause();
    bigPlay.addEventListener('click', toggle);
    playPauseBtn.addEventListener('click', toggle);
    video.addEventListener('click', toggle);

    video.addEventListener('play', () => {
      bigPlay.classList.add('hide');
      playPauseBtn.innerHTML = ICONS.pause;
    });
    video.addEventListener('pause', () => {
      bigPlay.classList.remove('hide');
      playPauseBtn.innerHTML = ICONS.play;
    });

    video.addEventListener('timeupdate', () => {
      const pct = (video.currentTime / video.duration) * 100 || 0;
      fill.style.width = pct + '%';
      timeEl.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
    });
    video.addEventListener('loadedmetadata', () => {
      timeEl.textContent = `0:00 / ${fmt(video.duration)}`;
    });
    video.addEventListener('ended', () => {
      bigPlay.classList.remove('hide');
      playPauseBtn.innerHTML = ICONS.play;
    });

    // Seek
    track.addEventListener('click', e => {
      const rect = track.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      video.currentTime = ratio * video.duration;
    });

    // Fullscreen
    fsBtn.addEventListener('click', () => {
      const frame = overlay.querySelector('.vp-frame');
      if (!document.fullscreenElement) frame.requestFullscreen?.();
      else document.exitFullscreen?.();
    });

    // Sound on/off
    const muteBtn = overlay.querySelector('.vp-mute');
    muteBtn.addEventListener('click', e => {
      e.stopPropagation();
      video.muted = !video.muted;
    });
    video.addEventListener('volumechange', () => {
      muteBtn.innerHTML = (video.muted || video.volume === 0) ? ICONS.muted : ICONS.vol;
    });

    // Playlist navigation
    overlay.querySelector('.vp-nav--prev').addEventListener('click', e => { e.stopPropagation(); step(-1); });
    overlay.querySelector('.vp-nav--next').addEventListener('click', e => { e.stopPropagation(); step(1); });

    // Close
    overlay.querySelector('.vp-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('open') || document.fullscreenElement) return;
      if (e.key === 'Escape') close();
      if (playlist) {
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      }
    });
  }

  function step(dir) {
    if (!playlist || playlist.length < 2) return;
    playIdx = (playIdx + dir + playlist.length) % playlist.length;
    load(playlist[playIdx]);
  }

  function load(work) {
    video.src = work.videoSrc || '';
    if (work.poster) video.poster = work.poster;
    titleEl.textContent = work.title || '';
    subEl.textContent = work.artist || work.venue || work.event || work.client || work.sub || '';
    video.play().catch(() => {});
  }

  function fmt(s) {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  }

  /* open(work) — single video, no arrows.
     open(work, list, idx) — browsable playlist with prev/next arrows. */
  function open(work, list, idx) {
    if (!overlay) build();
    playlist = (Array.isArray(list) && list.length > 1) ? list : null;
    playIdx = (typeof idx === 'number' && idx >= 0) ? idx : 0;
    overlay.classList.toggle('vp-has-nav', !!playlist);
    load(work);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!overlay) return;
    video.pause();
    video.removeAttribute('src');
    video.load();
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (document.fullscreenElement) document.exitFullscreen?.();
  }

  return { open, close };
})();

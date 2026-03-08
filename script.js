/* ═══════════════════════════════════════
   Sampurna Sit — Portfolio Website
   script.js
═══════════════════════════════════════ */


/* ─── TYPEWRITER ─── */
const phrases = [
  "I solve problems with DSA 🧠",
  "AI/ML Enthusiast 🤖",
  "I love complex algorithms 🧩",
  "Seeking my first internship 💼",
  "Building intelligent software 🚀"
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const el = document.getElementById('typeText');
  if (!el) return;
  const word = phrases[phraseIndex];

  if (!isDeleting) {
    el.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 55 : 90);
}
setTimeout(type, 1200);


/* ─── SMOOTH SCROLL ─── */
function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ─── TOAST NOTIFICATION ─── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}


/* ─── CUSTOM CURSOR ─── */
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cur.style.transform  = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
  ring.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`;
});

document.querySelectorAll('a, button, .stab, .skocard, .pritem, .spill, .badge, .iav-upl, .ppupl')
  .forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hov'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
  });


/* ─── INTRO OVERLAY ─── */
function enterPortfolio() {
  document.getElementById('intro-overlay').classList.add('hide');
  setTimeout(() => {
    document.getElementById('landing').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 350);
}

document.getElementById('enterBtn').addEventListener('click', enterPortfolio);
document.getElementById('skipBtn').addEventListener('click', enterPortfolio);


/* ─── TAB SWITCHING (inside monitor screen) ─── */
function switchTab(panelId, tabEl) {
  // Hide all panels + deactivate all tabs
  document.querySelectorAll('.spanel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));

  // Activate selected
  const panel = document.getElementById(panelId);
  panel.classList.add('active');

  // Re-trigger animation
  panel.style.animation = 'none';
  requestAnimationFrame(() => { panel.style.animation = ''; });

  tabEl.classList.add('active');
}


/* ─── FLOATING PETALS ─── */
const pb       = document.getElementById('petalsBg');
const petals   = ['🌸', '🌷', '✿', '❀', '✾', '⋆', '·', '˚'];
const petals2  = ['🌸', '✿', '❀', '⋆', '·'];

for (let i = 0; i < 20; i++) {
  const p = document.createElement('span');
  p.className   = 'petal-float';
  p.textContent = petals[Math.floor(Math.random() * petals.length)];
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    font-size: ${Math.random() * 14 + 8}px;
    animation-duration: ${Math.random() * 14 + 12}s;
    animation-delay: ${Math.random() * 10}s;
  `;
  pb.appendChild(p);
}

for (let i = 0; i < 12; i++) {
  const p = document.createElement('span');
  p.className   = 'petal-float';
  p.textContent = petals2[Math.floor(Math.random() * petals2.length)];
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    font-size: ${Math.random() * 10 + 6}px;
    animation-duration: ${Math.random() * 14 + 12}s;
    animation-delay: ${Math.random() * 12}s;
  `;
  pb.appendChild(p);
}


/* ─── SCROLL REVEAL ─── */
document.querySelectorAll('.reveal').forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) el.classList.add('visible');
  }, { threshold: 0.1 }).observe(el);
});

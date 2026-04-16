/* ═══════════════════════════════════════════════════════════
   ANGKATAN XV — SMP INTEGRAL HIDAYATULLAH TIMIKA
   script.js (dioptimalkan performa, canvas particles)
   ═══════════════════════════════════════════════════════════ */

const students = [
  // ... data siswa tetap sama seperti sebelumnya ...
];

/* ── Countdown Timer ──────────────────────────────────────── */
const TARGET_DATE = new Date('2026-05-30T00:00:00');
const elDays = document.getElementById('cdDays');
const elHours = document.getElementById('cdHours');
const elMins = document.getElementById('cdMinutes');
const elSecs = document.getElementById('cdSeconds');

function pad(n) { return String(n).padStart(2, '0'); }

function animateTick(el, newVal) {
  if (el.textContent !== newVal) {
    el.classList.remove('tick');
    void el.offsetWidth;
    el.classList.add('tick');
    el.textContent = newVal;
  }
}

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) {
    elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = '00';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  animateTick(elDays, pad(days));
  animateTick(elHours, pad(hours));
  animateTick(elMins, pad(mins));
  animateTick(elSecs, pad(secs));
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Build Student Cards ──────────────────────────────────── */
function buildStudentCard(s) {
  const card = document.createElement('article');
  card.className = 'student-card';
  card.style.transitionDelay = `${(s.no % 3) * 0.07}s`;
  const hasData = s.kesan !== null && s.kesan !== "Tidak di ketahui";
  card.innerHTML = `
    <div class="student-number">${s.no}</div>
    <div class="student-photo-wrap">
      <img src="${s.photo}" alt="Foto ${s.name}" class="student-photo" loading="lazy"
        onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%231b4a2e%22/%3E%3Ccircle cx=%22100%22 cy=%2285%22 r=%2240%22 fill=%22%233edc7a%22/%3E%3Crect x=%2245%22 y=%22140%22 width=%22110%22 height=%2270%22 rx=%2255%22 fill=%22%233edc7a%22/%3E%3C/svg%3E'" />
      <div class="student-photo-overlay"></div>
    </div>
    <div class="student-bio">
      <h3 class="student-name">${s.name}</h3>
      <div class="student-meta">
        <span class="meta-key">TTL</span><span class="meta-val">${s.ttl}</span>
        <span class="meta-key">Alamat</span><span class="meta-val">${s.alamat}</span>
        <span class="meta-key">Hobi</span><span class="meta-val">${s.hobi}</span>
        <span class="meta-key">Cita-Cita</span><span class="meta-val">${s.cita}</span>
      </div>
      ${hasData ? `
        <div class="student-text-block"><p class="text-block-label">Kesan</p><p class="text-block-content">${s.kesan}</p></div>
        <div class="student-text-block"><p class="text-block-label">Pesan</p><p class="text-block-content">${s.pesan}</p></div>
        ${s.lanjut && s.lanjut !== "—" ? `<span class="student-next-school">${s.lanjut}</span>` : ''}
      ` : `<p class="student-no-data">Kenangan tersimpan dalam hati</p>`}
    </div>
  `;
  return card;
}

const grid = document.getElementById('studentsGrid');
students.forEach(s => grid.appendChild(buildStudentCard(s)));

/* ── Canvas Particles (ringan, tanpa DOM span) ───────────── */
function initCanvasParticles() {
  const canvas = document.createElement('canvas');
  const container = document.querySelector('.particles');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 40; // lebih banyak dari sebelumnya tapi tetap ringan

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height + height; // mulai dari bawah
      this.size = Math.random() * 4 + 2;
      this.speed = Math.random() * 0.8 + 0.4;
      this.opacity = Math.random() * 0.6 + 0.2;
    }
    update() {
      this.y -= this.speed;
      if (this.y < -20) {
        this.reset();
        this.y = height + 20;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(184, 240, 208, ${this.opacity})`;
      ctx.shadowColor = '#3edc7a';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0; // reset agar tidak menumpuk
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  resize();
  initParticles();
  animateParticles();
}

// Panggil setelah DOM siap
if (document.querySelector('.particles')) {
  initCanvasParticles();
} else {
  // fallback kalau elemen belum ada (nanti dipanggil di load)
  window.addEventListener('load', initCanvasParticles);
}

/* ── Intersection Observer ───────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), (parseInt(entry.target.dataset.index || 0) % 3) * 70);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.student-card').forEach((card, i) => { card.dataset.index = i; cardObserver.observe(card); });

window.addEventListener('load', () => {
  const header = document.querySelector('.site-header');
  header.classList.add('loaded');
});

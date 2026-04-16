/* ═══════════════════════════════════════════════════════════
   ANGKATAN XV — SMP INTEGRAL HIDAYATULLAH TIMIKA
   script.js (Foto default tersembunyi)
   ═══════════════════════════════════════════════════════════ */

/* ── Student Data ─────────────────────────────────────────── */
const students = [
  { no:1, name:"Achmad Daniswara Javas Muchie", photo:"images/danis.webp", ttl:"Keerom, 3 Agustus 2011", alamat:"BTN Kamoro Indah Blok B No 27", hobi:"Mencari Hal Baru Tiap Hari", cita:"Cyber Network Security", kesan:"Menurut saya, MTK, fisika, dan bahasa Inggris adalah pelajaran paling berguna bagi saya di SMP ini karena mengetes logis dan berpikir kritis serta membantu saya memahami pelajaran tingkat lanjut di dunia komputer.", pesan:"Semoga SMP Hidayatullah lebih sering untuk mempraktek, karena orang pintar bukan lahir dari sekadar literasi tapi dimulai dari aksi.", lanjut:"SMA N 1 / 6" },
  { no:2, name:"Airlangga Azmi", photo:"images/airlangga.webp", ttl:"Timika, 12 April 2011", alamat:"Jln. K. H. Dewantara", hobi:"Olahraga", cita:"Pilot", kesan:"Tiga tahun di Hidayatullah penuh cerita. Ada pusingnya hafalan, deg-degannya setoran, rame pas olahraga, sampai ketawa ngakak di kantin pas jam istirahat. Di sini aku belajar disiplin, tanggung jawab, dan pentingnya jaga adab sama guru dan teman. Bangga jadi bagian Angkatan 15.", pesan:"Kepada seluruh Ustadz dan Ustadzah, jazaakumullahu khairan atas ilmu, bimbingan, dan kesabaran mendidik kami selama 3 tahun. Buat teman-teman Angkatan 15, semoga kita tetap istiqomah, jadi pribadi yang sholeh, dan sukses mengejar cita-cita.", lanjut:"STM" },
  { no:3, name:"Akmal Haidhar Syafiq", photo:"images/akmal.webp", ttl:"Timika, 20 Mei 2011", alamat:"Jln. Pemuda SP 1", hobi:"Membaca", cita:"Reporter", kesan:"Selama saya bersekolah di sini, saya mendapatkan banyak teman, pelajaran berharga, serta banyak sekali kenangan suka maupun duka. Dari yang setiap hari kita tertawa di kelas, dihantui tugas menumpuk, serta banyaknya ujian, semua kita telah lewati bersama.", pesan:"Semoga SMP Hidayatullah makin maju dan tetap jadi tempat yang penuh kenangan. Buat teman-teman, terima kasih sudah jadi bagian dari cerita selama ini. Semoga kita masih bisa tertawa bareng seperti sekarang.", lanjut:"SMAN 1" },
  // ... (data siswa lainnya tetap sama, tidak berubah)
  { no:23, name:"Abid Fadil Abyan", photo:"images/fadil.webp", ttl:"Makassar, 1 Oktober 2010", alamat:"Jln. Irigasi", hobi:"Main Game", cita:"Pengusaha Sukses", kesan:"Melewati hari-hari bareng kalian adalah hal yang paling seru. Dari bercanda di kelas sampai kerja kelompok yang lebih banyak mainnya, semua momen itu bakal selalu saya ingat sebagai bagian terbaik dari masa sekolah.", pesan:"Walaupun nanti kita bakal sibuk dengan urusan masing-masing, jangan pernah putus komunikasi ya. Tetaplah jadi versi terbaik dari diri kalian dan sampai bertemu di puncak kesuksesan nanti.", lanjut:"SMAS Alfalah" }
];

/* ── Countdown Timer ──────────────────────────────────────── */
const TARGET_DATE = new Date('2026-05-30T00:00:00');
const elDays  = document.getElementById('cdDays');
const elHours = document.getElementById('cdHours');
const elMins  = document.getElementById('cdMinutes');
const elSecs  = document.getElementById('cdSeconds');

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
  const now  = new Date();
  const diff = TARGET_DATE - now;
  if (diff <= 0) {
    elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = '00';
    return;
  }
  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins  = Math.floor((diff / (1000 * 60)) % 60);
  const secs  = Math.floor((diff / 1000) % 60);
  animateTick(elDays,  pad(days));
  animateTick(elHours, pad(hours));
  animateTick(elMins,  pad(mins));
  animateTick(elSecs,  pad(secs));
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ── SVG Placeholder (gambar kosong transparan) ─────── */
const EMPTY_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%232a6b42'/%3E%3C/svg%3E";
const FALLBACK_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%231b4a2e'/%3E%3Ccircle cx='100' cy='85' r='40' fill='%233edc7a'/%3E%3Crect x='45' y='140' width='110' height='70' rx='55' fill='%233edc7a'/%3E%3C/svg%3E";

/* ── Build Student Cards (default foto tersembunyi) ──────── */
function buildStudentCard(s) {
  const card = document.createElement('article');
  card.className = 'student-card';
  card.style.transitionDelay = `${(s.no % 3) * 0.07}s`;

  const hasData = s.kesan !== null && s.kesan !== "Tidak di ketahui";

  // Path foto asli disimpan di tombol nanti
  const photoSrc = s.photo;

  card.innerHTML = `
    <div class="student-number">${s.no}</div>

    <!-- Tombol toggle foto (default: foto tersembunyi) -->
    <button class="photo-toggle-btn" data-open="false" data-src="${photoSrc}" aria-label="Tampilkan foto ${s.name}">
      <span class="ptb-icon">&#9660;</span>
      <span class="ptb-label">Tampilkan Foto</span>
    </button>

    <!-- Wrapper foto — default collapsed -->
    <div class="student-photo-wrap photo-is-closed">
      <img
        src="${EMPTY_PLACEHOLDER}"
        alt="Foto ${s.name}"
        class="student-photo"
        loading="lazy"
        data-real-src="${photoSrc}"
        onerror="this.src='${FALLBACK_PLACEHOLDER}'; this.onerror=null;"
      />
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
        <div class="student-text-block">
          <p class="text-block-label">Kesan</p>
          <p class="text-block-content">${s.kesan}</p>
        </div>
        <div class="student-text-block">
          <p class="text-block-label">Pesan</p>
          <p class="text-block-content">${s.pesan}</p>
        </div>
        ${s.lanjut && s.lanjut !== "—" ? `<span class="student-next-school">${s.lanjut}</span>` : ''}
      ` : `<p class="student-no-data">Kenangan tersimpan dalam hati</p>`}
    </div>
  `;

  /* ── Toggle Logic (default tertutup) ───────────────────── */
  const btn  = card.querySelector('.photo-toggle-btn');
  const wrap = card.querySelector('.student-photo-wrap');
  const img  = card.querySelector('.student-photo');

  btn.addEventListener('click', () => {
    const isOpen = btn.dataset.open === 'true';

    if (isOpen) {
      // ── TUTUP ──
      // Set height eksplisit agar animasi collapse berfungsi
      wrap.style.maxHeight = wrap.scrollHeight + 'px';
      void wrap.offsetHeight; // reflow

      wrap.classList.remove('photo-is-open');
      wrap.classList.add('photo-is-closed');

      // Setelah transisi selesai, kosongkan src (hemat memori)
      wrap.addEventListener('transitionend', () => {
        img.src = EMPTY_PLACEHOLDER;
        img.removeAttribute('src'); // opsional
      }, { once: true });

      btn.dataset.open = 'false';
      btn.querySelector('.ptb-icon').innerHTML  = '&#9660;';
      btn.querySelector('.ptb-label').textContent = 'Tampilkan Foto';
      btn.setAttribute('aria-label', `Tampilkan foto ${s.name}`);

    } else {
      // ── BUKA ──
      const realSrc = img.dataset.realSrc;
      img.src = realSrc;
      img.onerror = function () {
        this.src = FALLBACK_PLACEHOLDER;
        this.onerror = null;
      };

      // Tunggu gambar mulai dimuat, lalu expand
      const expand = () => {
        wrap.classList.remove('photo-is-closed');
        wrap.classList.add('photo-is-open');
        wrap.style.maxHeight = ''; // lepas batasan inline
      };

      if (img.complete) {
        expand();
      } else {
        img.onload = expand;
        // fallback jika load lama
        setTimeout(expand, 120);
      }

      btn.dataset.open = 'true';
      btn.querySelector('.ptb-icon').innerHTML  = '&#9650;';
      btn.querySelector('.ptb-label').textContent = 'Sembunyikan Foto';
      btn.setAttribute('aria-label', `Sembunyikan foto ${s.name}`);
    }
  });

  return card;
}

/* ── Render semua kartu ─────────────────────────────────── */
const grid = document.getElementById('studentsGrid');
students.forEach(s => grid.appendChild(buildStudentCard(s)));

/* ── Intersection Observer (scroll reveal) ────────────────── */
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
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(
        () => entry.target.classList.add('visible'),
        (parseInt(entry.target.dataset.index || 0) % 3) * 70
      );
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.student-card').forEach((card, i) => {
  card.dataset.index = i;
  cardObserver.observe(card);
});

/* ── Header + Particles ──────────────────────────────────── */
window.addEventListener('load', () => {
  document.querySelector('.site-header').classList.add('loaded');

  const particles = document.querySelector('.particles');
  for (let i = 0; i < 35; i++) {
    const span = document.createElement('span');
    span.style.left              = Math.random() * 100 + 'vw';
    span.style.animationDuration = (6 + Math.random() * 10) + 's';
    span.style.animationDelay   = (Math.random() * 5) + 's';
    particles.appendChild(span);
  }
});

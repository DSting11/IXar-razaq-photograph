/* ═══════════════════════════════════════════════════════════
   ANGKATAN XV — SMP INTEGRAL HIDAYATULLAH TIMIKA
   script.js (optimasi performa, canvas particles, data asli)
   ═══════════════════════════════════════════════════════════ */

// Data siswa (sama persis dari file asli)
const students = [
  { no:1, name:"Achmad Daniswara Javas Muchie", photo:"images/danis.jpeg", ttl:"Keerom, 3 Agustus 2011", alamat:"BTN Kamoro Indah Blok B No 27", hobi:"Mencari Hal Baru Tiap Hari", cita:"Cyber Network Security", kesan:"Menurut saya, MTK, fisika, dan bahasa Inggris adalah pelajaran paling berguna bagi saya di SMP ini karena mengetes logis dan berpikir kritis serta membantu saya memahami pelajaran tingkat lanjut di dunia komputer.", pesan:"Semoga SMP Hidayatullah lebih sering untuk mempraktek, karena orang pintar bukan lahir dari sekadar literasi tapi dimulai dari aksi.", lanjut:"SMA N 1 / 6" },
  { no:2, name:"Airlangga Azmi", photo:"images/airlangga.jpeg", ttl:"Timika, 12 April 2011", alamat:"Jln. K. H. Dewantara", hobi:"Olahraga", cita:"Pilot", kesan:"Tiga tahun di Hidayatullah penuh cerita. Ada pusingnya hafalan, deg-degannya setoran, rame pas olahraga, sampai ketawa ngakak di kantin pas jam istirahat. Di sini aku belajar disiplin, tanggung jawab, dan pentingnya jaga adab sama guru dan teman. Bangga jadi bagian Angkatan 15.", pesan:"Kepada seluruh Ustadz dan Ustadzah, jazaakumullahu khairan atas ilmu, bimbingan, dan kesabaran mendidik kami selama 3 tahun. Buat teman-teman Angkatan 15, semoga kita tetap istiqomah, jadi pribadi yang sholeh, dan sukses mengejar cita-cita.", lanjut:"STM" },
  { no:3, name:"Akmal Haidhar Syafiq", photo:"images/akmal.jpeg", ttl:"Timika, 20 Mei 2011", alamat:"Jln. Pemuda SP 1", hobi:"Membaca", cita:"Reporter", kesan:"Selama saya bersekolah di sini, saya mendapatkan banyak teman, pelajaran berharga, serta banyak sekali kenangan suka maupun duka. Dari yang setiap hari kita tertawa di kelas, dihantui tugas menumpuk, serta banyaknya ujian, semua kita telah lewati bersama.", pesan:"Semoga SMP Hidayatullah makin maju dan tetap jadi tempat yang penuh kenangan. Buat teman-teman, terima kasih sudah jadi bagian dari cerita selama ini. Semoga kita masih bisa tertawa bareng seperti sekarang.", lanjut:"SMAN 1" },
  { no:4, name:"Andi Heril Abdilla", photo:"images/haeril.jpeg", ttl:"Timika, 7 Maret 2011", alamat:"Kebun Sirih Jalur 4", hobi:"Sepak Bola", cita:"Manager Freeport", kesan:"Selama saya sekolah di sini, saya mendapatkan banyak teman, pembelajaran yang cukup baik dan tidak membosankan, mendapatkan guru-guru yang baik dan tidak mudah marah dalam mengajar murid-muridnya, serta saya mendapatkan banyak pengalaman.", pesan:"Semoga Hidayatullah makin sukses ke depannya.", lanjut:"SMK Harapan" },
  { no:5, name:"Elfahmi Rasya", photo:"images/fahmi.jpeg", ttl:"Timika, 6 Juni 2011", alamat:"Jln. Pendidikan", hobi:"Bermain", cita:"Dokter", kesan:"Selama bersekolah di SMP Integral Hidayatullah Timika, saya mendapatkan banyak pengalaman berharga, baik dalam pelajaran umum maupun pendidikan agama. SMP Integral Hidayatullah Timika mengajarkan pentingnya ilmu, akhlak, dan kedisiplinan sehingga membentuk karakter siswa yang lebih baik.", pesan:"Saya berharap SMP Integral Hidayatullah Timika terus menjadi sekolah yang lebih maju dan mampu mencetak generasi yang berilmu, berakhlak, dan bermanfaat bagi masa depan.", lanjut:"PPMI Shohwatul Is'ad" },
  { no:6, name:"Erlan Nur Hafizd Alfansuri", photo:"images/erlan.jpeg", ttl:"Timika, 12 Februari 2011", alamat:"Jln. Anggrek Jalur 4", hobi:"Nonton", cita:"Dokter / Apoteker", kesan:"Selama menjalani masa sekolah, saya mendapatkan banyak pengalaman berharga, mulai dari belajar, berteman, hingga menghadapi berbagai tantangan yang membentuk diri saya menjadi lebih baik.", pesan:"Semoga SMP Hidayatullah ke depannya, lingkungan sekolah bisa terus berkembang menjadi lebih baik, baik dalam cara pembelajaran maupun komunikasi antara siswa dan pihak sekolah.", lanjut:"SMAN 1" },
  { no:7, name:"Fahrul Malik Julian D. Habbi", photo:"images/fahrul.jpeg", ttl:"29 Juli 2010", alamat:"SP 4 Jln. Cendrawasih", hobi:"Lari", cita:"Trakindo CAT", kesan:"Saya merasa senang bersekolah di Hidayatullah, karena memiliki banyak teman-teman yang baik, tidak hanya itu guru-guru yang sangat baik dan sabar.", pesan:"Semoga SMP Hidayatullah menjadi sekolah terfavorit dan banyak peminatnya, semoga teman-teman saya berhasil mencapai mimpinya.", lanjut:"SMA N 1 Mimika" },
  { no:8, name:"Farhan Saputra Tambunan", photo:"images/farhan.jpeg", ttl:"Timika, 27 Juli 2010", alamat:"SP 4 Jalur 7", hobi:"Berenang", cita:"TNI", kesan:"Selama bersekolah di SMP Integral Hidayatullah Timika, saya mendapatkan banyak ilmu pengetahuan agama, pelajaran, dan pengalaman yang tidak akan pernah saya lupakan.", pesan:"Semoga SMP Integral Hidayatullah Timika bisa melahirkan tokoh-tokoh agama yang hebat.", lanjut:"SMA Taruna" },
  { no:9, name:"Fathier Al Mu'min Putra Deylano", photo:"images/fathir.jpeg", ttl:"Timika, 27 Januari 2011", alamat:"BTN Kamoro Indah, SP 4", hobi:"Olahraga", cita:"Karyawan Freeport / Pembisnis Sukses", kesan:"Sekolahnya asik, gurunya baik, Hidayatullah tempat terbaik buat belajar... ditambah teman-teman semua sefrekuensi. Cape di Hidayatullah bukan cape belajar, tapi cape ketawain hal yang ngga jelas bareng teman.", pesan:"Semoga SMP Integral Hidayatullah terus mempertahankan cara pembelajaran yang memudahkan murid memahami materi, dan terus mencetak lulusan yang berakhlak mulia dan berprestasi.", lanjut:"STM / SMAN 6" },
  { no:10, name:"Giza", photo:"images/giza.jpeg", ttl:"—", alamat:"—", hobi:"—", cita:"—", kesan:"Tidak di ketahui", pesan:"Tidak di ketauhi", lanjut:"Tidak di ketahui" },
  { no:11, name:"M. Malik Maulana Sabar", photo:"images/malik.jpeg", ttl:"Timika, 11 Januari 2011", alamat:"SP 1 Jalan Garuda Jalur 2", hobi:"Memasak", cita:"Pembalap Motor GP", kesan:"Selama sekolah di Hidayatullah saya mendapatkan banyak kenangan yang indah bersama teman-teman saya serta saya berterima kasih kepada guru-guru yang sudah mengajari saya.", pesan:"Semoga Hidayatullah ke depan lebih baik dan maju lagi, dan saya meminta maaf jika selama di sekolah banyak membuat kesalahan.", lanjut:"SMAN 1" },
  { no:12, name:"M. Nur Imron Romadhoni", photo:"images/imron.jpeg", ttl:"Jayapura, 11 September 2010", alamat:"Jayapura", hobi:"Pencak Silat", cita:"Pengusaha Sukses", kesan:"Selama saya sekolah di sini, saya mendapatkan pengalaman yang sangat banyak dan teman-teman yang sangat baik, serta guru-guru yang baik dan sabar dalam mengajar.", pesan:"Pesan dari saya buat adik-adik kelas jangan melawan guru dan jagalah adabnya dan jangan saling membully.", lanjut:"SMA Jayapura" },
  { no:13, name:"Muhammad Bilal Adzani", photo:"images/bilal.jpeg", ttl:"Timika, 10 Juni 2011", alamat:"Jln. Busiri Tengah", hobi:"Dengar Musik & Berenang", cita:"Pembalap Nascar", kesan:"Selama saya di sekolah ini saya mendapatkan ilmu dan teman yang banyak. Sekolah ini sangat berharga dan tidak akan terlupakan. Sekolah ini bukan hanya tempat untuk belajar, tetapi juga tempat untuk tumbuh, mengenal arti kebersamaan, kedisiplinan, dan tanggung jawab.", pesan:"Terima kasih kepada seluruh guru yang telah dengan sabar membimbing dan memberikan ilmu, serta kepada teman-teman yang selalu memberikan semangat dan kebersamaan. Semua kenangan yang ada akan selalu menjadi bagian penting dalam perjalanan hidup saya.", lanjut:"STM Kuala Kencana" },
  { no:14, name:"Muhammad Ridho Alfaridzi", photo:"images/ridho.jpeg", ttl:"Timika, 24 April 2011", alamat:"Jln. Yos Sudarso", hobi:"Membaca & Bersepeda", cita:"Dokter", kesan:"Selama sekolah di Hidayatullah saya mendapatkan ilmu dan pengalaman baru. Saya menyadari bahwa tidak semua hal berjalan sesuai rencana, namun justru dari situ saya belajar untuk berkembang dan bertahan.", pesan:"Semoga Hidayatullah ke depan menghasilkan generasi yang lebih berprestasi dan luar biasa, dan terus menjadi tempat bertumbuh, bukan hanya dalam ilmu, tetapi juga dalam nilai dan karakter.", lanjut:"SMAN 1" },
  { no:15, name:"Muhammad Yoshi Ramadani", photo:"images/yoshi.jpeg", ttl:"Jawa Temanggung, Agustus 2010", alamat:"SP 2 Jalur 2", hobi:"Lari", cita:"TNI", kesan:"Selama sekolah di Hidayatullah saya mendapatkan teman dan guru yang baik hati dan tidak sombong.", pesan:"Semoga masjid cepat jadi, aamiin.", lanjut:"SMAS Alfalah" },
  { no:16, name:"Prabu Eriyana Wirahadi", photo:"images/prabu.jpeg", ttl:"Maluku Utara, 26 Januari 2011", alamat:"Kilo 10", hobi:"Boxing", cita:"Tentara", kesan:"Terima kasih ustadz dan ustadzah atas mengajari murid-murid, semoga sehat selalu dan panjang umur, semoga rezeki lancar.", pesan:"Semoga Hidayatullah maju dan semoga masjid cepat selesai.", lanjut:"—" },
  { no:17, name:"Pradipta Panggulu Putra", photo:"images/dipta.jpeg", ttl:"Balikpapan, 31 Desember 2010", alamat:"Depan Basarnas", hobi:"Main Game", cita:"CEO", kesan:"Selama saya bersekolah di sini, saya mendapatkan banyak pengalaman berharga. Guru-gurunya baik, sabar, dan selalu membimbing kami dengan penuh perhatian. Saya juga mendapatkan banyak teman yang menyenangkan dan kenangan yang tidak akan terlupakan.", pesan:"Semoga sekolah ini terus berkembang menjadi lebih baik lagi, semakin maju, dan terus mencetak siswa-siswi yang berprestasi. Untuk adik-adik kelas, tetap semangat belajar dan jaga nama baik sekolah.", lanjut:"SMAS Alfalah" },
  { no:18, name:"Rahmat Fahri Alrasya", photo:"images/fahri.jpeg", ttl:"Timika, 16 Januari 2011", alamat:"Jln. Ahmad Yani", hobi:"Berenang", cita:"Dokter", kesan:"Selama saya sekolah di sini, saya sangat senang karena bisa belajar hal baru, bertemu dengan teman-teman yang seru, dan mendapat pengalaman berharga.", pesan:"Semoga sekolah ini lebih baik ke depannya, suasananya tetap nyaman, dan terus berkembang. Semoga semua murid dapat meraih cita-citanya.", lanjut:"SMAN 1" },
  { no:19, name:"Ramadhan Jeroen Saifoel", photo:"images/rama.jpeg", ttl:"Timika, 22 Agustus 2011", alamat:"—", hobi:"Main Bola & Berenang", cita:"Pekerja Freeport & Mekanik", kesan:"Selama di SMP sangat berharga, penuh cerita, tawa, dan juga tantangan yang memberi banyak pelajaran. Terima kasih untuk guru dan teman-teman atas kebersamaan dan kenangannya.", pesan:"Alhamdulillah masa SMP telah selesai dengan banyak pelajaran dan pengalaman seru. Semoga sekolah Hidayatullah bisa terus berkembang dan menjadi lebih baik.", lanjut:"STM / SMAN 6" },
  { no:20, name:"Rifky Raja", photo:"images/raja.jpeg", ttl:"Timika, 14 Mei 2011", alamat:"Jln. Matoa", hobi:"Sepak Bola", cita:"TNI AU", kesan:"Selama saya sekolah di SMP Hidayatullah saya mendapatkan banyak pengalaman dan pelajaran yang baik.", pesan:"Semoga Masjid Jami' Hidayatullah cepat jadi.", lanjut:"SMA Hidayatullah" },
  { no:21, name:"Risky Adittya Pratama Andolo", photo:"images/risky.jpeg", ttl:"Timika, 15 September 2010", alamat:"Jln. Maleo Lorong Damai", hobi:"Bermain Alat Musik", cita:"Pengusaha Sukses", kesan:"Saya mendapati ilmu dari guru-guru yang sabar terhadap sifat saya, dan yang cukup untuk memengaruhi masa depan saya… dan selama saya di sini… saya mendapatkan banyak cerita bahagia, keluh kesah, suka dan duka.", pesan:"Semoga sekolah ini menjadi sekolah SMP Muslim terbaik di Timika, dan terus berkembang… semoga sekolah ini membuat fasilitas atau ekskul yang lebih untuk murid-murid ke depannya.", lanjut:"Taruna / STM" },
  { no:22, name:"Thoriqi Dinur Rohman", photo:"images/riqi.jpeg", ttl:"Timika, 24 Juli 2010", alamat:"Pondok Pesantren Hidayatullah Kilo 9", hobi:"Bermain Game", cita:"—", kesan:"Saya merasa senang di sini.", pesan:"Untuk adik kelas, jangan nakal seperti saya, belajarlah lebih giat.", lanjut:"SMA Hidayatullah Timika" },
  { no:23, name:"Abid Fadil Abyan", photo:"images/fadil.jpeg", ttl:"Makassar, 1 Oktober 2010", alamat:"Jln. Irigasi", hobi:"Main Game", cita:"Pengusaha Sukses", kesan:"Melewati hari-hari bareng kalian adalah hal yang paling seru. Dari bercanda di kelas sampai kerja kelompok yang lebih banyak mainnya, semua momen itu bakal selalu saya ingat sebagai bagian terbaik dari masa sekolah.", pesan:"Walaupun nanti kita bakal sibuk dengan urusan masing-masing, jangan pernah putus komunikasi ya. Tetaplah jadi versi terbaik dari diri kalian dan sampai bertemu di puncak kesuksesan nanti.", lanjut:"SMAS Alfalah" }
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
  
  // Fallback SVG yang jelas terlihat jika gambar gagal
  const fallbackSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%231b4a2e'/%3E%3Ccircle cx='100' cy='85' r='40' fill='%233edc7a'/%3E%3Crect x='45' y='140' width='110' height='70' rx='55' fill='%233edc7a'/%3E%3Ctext x='100' y='115' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3E😊%3C/text%3E%3C/svg%3E`;
  
  card.innerHTML = `
    <div class="student-number">${s.no}</div>
    <div class="student-photo-wrap">
      <img src="${s.photo}" alt="Foto ${s.name}" class="student-photo" loading="lazy"
        onerror="this.onerror=null; this.src='${fallbackSVG}';" />
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

/* ── Canvas Particles (ringan, tidak pakai DOM) ───────────── */
(function initParticles() {
  const canvas = document.querySelector('.particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 45; // cukup banyak, tetap ringan

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
      this.y = Math.random() * height + height;
      this.size = Math.random() * 4 + 2;
      this.speed = Math.random() * 0.8 + 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
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
      ctx.shadowBlur = 0;
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  resize();
  initParticles();
  animate();
})();

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
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = parseInt(entry.target.dataset.index || 0);
      setTimeout(() => entry.target.classList.add('visible'), (index % 3) * 70);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.student-card').forEach((card, i) => {
  card.dataset.index = i;
  cardObserver.observe(card);
});

window.addEventListener('load', () => {
  const header = document.querySelector('.site-header');
  header.classList.add('loaded');
});

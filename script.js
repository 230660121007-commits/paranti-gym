// Efek klik tombol Gabung Sekarang
document.getElementById('join-btn').addEventListener('click', function() {
  window.scrollTo({
    top: document.getElementById('daftar').offsetTop,
    behavior: 'smooth'
  });
});

// Efek scroll halus untuk link navigasi
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
// Animasi muncul saat scroll (fade-in)
const fadeEls = document.querySelectorAll('.fade-in');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeEls.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();
// Ubah tampilan header saat scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
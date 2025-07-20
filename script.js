// Inisialisasi Animate on Scroll (AOS)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
});

// Fungsi untuk smooth scroll saat link navigasi di-klik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fungsi untuk mengubah background navbar saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/40', 'backdrop-blur-sm');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-black/40', 'backdrop-blur-sm');
        navbar.classList.add('bg-transparent');
    }
});


// === KODE BARU UNTUK HAMBURGER MENU ===
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});

// Menutup menu mobile jika salah satu link di dalamnya di-klik
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

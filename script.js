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


// === KODE BARU UNTUK TOMBOL "LIHAT SEMUA KEGIATAN" ===
document.addEventListener('DOMContentLoaded', function () {
    const lihatSemuaBtn = document.getElementById('lihat-semua-kegiatan');
    const kegiatanGrid = document.getElementById('kegiatan-grid');
    // Pilih semua artikel di dalam grid, kecuali 3 yang pertama
    const hiddenCards = Array.from(kegiatanGrid.querySelectorAll('article')).slice(3);

    // Sembunyikan kartu-kartu tersebut secara default
    hiddenCards.forEach(card => {
        card.classList.add('hidden');
    });

    lihatSemuaBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Toggle class 'hidden' pada card yang tersembunyi
        hiddenCards.forEach(card => {
            card.classList.toggle('hidden');
        });

        // Ubah teks tombol berdasarkan kondisi
        const isHidden = hiddenCards[0].classList.contains('hidden');
        
        if (isHidden) {
            lihatSemuaBtn.innerHTML = `
                Lihat Semua Kegiatan
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            `;
        } else {
            lihatSemuaBtn.innerHTML = `
                Tampilkan Lebih Sedikit
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
            `;
        }
    });
});

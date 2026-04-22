// Smooth scrolling untuk semua link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Fungsi untuk menangani error gambar (fallback)
function handleImageError(imgElement, defaultText) {
    imgElement.onerror = null;
    imgElement.src = `https://via.placeholder.com/300x180?text=${defaultText}`;
}

// Handler untuk semua gambar projek
document.querySelectorAll('.project-img-container img').forEach(img => {
    img.addEventListener('error', function() {
        const altText = this.alt || 'Project Image';
        handleImageError(this, altText);
    });
});

// Handler untuk semua gambar sertifikat
document.querySelectorAll('.sertifikat-item img').forEach(img => {
    img.addEventListener('error', function() {
        const altText = this.alt || 'Certificate';
        handleImageError(this, altText);
    });
});

// Handler untuk gambar profil (perbaikan: pakai class, bukan ID)
const profileImg = document.querySelector('.hero-img img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.onerror = null;
        this.src = 'https://via.placeholder.com/280x280?text=Keila+Lutfiana';
    });
}

// Animasi fade-in saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Terapkan animasi ke semua card, project-item, dan sertifikat-item
document.querySelectorAll('.card, .project-item, .sertifikat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Efek typing pada hero (opsional)
const heroText = document.querySelector('.hero-text p');
if (heroText) {
    heroText.style.opacity = '1';
}

// Tambahkan tahun otomatis di footer
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
}

// Navbar background change on scroll (perbaikan: warna sesuai style.css)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Console greeting
console.log('✨ Portfolio Keila Lutfiana Artamevia - Website portfolio siap digunakan!');
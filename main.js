document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {


    // --- 2. NAYA KODE: Mobile Menu Toggle Logic ---
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            // active class lagane/hatane se menu show/hide hoga
            navLinks.classList.toggle('active');
            
            // open class lagane/hatane se 3 lines Cross (X) me badlengi
            menuBtn.classList.toggle('open');
        });
    }
});

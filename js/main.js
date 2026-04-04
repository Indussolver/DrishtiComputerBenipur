document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if(menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

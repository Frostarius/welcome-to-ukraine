const navItems = document.querySelectorAll('.nav__item')

if (window.screen.width < 992) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navBtn.classList.toggle('nav-btn__active');
            nav.classList.toggle('nav__active');
        })
    })
}
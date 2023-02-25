const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('nav-btn__active');
    nav.classList.toggle('nav__active');
})
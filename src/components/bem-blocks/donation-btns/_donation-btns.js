const priceBtns = document.querySelectorAll('.donation-btns__price');

const priceBtnActiveClass = 'donation-btns__price__active';

function priceBtnsRemoveActiveClass() {
    priceBtns.forEach(btn => {
        btn.classList.remove(priceBtnActiveClass);
    });
}

function setPriceBtnActiveClass(btn) {
    btn.classList.add(priceBtnActiveClass);
}

priceBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        priceBtnsRemoveActiveClass();
        setPriceBtnActiveClass(e.target);
    })
})
const burger = document.querySelector('.burger__icon');
const burgermenu = document.querySelector('.burger__menu');

burger.addEventListener('click', () => {
    let status = burgermenu.classList.contains('burger__active')
    if (status == false) {
        burgermenu.classList.add('burger__active');
        burger.style.transform = 'scale(1.4)'
    } else {
        burgermenu.classList.remove('burger__active')
        burger.style.transform = 'scale(1)'
    }
})
AOS.init();
const burger = document.querySelector('.btn-menu');
if (burger) {
    const menuMobile = document.querySelector('.menu-mobile');
    const logo = document.querySelector('.logo');
    const scroll = document.querySelector('html,body')
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_activeBtn')
        menuMobile.classList.toggle('_active')
        logo.classList.toggle('logo_active')
        scroll.classList.toggle('_lock')
    })
}
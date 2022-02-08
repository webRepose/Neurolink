AOS.init();
const burger = document.querySelector('.btn-menu');
if (burger) {
    const menuMobile = document.querySelector('.menu-mobile');
    const logo = document.querySelector('.logo');
    // const menu = document.querySelector('.menu-m');
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_active')
        document.body.classList.toggle('_lock')
        menuMobile.classList.toggle('_active')
        logo.classList.toggle('logo_active')
        // menu.classList.toggle('menu-m')
    })
}
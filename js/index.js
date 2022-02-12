AOS.init();
const burger = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.menu-mobile');
const logo = document.querySelector('.logo');
const scroll = document.querySelector('html,body');
if (burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_activeBtn');
        menuMobile.classList.toggle('_active');
        logo.classList.toggle('logo_active');
        scroll.classList.toggle('_lock');
    })
}

const link = document.querySelector(".link");
link.addEventListener("click", () => {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    logo.classList.remove('logo_active');
    scroll.classList.remove('_lock');
});

const link1 = document.querySelector(".link1");
link1.addEventListener("click", () => {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    logo.classList.remove('logo_active');
    scroll.classList.remove('_lock');
});


const link2 = document.querySelector(".link2");
link2.addEventListener("click", () => {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    logo.classList.remove('logo_active');
    scroll.classList.remove('_lock');
});

const link3 = document.querySelector(".link3");
link3.addEventListener("click", () => {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    logo.classList.remove('logo_active');
    scroll.classList.remove('_lock');
});

const link4 = document.querySelector(".link4");
link4.addEventListener("click", () => {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    logo.classList.remove('logo_active');
    scroll.classList.remove('_lock');
});


const menu = document.getElementById('menu');
const pageMenu = document.getElementById('pageMenu');
const submenu = document.getElementById('submenu');
const nav = document.querySelector('nav');
const searchInput = document.getElementById('search-input');
const searchClose = document.getElementById('searchClose');
const contactPageLink = document.querySelector('.contact-page-link');
const contactPageLinkUl = document.querySelector('.contact-page-link ul');
const bars = document.getElementById('bars');
const navClose = document.getElementById('navClose');
const navLink = document.querySelectorAll('nav a');


pageMenu.addEventListener('mouseover', () => {
    submenu.style = "transform: translateY(0);opacity: 1;pointer-events: auto;";
});

submenu.addEventListener('mouseleave', () => {
    submenu.style = "transform: translateY(100px);opacity: 0;pointer-events: none;transition: all .5s;";
});

nav.addEventListener('mouseleave', () => {
    submenu.style = "transform: translateY(100px);opacity: 0;pointer-events: none;transition: all .5s;";
});

searchInput.addEventListener('keyup', () => {
    if (searchInput.value === "") {
        searchClose.style.display = "none";
    } else {
        searchClose.style.display = "block";
    }
});

searchClose.addEventListener('click', () => {
    searchInput.value = "";
    searchClose.style.display = "none";
});

contactPageLink.addEventListener('click', () => {
    contactPageLinkUl.classList.toggle('active');
});

bars.addEventListener('click', () => {
    menu.classList.add('active');
});

navClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

pageMenu.addEventListener('click', () => {
    submenu.classList.toggle('active');
});

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        if (i == 2) {
            console.log("This is page menu");
        } else {
            menu.classList.remove('active');
        }
    });

}
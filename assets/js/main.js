const menu = document.getElementById('menu');
const submenu = document.getElementById('submenu');
const nav = document.querySelector('nav');
const searchInput = document.getElementById('search-input');
const close = document.getElementById('close');
const contactPageLink = document.querySelector('.contact-page-link');
const contactPageLinkUl = document.querySelector('.contact-page-link ul');


menu.addEventListener('mouseover', () => {
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
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
});

close.addEventListener('click', () => {
    searchInput.value = "";
    close.style.display = "none";
});

contactPageLink.addEventListener('click', () => {
    contactPageLinkUl.classList.toggle('active');
});
const mobileMenuButton = document.querySelector('.hamburger');
const menu = document.querySelector('nav>ul')

mobileMenuButton.addEventListener('click', () => {
    menu.classList.toggle('mobile-active');
})
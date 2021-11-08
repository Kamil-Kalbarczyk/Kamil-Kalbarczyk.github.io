const mobileMenuButton = document.querySelector('.hamburger i');
const menu = document.querySelector('nav>ul');
const jobTitle = document.querySelector('#home h2');
// const menuBackground = document.querySelector('nav>ul::after');

// mobileMenuButton.addEventListener('click', () => {
//     menu.classList.toggle('mobile-active');
// });

document.addEventListener('click', (e) => {
    if (e.target === mobileMenuButton) {
        menu.classList.toggle('mobile-active');
    } else if (e.target === menu) {
        return
    } else {
        menu.classList.remove('mobile-active');
    }
})

// menu background change

const menuBackground = document.createElement('div');
menuBackground.style.cssText = `
position: absolute;
top: 0;
right: 0;
width: 100%;
height: 100%;
background: rgb(0, 0, 0);
background: linear-gradient(171deg, rgba(0, 0, 0, 1) 0% , rgba(0, 0, 0, 0.2049194677871149) 100%);
// background-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 60%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0) 100%);
z-index: -1;
transform: translateX(110%);
transition: .7s;
`;

menu.append(menuBackground)

document.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menuBackground.style.transform = `translateX(0)`;
    } else {
        menuBackground.style.transform = `translateX(110%)`;
    }
})

// job title changing

const jobTitles = ['Front-end Developer', 'Web Developer', 'Freelancer'];
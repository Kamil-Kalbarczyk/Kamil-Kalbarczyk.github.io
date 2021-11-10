const mobileMenuButton = document.querySelector('.hamburger i');
const menu = document.querySelector('nav>ul');
const jobTitleRender = document.querySelector('#home h2');

document.addEventListener('click', (e) => {
    if (e.target === mobileMenuButton) {
        menu.classList.toggle('mobile-active');
        mobileMenuButton.classList.toggle('mobile-active');
    } else if (e.target === menu) {
        return
    } else {
        menu.classList.remove('mobile-active');
        mobileMenuButton.classList.remove('mobile-active');
    }
})

// menu background change

const menuBackground = document.createElement('ul');
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
jobTitleRender.textContent = "";
const singleJobTitle = document.createElement('span');
const textCursor = document.createElement('span');
textCursor.textContent = "|";
textCursor.classList.add('cursor');
jobTitleRender.prepend(singleJobTitle);
jobTitleRender.append(textCursor);

const jobTitles = ['Front-end Developer', 'Web Developer', 'Freelancer'];

const timeOfSingleLetter = 80;
const timeOFSingleWord = timeOfSingleLetter * 50;
let indexOfLetters = -15;
let indexOfWords = 0;

const writing = () => {
    if (indexOfLetters >= 0) {
        singleJobTitle.textContent += jobTitles[indexOfWords][indexOfLetters];
    };
    indexOfLetters++;
    if ((singleJobTitle.textContent.length === jobTitles.slice(-1)[0].length) && (indexOfWords === jobTitles.length - 1)) {
        indexOfLetters = -15;
        indexOfWords = 0;
        return setTimeout(() => {
            singleJobTitle.textContent = "";
            writing();
        }, timeOFSingleWord)
    };
    if (singleJobTitle.textContent.length === jobTitles[indexOfWords].length) {
        indexOfLetters = -15;
        indexOfWords++;
        setTimeout(() => {
            singleJobTitle.textContent = "";
        }, timeOFSingleWord);
        return setTimeout(writing, timeOFSingleWord);
    };
    setTimeout(writing, timeOfSingleLetter);
};

writing();
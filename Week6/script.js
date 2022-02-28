// Parallax scrolling effect for banner
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let cityscape = document.getElementById('cityscape');
let road = document.getElementById('road');
// let text = document.getElementById('txtMsg');
let wall = document.getElementById('officeWall');

window.addEventListener('scroll', () => {
    var value = window.scrollY;

    wall.style.left = value * 2 + 'px';
    bg.style.top = -value * 1 + 'px';
    moon.style.left = -value * 1 + 'px';
    cityscape.style.top = value * .3 + 'px';
    office.style.top = value * .005 + 'px';
    // text.style.top = value * 3 + 'px';
    // text.style.top = value * 1 + 'px';
});

// hamburger button

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Code for the Typewriter effect
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 5);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 150;

        if (this.isDeleting) {
            typeSpeed /= 2.5;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}
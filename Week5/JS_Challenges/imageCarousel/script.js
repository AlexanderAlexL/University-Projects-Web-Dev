const imgs = document.getElementById("images");
const imgNumber = document.querySelectorAll("#images img");

let i = 0;

function run() {
    i++;
    if (i > imgNumber.length - 1) {
        i = 0;
    }
    imgs.style.transform = `translateX(${-i * 600}px)`;
}

setInterval(run, 2500);
function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 2 + 3 + "s";

    snow.innerText = "\u2744";

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(createSnow, 300);

// Light snowflakes
function createSnow2() {
    const snow2 = document.createElement("div");
    snow2.classList.add("snow2");

    snow2.style.left = Math.random() * 100 + "vw";
    snow2.style.animationDuration = Math.random() * 2 + 3 + "s";

    snow2.innerText = "\u2744";

    document.body.appendChild(snow2);

    setTimeout(() => {
        snow2.remove();
    }, 5000);
}

setInterval(createSnow2, 300);
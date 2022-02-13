const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.body.style.background = randomBackg();
});

function randomBackg() {
    // generating HSL colors (hue, saturation, lightness) - generating hue value on the 360 degree color wheel
    return `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
}

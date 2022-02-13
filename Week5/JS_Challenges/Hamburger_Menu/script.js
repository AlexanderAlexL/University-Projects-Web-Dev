const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

closeBtn.onclick = function () {
    nav.classList.toggle("active");
}
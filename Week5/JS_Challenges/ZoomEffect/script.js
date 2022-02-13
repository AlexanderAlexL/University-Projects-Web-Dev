const container = document.getElementById("container");
const img = document.querySelector("img");


// getting the distances of the cursor within the container
container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    // console.log(x, y);

    // Now, that we have the coordinates, we can use those in the style sheet and then set the scale for the zoom
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)";
});


// set the event when the mouse leaves the container => returns to default
container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
});
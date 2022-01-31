
let time = document.getElementById("time");
function setTime() {

    const clock = new Date();
    let hours = clock.getHours();
    let mins = clock.getMinutes();
    let secs = clock.getSeconds();
    time.innerHTML = hours + ":" + mins + ":" + secs;

}

setTime();
setInterval(setTime, 1000);


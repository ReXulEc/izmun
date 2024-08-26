const izmun = new Date("Oct 18, 2024 00:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const dist = izmun - now;
    const days = Math.floor(dist / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((dist % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("mins").textContent = mins;
    document.getElementById("secs").textContent = secs;

    if (dist < 0) {
        clearInterval(x);
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("mins").textContent = "0";
        document.getElementById("secs").textContent = "0";
    }
}, 1000);
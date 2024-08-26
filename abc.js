let count = 0;
const orcun = document.getElementById("essekorcun");

orcun.addEventListener("click", () => {
    count++;
    if (count === 3) {
        window.open("assets/ask.png", "_blank");
    }
})
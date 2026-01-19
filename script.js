const targetDate = new Date("August 8, 2026 00:00:00 UTC").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".container").innerHTML = "<h1>JUMP NOW!</h1>";
    }
};

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
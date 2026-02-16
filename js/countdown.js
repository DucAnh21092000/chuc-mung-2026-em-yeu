// FIX SỰ KIỆN NÚT
document.getElementById("openBtn").addEventListener("click", function () {

    const s1 = document.getElementById("screen1");
    const s2 = document.getElementById("screen2");

    // Ẩn màn 1
    s1.style.opacity = "0";
    s1.style.transform = "scale(0.9)";

    setTimeout(() => {
        s1.style.display = "none";

        // Hiện màn 2
        s2.style.opacity = "1";
        s2.style.transform = "scale(1)";
        s2.style.pointerEvents = "auto";
    }, 800);
});

// COUNTDOWN
const tetDate = new Date("2026-02-17T00:00:00");
let countdown = document.getElementById("countdown")

const countdownInterval = setInterval(updateCountdown, 1000);

let isUpComing = false

function updateCountdown() {
    const now = new Date();
    const diff = tetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    if (d == 0 && h == 0 && m == 2 && s == 10) {
        isUpComing = true
    }


    if (isUpComing) {
        window.alert('Còn 2 phút nữa là tới giao thừa rồiii. Chuẩn bị đón giao thừa thôi nào em yêuuu')
        isUpComing = false
    }

    if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        localStorage.setItem("isDone", true);
    }
    else {
        localStorage.setItem("isDone", false);
    }

    countdown = document.getElementById("countdown");
    if (!countdown) {
        clearInterval(countdownInterval)
    }
    else {
        countdown.innerHTML = `
    <div class="unit"><div class="number">${d}</div><div class="label">Ngày</div></div>
    <div class="unit"><div class="number">${h}</div><div class="label">Giờ</div></div>
    <div class="unit"><div class="number">${m}</div><div class="label">Phút</div></div>
    <div class="unit"><div class="number">${s}</div><div class="label">Giây</div></div>`
    }
}

updateCountdown();



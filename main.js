checkbox.addEventListener("change", () => {
    document.body.classList.toggle("light", checkbox.checked);
});

const  target = document.querySelector("#target")

getComputedStyle(document.querySelector(".track")).display

document.querySelector(".track").style.transform = "translateX(-100%)"

// ===== Carousel (supports multiple on the page) =====
document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const track = carousel.querySelector(".track");
        const slides = Array.from(track.querySelectorAll("img"));
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        if (!track || slides.length === 0 || !prevBtn || !nextBtn) return;

        let index = 0;
        let timer = null;

        const update = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        const go = (delta) => {
            index = (index + delta + slides.length) % slides.length;
            update();
        };

        const start = () => {
            stop();
            timer = setInterval(() => go(1), 3500);
        };

        const stop = () => {
            if (timer) clearInterval(timer);
            timer = null;
        };

        prevBtn.addEventListener("click", () => go(-1));
        nextBtn.addEventListener("click", () => go(1));

        // Pause on hover/focus
        carousel.addEventListener("mouseenter", stop);
        carousel.addEventListener("mouseleave", start);
        carousel.addEventListener("focusin", stop);
        carousel.addEventListener("focusout", start);

        // Keyboard support when carousel is focused
        carousel.setAttribute("tabindex", "0");
        carousel.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") go(-1);
            if (e.key === "ArrowRight") go(1);
        });

        update();
        start();
    });
});

const btn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 300);
});

btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

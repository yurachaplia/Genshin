const menuBtn = document.querySelector(".menu");
const navigation = document.querySelector(".nawigacja");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".naw-przycisk");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".zawartosc");

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        });
    });

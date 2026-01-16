const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

function toggleMenu() {
    nav.classList.toggle("opened");
    document.body.classList.toggle("no-scroll");
}
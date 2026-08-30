const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});

document.getElementById("year").textContent =
    new Date().getFullYear();

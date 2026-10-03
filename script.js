const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const themeBtn = document.getElementById("themeBtn");

/* Always start in light mode.
   No previous theme is remembered. */
document.body.classList.remove("dark");

/* Mobile menu */
menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

/* Close menu after clicking a link */
document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

/* Theme change - only for the current page visit */
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

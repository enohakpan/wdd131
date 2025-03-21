// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Personal Information
const name = "Enoh Uwem Akpan";
const country = "Nigeria";

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuToggle.textContent = navMenu.classList.contains("show") ? "✖" : "☰"; // Change to "X" when open
});

// Footer Updates
document.getElementById("year").textContent = `© ${new Date().getFullYear()} Temple Album | ${name} - ${country}`;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

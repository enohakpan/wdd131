// Run the script after the page loads
window.onload = function () {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const name = "Enoh Uwem Akpan";
    const country = "Nigeria";

    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML = `
            <p>&copy; ${currentYear} | ${name} | ${country}</p>
            <p style="margin-top: 10px;">Last modified: ${lastModified}</p>
        `;
    } else {
        console.error("Footer not found. Check your HTML structure.");
    }
};

// Run the script after the page loads
window.onload = function () {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const name = "Enoh Uwem Akpan";
    const country = "Nigeria";

    const copyrightParagraph = document.querySelector("footer p:first-of-type");
    const modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");

    if (copyrightParagraph && modifiedParagraph) {
        copyrightParagraph.innerHTML = `&copy; ${currentYear} | ${name} | ${country} | <br>`;
        modifiedParagraph.innerHTML = ` Last modified: ${lastModified}`;
    } else {
        console.error("Footer paragraphs not found. Check your HTML structure.");
    }
};
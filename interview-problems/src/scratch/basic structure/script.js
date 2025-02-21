document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Select the navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    // Add event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default navigation
            alert(`You clicked on: ${this.textContent}`);
        });
    });
});
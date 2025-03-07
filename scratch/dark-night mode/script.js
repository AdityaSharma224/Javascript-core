document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Check user preference from local storage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Switch to Light Mode";
    }

    // Toggle between dark and light mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Save the user's preference
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            toggleButton.textContent = "☀️ Switch to Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            toggleButton.textContent = "🌙 Switch to Dark Mode";
        }
    });
});

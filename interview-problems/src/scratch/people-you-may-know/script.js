document.addEventListener("DOMContentLoaded", function () {
    // User data
    const users = [
        { name: "Jay Kreps", role: "Principle Engineering Manager at LinkedIn", image: "user1.jpg" },
        { name: "Jeremy Gillick", role: "Senior Web Developer at LinkedIn", image: "user2.jpg" },
        { name: "Albert Wang", role: "User Experience Design at LinkedIn", image: "user3.jpg" }
    ];

    // Get container
    const userList = document.getElementById("user-list");

    // Map through users and create HTML elements
    userList.innerHTML = users.map(user => `
        <div class="user">
            <img src="${user.image}" alt="${user.name}">
            <div class="user-info">
                <strong>${user.name}</strong>, ${user.role}
                <a href="#" class="connect">+ Connect</a>
            </div>
            <span class="close">&times;</span>
        </div>
    `).join("");

    // Add event listeners for close buttons
    document.querySelectorAll(".close").forEach(closeButton => {
        closeButton.addEventListener("click", function () {
            this.parentElement.style.display = "none";
        });
    });
});

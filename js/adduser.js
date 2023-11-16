document.getElementById("usernameButton").addEventListener("click", function() {
    let username = document.getElementById("usernameInput").value;
    localStorage.setItem("username", username);
    window.location.href = "./index.html";
});
document.getElementById("usernameButton").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "./index.html";
});
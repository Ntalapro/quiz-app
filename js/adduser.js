//Slindelo ----------------------------------------------------------------
document.getElementById("usernameButton").addEventListener("click", function() {
    let username = document.getElementById("usernameInput").value;
    if(username.length > 0) {
        localStorage.setItem("username", username);
        window.location.href = "./quiz.html";
    }else{
        alert("Please enter a valid username!");
    }

});

//Slindelo ----------------------------------------------------------------
let username = localStorage.getItem("username");
let score = localStorage.getItem("score");



window.addEventListener("load", ()=>{
    if (score >= 80){
        document.getElementById("picture").src = "./assets/gold_medal-removebg-preview.png" 
    }
    else if (score >=60){
        document.getElementById("picture").src = "assets/silver-removebg-preview.png" 
    }
    else{
        document.getElementById("picture").src = "assets/bronze-removebg-preview.png" 
    }

    document.getElementById("code-boxx").innerHTML = `
    <h3>${username}</h3>
    <p>Your scored ${score}% on the quiz</p>`
});

document.getElementById("usernameButton").addEventListener("click", function() {
    window.location.href = "./leaderboard.html";
});
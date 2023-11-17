let users= []; 
let rank= 0;
function fetchAllUsers() {
    fetch("http://localhost:2000/users")
              .then(response => response.json())
              .then(data => {
                  users = data;
                  sorted(users);
                  execute(users);
              })
              .catch(error => {
                  console.error("Error loading users:", error);
              });
}
function sorted(array){
        array.sort((a, b) => b.score - a.score);
}
function execute(array){
    console.log(array);
    let image_src = "";
    let class_name="";
    for(var i=0;i<array.length;i++) {
        
        if (array[i].score >= 80){
            image_src = "./assets/gold_medal-removebg-preview.png";
        }
        else if (array[i].score >=60){
            image_src = "assets/silver-removebg-preview.png";
        }
        else{
            image_src = "assets/bronze-removebg-preview.png";
        }
        (i+1) % 2 == 0 ? class_name="Even" : class_name = "Odd";

        if(array[i].name == localStorage.getItem("username") && array[i].score == localStorage.getItem("score")){
            rank= i+1;
            document.getElementById("table").innerHTML +=`
            <tr style="background-color: #990099">
                <td class="number">${i+1}</td>
                <td class="name">${array[i].name}</td>
                <td class="points">
                ${array[i].score}%
                <img
                    class="medal"
                    src="${image_src}"
                />
                </td>
            </tr>
            ` 
        }else{
            document.getElementById("table").innerHTML +=`
            <tr class=${class_name} >
                <td class="number">${i+1}</td>
                <td class="name">${array[i].name}</td>
                <td class="points">
                ${array[i].score}%
                <img
                    class="medal"
                    src="${image_src}"
                />
                </td>
            </tr>
            ` 
        }
    }

    document.getElementById("share").innerHTML = `<p>Your User Number: ${rank}</p>`
}

document.getElementById("exitButton").addEventListener("click", function() {
    window.location.href = "./landing.html";
});

window.addEventListener("load",fetchAllUsers);

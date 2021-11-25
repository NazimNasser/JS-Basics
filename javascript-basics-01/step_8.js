var currentButton = document.querySelector("button");

currentButton.onclick = function(){

    var age = document.querySelector("#age").value;

    if (age > 18){
        alert("you are over 18")
    } else {
        alert("you are under 18")
    };
};
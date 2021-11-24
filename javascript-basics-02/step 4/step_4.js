var theName  = document.querySelector("#name"),
    surname  = document.querySelector("#surname"),
    city  = document.querySelector("#city"),
    currentButton = document.querySelector("button");
currentButton.onclick = function(){
    var answer = confirm("are you sure")
    if (answer === true){
        theName.value = "";
        surname.value = "";
        city.value = "";
    }
};

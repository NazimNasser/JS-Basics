var greenDiv = document.querySelector(".green"),
    redDiv = document.querySelector(".red"),
    blueDiv = document.querySelector(".blue"),
    text = document.querySelector("#text");

function switchText(){
    greenDiv.onclick = function(){
        text.style.color = "green"
    };
    redDiv.onclick = function(){
        text.style.color = "red"
    };
    blueDiv.onclick = function(){
        text.style.color = "blue"
    };
};
switchText()
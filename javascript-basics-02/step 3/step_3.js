var currentDiv = document.querySelector("div");
var currentInput = document.querySelector("input");
currentInput.onkeyup = function(){
    currentDiv.innerHTML = currentInput.value;
}
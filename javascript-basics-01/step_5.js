var currentButton = document.querySelector("button");

currentButton.onclick = function(){

    var first_number = document.querySelector("#first_number").value,
        second_number = document.querySelector("#second_number").value;

    alert(first_number * second_number);
};
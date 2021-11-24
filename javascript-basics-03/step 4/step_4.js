var password = document.querySelector("#password"),
    confirmation = document.querySelector("#confirmation"),
    button = document.querySelector("button");

    button.onclick = function(){
        if(password.value != confirmation.value){
            password.style.border = "3px solid red";
            confirmation.style.border = "3px solid red";
        }
    };
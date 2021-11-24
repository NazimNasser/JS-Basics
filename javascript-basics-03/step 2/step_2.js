var show = document.querySelector("#show"),
    hide = document.querySelector("#hide"),
    texte = document.querySelector("#texte");

function switchText(){
    show.onclick = function(){
        texte.style.display = "inline"
    };
    hide.onclick = function(){
        texte.style.display = "none"
    }
};
switchText()
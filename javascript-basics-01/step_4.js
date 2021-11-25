var currentButton = document.querySelector("button");

currentButton.onclick = function(){

    var theName = document.querySelector("#name").value,
        surname = document.querySelector("#surname").value,
        city = document.querySelector("#city").value;

    alert(
        `
        Name : ${theName}
        surname : ${surname}
        city : ${city}
        `
    );
};
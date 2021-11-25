var currentButton = document.querySelector("button");

currentButton.onclick = function multiple(){

    var shoe_size = document.querySelector("#shoe_size").value,
        year = document.querySelector("#year").value;

    result = ((shoe_size * 2) + 5)* 50 - year + 1766
    alert("the result is: " + result)
};
multiple();
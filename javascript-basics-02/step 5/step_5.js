var img1 = document.querySelector("#image1"),
    img2 = document.querySelector("#image2"),
    img3 = document.querySelector("#image3"),
    img4 = document.querySelector("#image4"),
    img5 = document.querySelector("#image5");

    function switchImg(){
        img1.onmouseover = function(){
            img1.src="images/image1_2.jpg";
        };
    
        img2.onmouseover = function(){
            img2.src="images/image2_2.jpg";
        };
    
        img3.onmouseover = function(){
            img3.src="images/image3_2.jpg";
        };
    
        img4.onmouseover = function(){
            img4.src="images/image4_2.jpg";
        };
    
        img5.onmouseover = function(){
            img5.src="images/image5_2.jpg";
        };
    }
    
    switchImg();
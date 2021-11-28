// var img1 = document.querySelector("#image1"),
//     img2 = document.querySelector("#image2"),
//     img3 = document.querySelector("#image3"),
//     img4 = document.querySelector("#image4"),
//     img5 = document.querySelector("#image5");

//     function switchImg(){
//         img1.onmouseover = function(){
//             img1.src="images/image1_2.jpg";
//         };
    
//         img2.onmouseover = function(){
//             img2.src="images/image2_2.jpg";
//         };
    
//         img3.onmouseover = function(){
//             img3.src="images/image3_2.jpg";
//         };
    
//         img4.onmouseover = function(){
//             img4.src="images/image4_2.jpg";
//         };
    
//         img5.onmouseover = function(){
//             img5.src="images/image5_2.jpg";
//         };
//     }
    
//     switchImg();

//     function switchback(){
//         img1.onmouseout = function(){
//             img1.src="images/image1.jpg";
//         };
    
//         img2.onmouseout = function(){
//             img2.src="images/image2.jpg";
//         };
    
//         img3.onmouseout = function(){
//             img3.src="images/image3.jpg";
//         };
    
//         img4.onmouseout = function(){
//             img4.src="images/image4.jpg";
//         };
    
//         img5.onmouseout = function(){
//             img5.src="images/image5.jpg";
//         };
//     }
    
//     switchback();

var images = document.querySelectorAll("img");

images.forEach((image,num)=>{
    image.onmouseover = function(){
        image.src = `images/image${num+1}_2.jpg`;
    };
    image.onmouseout = function(){
        image.src = `images/image${num+1}.jpg`;
    };
});
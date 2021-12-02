//Slideshow
var i = 0;
var image = [];
var time = 3000;

image[0] = "images/cl_image1.jpg";
image[1] = "images/cl_image2.jpg";
image[2] = "images/cl_image3.jpg";
image[3] = "images/cl_image4.jpg";
image[4] = "images/cl_image5.jpg";

function changeImg() {
    document.slide.src = image[i];
    if (i < image.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;

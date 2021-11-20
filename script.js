//About me page, picture carousel

var i = 0;
var images = [];
var time = 3000;

images[0] = './images/deadpool.jpg';
images[1] = './images/tool_box.jpg';
images[2] = './images/1594264565532.jpg';
images[3] = './images/rg-31.jpg';
images[4] = './images/profile.jpg';

function changeImg() {
    document.slide.src = images[i];
    if(i < images.length- 1){
        i++;
    } else{
        i = 0
    }

    setTimeout("changeImg()", time)
}

window.onload= changeImg;


var display = document.querySelector(".img-display");
var title = document.querySelector(".photo-title");
var nxtBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");

var index =0;
var images = [
    {
        title: "Woman 1",
        url: 'images/woman 1.png'
    },
    {
        title: "Woman 2",
        url: 'images/woman 2.png'
    },
    {
        title: "Woman 3",
        url: 'images/woman 3.png'
    },
    {
        title: "Woman 4",
        url: 'images/woman 4.png'
    },
    {
        title: "Woman 5",
        url: 'images/woman 5.png'
    },
    {
        title: "Woman 6",
        url: 'images/woman 6.png'
    }

];

function next(){
    if(index === images.length-1){
        index = 0;
    } else {
        index++;
    }
    return index;
}
function prev(){
    if(index === 0){
        index = images.length-1;
    } else {
        index--;
    }
    return index;
}
function displayImage(){
    var currentImage = images[index].url;
    display.className.add("change-image");
    setTimeout(function(){
        display.style.backgroundImage = "url('"+currentImage+"')"

    },500);
    setTimeout(function(){
        display.classList.remove("change-image");
    },1000);
}

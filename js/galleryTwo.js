let item2 = 1;
showGalleryTwo(item2);
function goNextGall2(){
    plusSlides(1);
}
function goPrevGall2(){
    plusSlides(-1);
}
function plusSlides(n){
    showGalleryTwo(item2 += n);
}
function makeSlide1Gal2(){
    currentSlide(1);
}
function makeSlide2Gal2(){
    currentSlide(2);
}
function makeSlide3Gal2(){
    currentSlide(3);
}
function makeSlide4Gal2(){
    currentSlide(4);
}
function makeSlide5Gal2(){
    currentSlide(5);
}
function makeSlide6Gal2(){
    currentSlide(6);
}
function currentSlide(n){
    showGalleryTwo(item2 = n);
}
function showGalleryTwo(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if(n > slides.length) {
        item2 = 1
    }
    if(n < 1){
        item2 = slides.length
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[item2-1].style.display = "block";
    dots[item2-1].className += " active";
    captionText.innerHTML = dots[item2-1].alt;
}
var a_prev = document.getElementsByClassName("prev")[0];
a_prev.addEventListener("click", goPrevGall2);
var a_next = document.getElementsByClassName("next")[0];
a_next.addEventListener("click", goNextGall2);

var dot1 = document.getElementsByClassName("demo")[0];
dot1.addEventListener("click",makeSlide1Gal2);
var dot2 = document.getElementsByClassName("demo")[1];
dot2.addEventListener("click",makeSlide2Gal2);
var dot3 = document.getElementsByClassName("demo")[2];
dot3.addEventListener("click",makeSlide3Gal2);
var dot4 = document.getElementsByClassName("demo")[3];
dot4.addEventListener("click",makeSlide4Gal2);
var dot5 = document.getElementsByClassName("demo")[4];
dot5.addEventListener("click",makeSlide5Gal2);
var dot6 = document.getElementsByClassName("demo")[5];
dot6.addEventListener("click",makeSlide6Gal2);
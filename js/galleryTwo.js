let item2 = 1;
showGalleryTwo(item2);
function goNextGall2(){
    plusSlides(1);
}
function goPrevGall1(){
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
        item2 = 1;
    }
    if(n < 1){
        item2 = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
}
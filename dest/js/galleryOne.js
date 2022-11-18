function openPage(pageName,elemt,color){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length; i++){
       tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elemt.style.backgroundColor = color;
}
document.getElementById('galleryOne').click();

let item = 1;
charmingGallery(item);

function goToRight(){
    goToNext(1);
}
function goToLeft(){
    goToNext(-1);
}
function goToNext(next){
    item = item + next;
    charmingGallery(item);
}
function showFirst(){
    showCurrent(0);
}
function showSecond(){
    showCurrent(1);
}
function showThird(){
    showCurrent(2);
}
function showCurrent(curr){
    item = curr;
    charmingGallery(item);
}

function charmingGallery(curr){
    let index;
    let myCharmingPhotos = document.getElementsByClassName("myCharmingPhotos");
    let bottomDots = document.getElementsByClassName("bottom-dot");
    if(curr > 1) {
        item = 1;
    }
    if(curr < 1) {
        item = myCharmingPhotos.length;
    }
    for(index=0; index < myCharmingPhotos.length; index++){
        myCharmingPhotos[index].style.display = "none";
    }
    for(index=0; index < bottomDots.length; index++){
        bottomDots[index].className = bottomDots[index].className.replace(" active", "");
    }
    myCharmingPhotos[item-1].style.display = "block";
    bottomDots[index-1].className += "active";
}
var span1 = document.getElementsByClassName("bottom-dot")[0];
span1.addEventListener("click", showFirst);
var span2 = document.getElementsByClassName("bottom-dot")[1];
span2.addEventListener("click", showSecond);
var span3 = document.getElementsByClassName("bottom-dot")[2];
span3.addEventListener("click", showThird);

var a_left = document.getElementsByClassName("go-back")[0];
a_left.addEventListener("click", goToLeft);
var a_right = document.getElementsByClassName("go-next")[1];
a_right.addEventListener("click", goToRight);

/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function charmingGallery(n) {
  var i;
  var slides = document.getElementsByClassName("myCharmingPhotos");
  var dots = document.getElementsByClassName("bottom-dot");


  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/
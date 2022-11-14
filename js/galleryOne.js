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
document.getElementById("defaultOpen").click();

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
    showCurrent(1);
}
function showSecond(){
    showCurrent(2);
}
function showThird(){
    showCurrent(3);
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
}
function openPage(e,t,n){var o,a,s;for(a=document.getElementsByClassName("tabcontent"),o=0;o<a.length;o++)a[o].style.display="none";for(s=document.getElementsByClassName("tablinks"),o=0;o<s.length;o++)s[o].style.backgroundColor="";document.getElementById(e).style.display="block",t.style.backgroundColor=n}document.getElementById("galleryOne").click();let item=1;function goToRight(){goToNext(1)}function goToLeft(){goToNext(-1)}function goToNext(e){charmingGallery(item+=e)}function showFirst(){showCurrent(0)}function showSecond(){showCurrent(1)}function showThird(){showCurrent(2)}function showCurrent(e){charmingGallery(item=e)}function charmingGallery(e){let t,n=document.getElementsByClassName("myCharmingPhotos"),o=document.getElementsByClassName("bottom-dot");for(e>1&&(item=1),e<1&&(item=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active","");n[item-1].style.display="block",o[t-1].className+="active"}charmingGallery(item);var span1=document.getElementsByClassName("bottom-dot")[0];span1.addEventListener("click",showFirst);var span2=document.getElementsByClassName("bottom-dot")[1];span2.addEventListener("click",showSecond);var span3=document.getElementsByClassName("bottom-dot")[2];span3.addEventListener("click",showThird);var a_left=document.getElementsByClassName("go-back")[0];a_left.addEventListener("click",goToLeft);var a_right=document.getElementsByClassName("go-next")[1];a_right.addEventListener("click",goToRight);
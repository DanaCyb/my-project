const current=document.querySelector("#current"),imgs=document.querySelector(".imgs"),img=document.querySelector(".imgs img"),opacity=.6;function imgClick(t){img.forEach(t=>{t.style.opacity=1}),current.src=t.target.src,current.classList.add("fade-in"),setTimeout(()=>current.classList.remove("fade-in"),500),t.target.style.opacity=opacity}img[0].style.opacity=opacity,imgs.addEventListener("click",imgClick);
//const h2 = document.createElement("h2");
//h2.textContent = "About Me";
//document.querySelector("body").appendChild(h2);
//h2.style.textAlign = "center"

document.querySelector('.menu-icon').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}

function setNewImage(){
    document.querySelector('.pic').src ="images/20220810_182635.jpg";
}
function setOldImage(){
    document.querySelector('.pic').src ="images/20220810_184217.jpg";
}
//$(document).ready(function(){
    //$('.menu-icon').click(function(){
       // $('.menu-list').toggleClass('show');
 //   });
//});



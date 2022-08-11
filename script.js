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

const myForm = document.querySelector('.form');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('.msg');

myForm.addEventListener('click', onclick);

function onclick(e){
    e.preventDefault();

    if(messageInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML= 'cannot send an empty message';
        setTimeout(() => msg.remove(), 3000);
    } else{
        console.log('success');
    }
}
//$(document).ready(function(){
    //$('.menu-icon').click(function(){
       // $('.menu-list').toggleClass('show');
 //   });
//});



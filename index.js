const burgerButton = document.getElementById('burger-button')
const nav = document.getElementById('header-nav');





burgerButton.addEventListener('click',headerActive);



function headerActive(){
    nav.classList.toggle('active');
}
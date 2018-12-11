const header = document.querySelector('#header');
const body = document.querySelector('body');
let viewHeight = (window.screen.height / 4);

window.addEventListener('scroll', scrollAction);
function scrollAction(){
    if(window.scrollY > viewHeight){
        header.classList.add('header-scrolled');
    }
    else{
        header.classList.remove('header-scrolled');
    }
}
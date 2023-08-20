//Menu Button
const dropDownBtn = document.querySelector('.page');
const dropDown = document.querySelector('.pages-link');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

dropDownBtn.addEventListener('mouseover', ()=>{
    dropDown.classList.add('active');
})
dropDown.addEventListener('mouseout', ()=>{
    dropDown.classList.remove('active');
})

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('openMenu')
})

dropDownBtn.addEventListener('click', ()=>{
    dropDown.classList.toggle('appear')
})



//Scroll button to top
const backToTop = document.querySelector('.back-to-top');
const nav = document.querySelector('nav');
window.onscroll = (function(){
    if (window.scrollY > 45){
        nav.classList.add('bg')
        if (window.scrollY > 350){
            backToTop.classList.add('show')
        }
        else{
            backToTop.classList.remove('show')
        }
    }
    else{
        nav.classList.remove('bg')
    }
})



//Loader
const myFunc = ()=>{
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".wrapper").style.display = "block";
}

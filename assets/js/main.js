/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*====MENU SHOW =====*/
/*validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*=====MENU HIDDEN =====*/
/*validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //whn we click on each nav__link, we remove the show-menu 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/

const shadowscrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header. classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowscrollHeader)


/*=============== EMAIL JS ===============*/

// Add event listener for the pageshow event
window.addEventListener("pageshow", function(event) {
    var form = document.getElementById("contact-form"); // Get the form element
    form.reset(); // Reset the form
});

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

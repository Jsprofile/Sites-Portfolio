// Mobile Menu

var bx = document.querySelector('.bx')
var mobileNav = document.querySelector('.mobileNav')
var mobileLink = document.querySelectorAll('.mobileNav a')


bx.addEventListener('click', () => {
        bx.classList.toggle('activeBx')
        mobileNav.classList.toggle('activeMenu')

})

mobileLink.forEach(link => {
    link.addEventListener('click', () => {
        bx.classList.remove('activeBx')
        mobileNav.classList.remove('activeMenu')

})
})

// -----------------------------------------


// Efects on scroll 

var menuDesktop = document.querySelector('.header')
var btnScroll = document.querySelector('.scrollTop')
const target = document.querySelectorAll('[data-anime]')
const animateClass = 'animate'

window.onscroll = () => {

    // Header

    if (window.pageYOffset >= 100) {
        menuDesktop.classList.add('activeHeader')
        btnScroll.classList.add('scrollTop-active')
    } else {
        menuDesktop.classList.remove('activeHeader')
        btnScroll.classList.remove('scrollTop-active')
    }


    // Side Scrolling Animations

    const windowTop = window.pageYOffset + 550
    target.forEach((item) => {
        if (windowTop > item.offsetTop) {
            item.classList.add(animateClass)
        }
    })
}


// -----------------------------------------


// ScrollTop

btnScroll.addEventListener('click', () => {
    window.scrollTo(0, 0);
})




  
  function toggleAnswer(div) {
    const divAnswer = div.nextElementSibling
  
    divAnswer.classList.toggle('active')
  }
  
  
// Popuper

var btnPopWhite = document.querySelector('.popuperWhite')
var advantagesPopup = document.querySelector('.advantages > .popuper')
var bxP = document.querySelector('.bxP')


btnPopWhite.addEventListener('click', ()=>{
    advantagesPopup.classList.remove('fadeTopDown')
    advantagesPopup.style.display = 'block'
})

bxP.addEventListener('click', ()=>{
    advantagesPopup.classList.add('fadeTopDown')
})

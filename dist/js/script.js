const $burgerIcon = document.querySelector('.fa-bars')
const $nav = document.querySelector('.nav')

$burgerIcon.addEventListener('click', () => {
  $nav.classList.toggle('toggle-button')
})

// scroll top
const $scrollUp = document.querySelector('.scroll-up') 
$scrollUp.addEventListener('click', slowScroll)

function slowScroll() {
  setTimeout(() => {window.scrollTo({ top: 0, behavior: 'smooth' })}, 500)
}


// Scrolling Effect
window.addEventListener('scroll', ()=> {
  if (window.pageYOffset) {
    $nav.classList.add('white-background')
  }
  else {
    $nav.classList.remove('white-background')
  }
})




// Initialize Owl Carousel
const responsive = {
  0 : {
    items: 1
  },
  320 : {
    items: 1
  },
  620 : {
    items: 2
  },
  767 : {
    items: 3
  }
}

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  nav: true,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  responsive: responsive
});



// AOS Instance
AOS.init()
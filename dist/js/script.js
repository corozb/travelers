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




// Initialize Owl Carousel
// const responsive

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  nav: true,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  responsive: responsive
});
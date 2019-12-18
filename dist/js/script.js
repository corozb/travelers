// const $burger = document.querySelector('.nav__burger')
const $burgerIcon = document.querySelector('.fa-bars')
const $nav = document.querySelector('.nav')

$burgerIcon.addEventListener('click', () => {
  $nav.classList.toggle('toggle-button')
})


// Initialize Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
  });
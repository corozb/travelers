// const $burger = document.querySelector('.nav__burger')
const $burgerIcon = document.querySelector('.fa-bars')
const $nav = document.querySelector('.nav')

$burgerIcon.addEventListener('click', () => {
  $nav.classList.toggle('toggle-button')
})
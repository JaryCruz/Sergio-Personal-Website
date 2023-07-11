const btnMenu = document.querySelector('[data-btn-menu]')
const mobileMenu = document.querySelector('[data-mobile-menu]')

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('open')
  mobileMenu.classList.toggle('open')
})
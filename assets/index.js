//Smooth scroll
const links = document.querySelectorAll('a[href^="#"]')
// Loop through each link and add a click event listener
links.forEach((link) => {
  link.addEventListener('click', function (el) {
    // Prevent default link behavior
    el.preventDefault()
    // Get the hash value of the clicked link
    let hash = this.hash
    //Находим целевой элемент
    let target = document.querySelector(hash)
    //Вычисляем расстояние для прокрутки
    let distance = target.offsetTop
    // Smooth scroll animation
    window.scrollTo({
      top: distance,   //подумай как это применить в MOGO!
      behavior: 'smooth',
    })
  })
})

//Collapsed navbar
function navPlugin(activeLink = 0) {
  const navBtn = document.querySelector('.nav-toggle')
  const navBar = document.querySelector('.nav')
  const links = document.querySelectorAll('.nav__link')

  links[activeLink].classList.add('active')

  navBtn.addEventListener('touchstart', toggleMenu)
  for (const link of links) {
    link.addEventListener('touchstart', () => {
      clearActiveClasses()
      link.classList.add('active')
    })
  }

  function toggleMenu() {
    navBtn.classList.toggle('active')
    navBar.classList.toggle('active')
    links.classList.toggle('active')
  }

  function clearActiveClasses() {
    navBtn.classList.remove('active')
    navBar.classList.remove('active')
    links.forEach((link) => {
      link.classList.remove('active')
    })
  }
}

navPlugin()

//Switch languages
const russianBtn = document.getElementById('russianBtn')
const englishBtn = document.getElementById('englishBtn')
let currentLang = 'English'

englishBtn.addEventListener('click', () => {
  currentLang = 'English'
  englishBtn.style.color = '#000'
  russianBtn.style.color = '#828282'
})

russianBtn.addEventListener('click', () => {
  currentLang = 'Russian'
  russianBtn.style.color = '#000'
  englishBtn.style.color = '#828282'
})

englishBtn.click()

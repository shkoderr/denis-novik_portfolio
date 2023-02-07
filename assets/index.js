const toggleButton = document.querySelector('.nav-toggle');
const nav = getElementById('#nav')
const link = getElementById('#nav__link')

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  nav.classList.toggle('active');
  link.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if(!toggleButton.contains(event.target)) {
    toggleButton.classList.remove('active')
  }
})

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
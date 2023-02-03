const toggleButton = document.querySelector('.nav-toggle');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if(!toggleButton.contains(event.target)) {
    toggleButton.classList.remove('active')
  }
})

const russianBtn = document.getElementById('russianBtn')
const englishBtn = document.getElementById('englishBtn')
const textEnglish = document.getElementById('#textEnglish')
const textRussian = document.getElementById('#textRussian')
let currentLang = 'English'


englishBtn.addEventListener('click', () => {
  currentLang = 'English'
  englishBtn.style.color = '#000'
  russianBtn.style.color = '#828282'
  textEnglish.style.display = "flex"
  textRussian.style.display = "none"
})

russianBtn.addEventListener('click', () => {
  currentLang = 'Russian'
  russianBtn.style.color = '#000'
  englishBtn.style.color = '#828282'
  textRussian.style.display = "flex"
  textEnglish.style.display = "none"
})

englishBtn.click()
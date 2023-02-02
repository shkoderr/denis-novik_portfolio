const toggleButton = document.querySelector('.nav-toggle');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if(!toggleButton.contains(event.target)) {
    toggleButton.classList.remove('active')
  }
})
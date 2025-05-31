const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links-div');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

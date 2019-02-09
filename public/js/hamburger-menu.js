const hambMenuIcon = document.querySelector('.hamburger-menu');
const modalNav = document.querySelector('.modal-nav');

hambMenuIcon.addEventListener('click', () => {
  if (hambMenuIcon.classList.contains('close')) {
    hambMenuIcon.classList.remove('close');
    modalNav.style.opacity = 0;
  } else {
    hambMenuIcon.classList.add('close');
    modalNav.style.opacity = 0.99;
  }
});
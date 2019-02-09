const hambMenuIcon = document.querySelector('.hamburger-menu');
const modalNav = document.querySelector('.modal-nav');

hambMenuIcon.addEventListener('click', () => {
  if (hambMenuIcon.classList.contains('close')) {
    hambMenuIcon.classList.remove('close');
    modalNav.style.right = '9999px';
    modalNav.style.opacity = 0;
  } else {
    hambMenuIcon.classList.add('close');
    modalNav.style.right = 0;
    modalNav.style.opacity = 0.98;
  }
});
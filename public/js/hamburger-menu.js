const hambMenuIcon = document.querySelector('.hamburger-menu');
const modalNav = document.querySelector('.modal-nav');
const hamburgerAnimationTime = 300;

hambMenuIcon.addEventListener('click', () => {

  if (hambMenuIcon.classList.contains('close')) {

    hambMenuIcon.classList.remove('close');
    modalNav.style.opacity = 0;
    setTimeout(() => modalNav.style.right = "9999px", hamburgerAnimationTime);

  } else {

    hambMenuIcon.classList.add('close');
    modalNav.style.right = 0;
    modalNav.style.opacity = 0.98;
    
  }
});
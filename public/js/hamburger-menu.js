const hambMenuIcon = document.querySelector('.hamburger-menu');
const modalNav = document.querySelector('.modal-nav');
const navItems = modalNav.querySelectorAll('.modal-nav__item');
const hamburgerAnimationTime = 300;

// add click listener to hamburger icon
hambMenuIcon.addEventListener('click', () => {

  if (hambMenuIcon.classList.contains('close')) {

    closeModalNav();

  } else {

    openModalNav();
    
  }
});

// close modal nav when user select navigation item
Array.from(navItems).forEach(item => {
  item.addEventListener('click', () => {
    closeModalNav();
  });
});

// close modal nav when user clicks escape key
document.body.addEventListener('keydown', e => {
  if (e.keyCode == 27) { 
    closeModalNav();
  } 
});


// functions to open and close modal navigation
function openModalNav() {
  hambMenuIcon.classList.add('close');
  modalNav.style.right = 0;
  modalNav.style.opacity = 0.98;
}

function closeModalNav() {
  hambMenuIcon.classList.remove('close');
  modalNav.style.opacity = 0;
  setTimeout(() => modalNav.style.right = "9999px", hamburgerAnimationTime);
}
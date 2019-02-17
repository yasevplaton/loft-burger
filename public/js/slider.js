const leftArrow = document.querySelector('.left-arrow__btn');
const rightArrow = document.querySelector('.right-arrow__btn');
const burgersList = document.querySelector('.burgers__list');
const burgersItem = burgersList.firstElementChild;

const minRight = 0;
const itemsCount = burgersList.children.length;
let step = parseInt(getComputedStyle(burgersItem).width);
let maxRight = step * (itemsCount - 1);

let currentRight = 0;

window.onresize = () => {
  step = parseInt(getComputedStyle(burgersItem).width);
  maxRight = step * (itemsCount - 1);
  currentRight = 0;
  burgersList.style.right = `${currentRight}px`;
};


rightArrow.addEventListener('click', () => {
  if (currentRight < maxRight) {
    currentRight += step;
  } else {
    currentRight = 0;
  }

  burgersList.style.right = `${currentRight}px`;
});

leftArrow.addEventListener('click', () => {
  if (currentRight > minRight) {
    currentRight -= step;
  } else {
    currentRight = maxRight;
  }

  burgersList.style.right = `${currentRight}px`;
});
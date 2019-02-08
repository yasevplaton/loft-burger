const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const item = items.querySelector('.item');

const itemWidth = item.getBoundingClientRect().width;
const itemsAmount = items.querySelectorAll('.item').length;
const itemsInView = 3;
const maxRight = itemWidth * (itemsAmount - itemsInView);
const minRight = 0;
let currRight = 0;

right.addEventListener("click", function() {
  if (currRight < maxRight) {
    currRight += itemWidth;
    items.style.right = `${currRight}px`;
  } else {
    currRight = minRight;
    items.style.right = `${currRight}px`;
  }
});

left.addEventListener("click", function() {
  if (currRight > minRight) {
    currRight -= itemWidth;
    items.style.right = `${currRight}px`;
  } else {
    currRight = maxRight;
    items.style.right = `${currRight}px`;
  }
});
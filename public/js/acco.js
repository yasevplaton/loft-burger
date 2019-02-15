// team acco

// initialize constants
const teamItems = document.querySelectorAll('.team__item');
const teamBtns = document.querySelectorAll('.team__person-name');

// add click listener to buttons
Array.from(teamBtns).forEach(btn => {
  btn.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains("team__item--active")) {
      closeTeamContent();
    } else {
      closeTeamContent();
      openTeamContent(e);
    }
  });
});

// function to open team content
function openTeamContent(e) {
  const item = e.target.parentElement;
  item.classList.add("team__item--active");

  const contentWrapper = e.target.nextElementSibling;
  const content = contentWrapper.querySelector('.team__person-content');
  const contentHeight = content.getBoundingClientRect().height;

  contentWrapper.style.height = `${contentHeight}px`;
}

// function to close team content
function closeTeamContent() {
  Array.from(teamItems).forEach(item => {
    item.classList.remove("team__item--active");
    const contentWrapper = item.querySelector(".team__person-content-wrapper");
    contentWrapper.style.height = 0;
  });
}


// menu acco

const menuItems = document.querySelectorAll('.menu__item');
const menuCols = document.querySelectorAll('.menu__col');


Array.from(menuCols).forEach(col => {
  col.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains("menu__item--active")) {
      closeMenuContent();
    } else {
      closeMenuContent();
      openMenuContent(e);
    }
  });
});

function openMenuContent(e) {
  const item = e.target.parentElement;

  item.classList.add("menu__item--active");

  const contentWrapper = e.target.nextElementSibling;
  const content = contentWrapper.firstElementChild;
  const contentWidth = content.getBoundingClientRect().width;
  
  contentWrapper.style.width = `${contentWidth}px`;
}

function closeMenuContent() {
  Array.from(menuItems).forEach(item => {
    item.classList.remove("menu__item--active");
    const contentWrapper = item.querySelector(".menu__desc-wrapper");
    contentWrapper.style.width = 0;
  });
}
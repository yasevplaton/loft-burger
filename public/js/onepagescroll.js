$(document).ready(function () {

  // store pointer items, nav items and sections
  const pointerItems = $(".pointer__item");
  const navItems = $(".nav__item");
  const sections = $(".section");
  const orderLinks = $('.hero__btn');
  const arrowLink = $('.arrow');
  const jqModalNavItems = $('.modal-nav__item');
  const mainContent = $('.main-content');

  const minTop = (sections.length - 1) * 100 * (-1);
  const maxTop = 0;
  let curTop = maxTop;

  // add click listener on pointer items
  pointerItems.on('click', '.pointer__link', function (e) {
    e.preventDefault();

    const reqSectionId = $(this).attr('href');
    moveTo(reqSectionId);

  });

  // add click listener on nav items
  navItems.on('click', '.nav__link', function (e) {
    e.preventDefault();

    const reqSectionId = $(this).attr('href');
    moveTo(reqSectionId);

  });

  // add click listener on modal nav items
  jqModalNavItems.on('click', '.modal-nav__link', function (e) {
    e.preventDefault();

    const reqSectionId = $(this).attr('href');
    moveTo(reqSectionId);

  });

   // add click listener on order links
  orderLinks.on('click', function(e) {
    e.preventDefault();

    const reqSectionId = $(this).attr('href');
    moveTo(reqSectionId);
  });

  // add click listener on arrow link in hero section
  arrowLink.on('click', function(e) {
    e.preventDefault();

    const reqSectionId = $(this).attr('href');
    moveTo(reqSectionId);
  });


  // add mousewheel listener to sections
  let wheelProcessing = false;
  sections.on('mousewheel', function (e) {

    e.preventDefault();

    if (!wheelProcessing) {

      wheelProcessing = true;

      let activeSection;

      const delta = e.originalEvent.deltaY;

      if (delta > 0) {

        if (curTop > minTop) {
          activeSection = $(e.currentTarget).next();

          moveTo(activeSection);
        }

      } else {

        if (curTop < maxTop) {

          activeSection = $(e.currentTarget).prev();

          moveTo(activeSection);
        }

      }

      setTimeout(() => wheelProcessing = false, 1500);


    }

  });

  function moveTo(sectionID) {
    const reqIndex = sections.filter(sectionID).index();

    pointerItems.removeClass('active');
    pointerItems.filter(function (index) {
      return index === reqIndex;
    }).addClass('active');

    const reqTop = reqIndex * 100 * (-1);
    curTop = reqTop;

    mainContent.css('top', `${reqTop}vh`);
  }

});


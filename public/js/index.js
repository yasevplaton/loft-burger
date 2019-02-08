onLoad = () => {
  const revContentArr = document.querySelectorAll('.reviews__content');

  // add resize listener on window
  window.addEventListener('resize', e => {

    // check if review button for mobiles exists
    const isReviewButton = document.querySelector('.reviews__btn-mobile');

    // if window width is less than or equal to 480px and reviews buttons don't exist yet, add them to DOM
    if (window.innerWidth <= 480) {

      if (!isReviewButton) {
  
        for (let item of revContentArr) {
          item.insertAdjacentHTML('beforeend', '<button type="button" class="btn reviews__btn-mobile">Читать отзыв</button>');
        }
      }
    
    // if window width is more than 480px and reviews buttons exist, remove them from DOM
    } else {

      if (isReviewButton) {

        for (let item of revContentArr) {
          const reviewButton = item.querySelector('.reviews__btn-mobile');
          item.removeChild(reviewButton);
        }

      }
    }
  });
}
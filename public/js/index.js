onload = () => {
  if ( window.innerWidth <= 480 ) {

    let revContentArr = document.querySelectorAll('.reviews__content');

    for (let item of revContentArr) {
      item.insertAdjacentHTML('beforeend', '<button type="button" class="btn reviews__btn-mobile">Читать отзыв</button>');
    }
    
  }
}
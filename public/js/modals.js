const reviewsList = document.querySelector(".reviews__list");
const template = document.querySelector("#modal-template").innerHTML;
const modal = createModal();

reviewsList.addEventListener("click", e => {

  if (e.target.classList.contains("reviews__btn") || e.target.classList.contains("reviews__btn-mobile")) {

    const reviewBtn = e.target;
    const contentWrapper = reviewBtn.parentNode;

    const title = contentWrapper.querySelector('.reviews__name').innerHTML;
    const text = contentWrapper.querySelector('.reviews__text').innerHTML;

    modal.setContent(title, text);
    modal.open();
  }
});

function createModal() {
  const container = document.createElement("div");
  container.className = "popup";
  container.innerHTML = template;

  const contentTitle = container.querySelector(".popup__content-title");
  const contentText = container.querySelector(".popup__content-text");

  const closeBtn = container.querySelector(".popup__close");

  closeBtn.addEventListener("click", () => {
    container.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    }, 300);
  });

  const overlay = container.querySelector(".overlay");

  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      closeBtn.click();
    }
  });

  return {
    open(sectionName) {

      if (sectionName === 'order') {
        closeBtn.classList.remove('popup__close');
        closeBtn.classList.add('btn', 'btn--popup-close');
        closeBtn.textContent = 'Закрыть';
        contentText.classList.add('popup__content-text--order');
      } else {
        closeBtn.classList.remove('btn', 'btn--popup-close');
        closeBtn.classList.add('popup__close');
        contentText.classList.remove('popup__content-text--order');
        closeBtn.textContent = '';
      }

      document.body.appendChild(container);
      document.body.style.overflow = "hidden";
      setTimeout(() => container.style.opacity = 1, 50);
    },
    close() {
      closeBtn.click();
      document.body.style.overflow = "auto";
    },
    setContent(title, text) {
      contentTitle.innerHTML = title;
      contentText.innerHTML = text;
    }
  };
}
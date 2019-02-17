const button = document.querySelector("#modal");
const template = document.querySelector("#modal-template").innerHTML;
const modal = createModal();

button.addEventListener("click", e => {
  modal.setContent("Hello WOrld");
  modal.open();

  setTimeout(() => {
    modal.close();
  }, 3000);
});


function createModal() {
  const container = document.createElement("div");
  container.className = "popup";
  container.innerHTML = template;

  const contentBlock = container.querySelector(".popup__content");

  const closeBtn = container.querySelector(".popup__close");
  closeBtn.addEventListener("click", e => {
    document.body.removeChild(container);
  });

  const overlay = container.querySelector(".overlay");

  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      closeBtn.click();
    }
  });

  return {
    open() {
      document.body.appendChild(container);
    },
    close() {
      closeBtn.click();
    },
    setContent(content) {
      contentBlock.innerHTML = content;
    }
  };
}
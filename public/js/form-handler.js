const form = document.querySelector('#form');  
const url = 'https://webdev-api.loftschool.com/sendmail';
const to = 'test@yandex.ru';

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validateForm(form)) {
    const formData = new FormData();
    formData.append('name', form.elements.name.value);
    formData.append('phone', form.elements.phone.value);
    formData.append('comment', form.elements.comment.value);
    formData.append('to', to);

    const promise = fetch(url, { method: "POST", body: formData });

    promise
      .then(response => response.json())
      .then(response => {
        modal.setContent('', response.message);
        modal.open('order');
      })

  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }
  
  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;

}

function validateField(field) {
  field.nextSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
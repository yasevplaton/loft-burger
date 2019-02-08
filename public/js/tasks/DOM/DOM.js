// 1
const elem = document.createElement('div');
elem.textContent = 'Этот элемент создан при помощи DOM API';

document.body.appendChild(elem);

// 2
const innerElem = document.createElement('div');
innerElem.classList.add('inner');

innerElem.textContent = 'Этот элемент тоже создан при помощи DOM API';

elem.appendChild(innerElem);

// 3
elem.style.color = 'red';

// 4
innerElem.addEventListener('click', e => {
  console.log('Этот текст говорит о том, что я все сделал правильно');
});

// 5
const link = document.createElement('a');
link.href = 'https://loftschool.com';
link.textContent = 'Ссылка';
elem.appendChild(link);

link.addEventListener('click', e => {
  e.preventDefault();
  const href = e.target.href;
  console.log(`Я кликнул на ссылку ${href}`);
});

// 6
const input = document.createElement('input');
const btn = document.createElement('button');

input.type = 'text';
input.name = 'textInput';
btn.textContent = 'Кликни на меня';
elem.appendChild(input);
elem.appendChild(btn);

let inputValue;
input.addEventListener('change', e => {
  inputValue = e.target.value;
});

btn.addEventListener('click', e => {
  console.log(inputValue);
});

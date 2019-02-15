// 1
function filter(input, than) {

  const moreThan = [];

  input.forEach(item => {
    if (item > than) {
      moreThan.push(item);
    }
  });

  return moreThan;

}

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

console.log(result);

result = filter(array, 20);
console.log(result);


// 2
function filter(input, than) {

  const moreThan = [];

  if (input.length === 0) {
    throw new Error('Массив должен содержать хотя бы один элемент');
  }

  input.forEach(item => {

    if (typeof item !== 'number') {

      throw new Error('Массив должен содержать только числа');

    } else if (item < 0) {

      throw new Error('Массив должен содержать только положительные числа');

    }

    if (item > than) {
      moreThan.push(item);
    }

  });

  return moreThan;
}

var array = [12, 100, 34, 65, 10];

try {
  var result = filter(array, 60);
  console.log(result);
} catch(e) {
  console.log(e);
};

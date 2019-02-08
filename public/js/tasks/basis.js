// ТИПЫ ДАННЫХ И ПЕРЕМЕННЫЕ

var name = "Платон";
console.log(name);

var friendName = "Никита";
console.log(friendName);

// УСЛОВНЫЙ ОПЕРАТОР IF

if (false) { 
  console.log("Утверждение верно");
} else {
  console.log("Утверждение не верно");
}

// ЦИКЛИЧЕСКИЙ ОПЕРАТОР FOR

for (let i = 0; i < 10; i++) {
  console.log(i);
}


// ФУНКЦИИ

function sum(p1, p2, p3) {
  const result = p1 + p2 + p3;

  return result;
}

const result = sum(190, 20, 30);
console.log(result);


// МАССИВЫ И ОБЪЕКТЫ

// 1
const arr = ["привет", "loftschool"];
arr.push("я изучаю", "javascript");

console.log(arr.length);

for (let item of arr) {
  console.log(item);
}

// 2

const randArr = [];

for (let i = 0; i < 5; i++) {
  randArr.push(Math.floor((Math.random() * 10) + 1));
  randArr.push(Math.floor((Math.random() * 1000) + 100));
}

console.log(randArr);

for (let i of randArr) {
  if (i > 100) {
    console.log(i);
  }
}


// 3

const obj = {
  name: "Platon",
  lastName: "Yasev",
  age: 24
};

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
      console.log(key + " -> " + obj[key]);
  }
}

obj.position = "junior frontend developer";
console.log(`position -> ${obj.position}`);

// 4

function hello(human) {
  return `Привет, меня зовут ${human.name} ${human.lastName} и мне ${human.age} года!`;
}

const phrase = hello(obj);
console.log(phrase);
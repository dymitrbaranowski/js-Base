//Логічні оператори
//false, 0, NaN, null,undefined,"", false = {false};

// const age = 20;
// console.log(age > 10 && age < 30);

// const age = 5;
// console.log(age < 10 || age > 30);

// Розгалуження
// const arr = [1, 23, 44, 55, 7];

// arr.splice(3, 3);
// console.log(arr);
// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(getRandomInt(3));
// // Expected output: 0, 1 or 2

// console.log(getRandomInt(1));
// // Expected output: 0

// console.log(Math.random());
// // Expected output: a number from 0 to <1
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
// }
// console.log(getRandomIntInclusive(0, 100));
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // включно
// }

// function randomAsteroidPoint() {
//   let asteroidLocation = {};

//   asteroidLocation.x = getRandomIntInclusive(0, 100);
//   asteroidLocation.y = getRandomIntInclusive(0, 100);
//   asteroidLocation.z = getRandomIntInclusive(0, 100);

//   return asteroidLocation;
// }

// function foundDistance(x, y, z) {
//   const asteroidLocation = randomAsteroidPoint();
//   const zondLocation = randomAsteroidPoint();
//   for (const key in asteroidLocation) {
//     const distance = asteroidLocation[key];
//     console.log(`Distance of ${key} is ${distance}`);
//   }

//   let distance = { ...asteroidLocation, ...zondLocation };

//   return distance;
// }

// function findAsteroidLocation() {
//   // Implement this function

//   let result = {};
//   return foundDistance(0, 0, 0);

//   return result;
// }

// console.log(findAsteroidLocation());

// module.exports = {
//   findAsteroidLocation,
// };

// function createRandomArrey(len) {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(Math.floor(Math.random() * 1000));
//   }
//   console.log("random array is: ", arr);
//   return arr;
// }

// //0(n^2)

// function bubbleSort(arr = []) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       const temp = arr[j];
//       if (arr[j] > arr[j + 1]) {
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log("sorted arr", bubbleSort(createRandomArrey(10)));

// const animal = {
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// };
// console.log(animal);

// class Animal {
//   static type = "ANIMAL";
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("I`m am Animal!");
//   }
// }

// const animal = new Animal({
//   name: "Animal",
//   age: 5,
//   hasTail: true,
// });
// console.log(animal);

// class Cat extends Animal {
//   static type = "CAT";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("I`m cat");
//   }

//   get ageInfo() {
//     return this.age * 7;
//   }

//   set ageInfo(newAge) {
//     this.age = newAge;
//   }
// }
// const cat = new Cat({
//   name: "Cat",
//   age: 7,
//   hasTail: true,
//   color: "black",
// });

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide() {
//     this.$el.style.display = "none";
//   }

//   show() {
//     this.$el.style.display = "block";
//   }
// }

// class Box extends Component {
//   constructor(options) {
//     super(options.selector);

//     this.$el.style.width = this.$el.style.height = options.size + "px";
//     this.$el.style.background = options.color;
//   }
// }

// const box1 = new Box({
//   selector: "#box1",
//   size: 100,
//   color: "red",
// });

// const box2 = new Box({
//   selector: "#box2",
//   size: 120,
//   color: "blue",
// });

// class Circle extends Box {
//   constructor(options) {
//     super(options);

//     this.$el.style.borderRadius = "50%";
//   }
// }

// const c = new Circle({
//   selector: "#circle",
//   size: 90,
//   color: "green",
// });

//Array sort surprise

//https://www.youtube.com/watch?v=NJZp4rU-kqw

const unsorted = [3, 1, 4, 2];

const ascending = [...unsorted].sort((a, b) => a - b).map((d) => d * 10);
const descending = [...ascending].sort((a, b) => b - a).map((d) => d * 10);

console.log("unsorted", unsorted);
console.log("ascending", ascending);
console.log("descending", descending);

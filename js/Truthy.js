//Логічні оператори
//false, 0, NaN, null,undefined,"", false = {false};

// const age = 20;
// console.log(age > 10 && age < 30);

// const age = 5;
// console.log(age < 10 || age > 30);

// Розгалуження
// const arr = [1, 23, 44, 55, 7];

// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Vladilen",
//   age: 25,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info: `);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 23,
// };

// person.logInfo.bind(lena, "Frontend", "8-999-1223-23")();
// person.logInfo.call(lena, "Frontend", "8-999-1223-23");
// person.logInfo.apply(lena, ["Frontend", "8-999-1223-23"]);

// /// ============

// const array = [1, 2, 3, 4, 5];

// // function multBy(arr, n) {
// //   return arr.map(function (i) {
// //     return i * n;
// //   });
// // }

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(20));

//call,apply, breakInside:

// function printName(text, text2) {
//   console.log(text + this.firstName + text2);
//   // console.log(this.firstName);
// }

// const user = {
//   firstName: "Vitaly",
// };

// // printName.call(user, "Привет, ", " как дела? ");
// // printName.apply(user, ["Привет, ", " как дела? "]);
// let foo = printName.bind(user, "Привет, ", " как дела? ");

// foo();
//Сложный JavaScript простым языком
//Владилен Минин | Result University
//https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT
// const person = new Object({
//   name: "Maxim",
//   age: 25,
//   greet: function () {
//     console.log("Greet!");
//   },
// });

// Object.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const lena = Object.create(person);

// lena.name = "Elena";

// const str = new String("I am string!");
//2.Context

// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Vladilen",
//   age: 25,
//   sayHello: hello,
//   sayHellowWindow: hello.bind(window),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`job is ${job}`);
//     console.log(`phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 23,
// };

// person.logInfo.bind(lena, "Frontend", "8-999-333-45")();
// person.logInfo.call(lena, "Frontend", "8-999-333-45");
// person.logInfo.apply(lena, ["Frontend", "8-999-333-45"]);

// //=======

// const array = [1, 2, 3, 4, 5];

// // function multBy(arr, n) {
// //   return arr.map(function (i) {
// //     return i + n;
// //   });
// // }

// Array.prototype.multBy = function (n) {
//   return this.map(function (i) {
//     return i * n;
//   });
// };

// console.log(array.multBy(20));

//Conclusions

// function createCalcFunvtion(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunvtion(42);

// console.log(calc);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));
// console.log(ruUrl("yandex"));
// console.log(ruUrl("vk"));

// console.log(comUrl("vkontakte"));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Михаил", age: 22, job: "Frontend" };
// const person2 = { name: "Елена", age: 19, job: "SMM" };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

//Event Loop
// console.log("Start");

// console.log("Start 2");

// function timeout2sec() {
//   console.log("timeout2sec");
// }

// window.setTimeout(function () {
//   console.log("Inside timeout, after 1500  ms");
// }, 5000);

// setTimeout(timeout2sec, 1500);

// console.log("End");

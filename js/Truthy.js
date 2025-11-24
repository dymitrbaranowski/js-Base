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

// console.log("End");//
// Pomazkov JS
//https://www.youtube.com/watch?v=nGVYdna4kq4

//Functions on JS in practise

// function createHTMLElement(tag = "button", text = "send", id) {
//   const element = document.createElement(tag);

//   if (id) {
//     element.id = id;
//   }
//   element.innerText = text;

//   return element;
// }
// logArgsToConsole(1, 2);
// function logArgsToConsole() {
//   if (!arguments.length) {
//     return;
//   }
//   for (const argument of arguments) {
//     console.log(argument);
//   }
//   console.log("That`s will not be more arguments");
// }

// //arow functions

// const sayBye = () => {
//   console.log(arguments);
// };
// const value = sayBye(1, 3);
// console.log(value);

// const brokenLinks = ["vk", "youtube", "facebook"];

// const fixLinksArray = (linksArray) => {
//   const correctLinks = [];
//   linksArray.forEach((brokenLink) =>
//     correctLinks.push("https://" + brokenLink + ".com")
//   );

//   return correctLinks;
// };

// console.log(fixLinksArray(brokenLinks));

//this
//https://www.youtube.com/watch?v=aFxQvCqrUC0

// exports.default = {
//   title: "phone",
// };
// console.log(this);
// "use strict";
// function muFunction() {
//   console.log(this);
// }
// muFunction();

// const item = {
//   title: "phone",
//   fullPrice: 1000,
//   calculateOrice(discountPercent = 0) {
//     console.log(this.fullPrice - (discountPercent / 100) * this.fullPrice);
//   },
// };
// item.calculateOrice();

// function calcDiscount(age) {
//   if (age > 65) {
//     console.log(this.price / 2);
//   } else console.log(this.price);
// }
// const item = { title: "phone", price: 1000 };
// const calcDiscountForEldery = calcDiscount.bind(item, 70);
// calcDiscountForEldery();

// function muFunction() {
//   console.log(this);
// }
// new muFunction();

//Conclusions Pomazkov JS
//https://www.youtube.com/watch?v=mI6Jcfsgma4&list=PL4SEpuQTPOCun74XsepgHm62VxBJJmYqM
// let x = 1;

// const logToConsole = function () {
//   console.log(x);
// };

// x = 2;

// logToConsole();
// x = 3;

// function makeCounter(count) {
//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter(0);
// let counter2 = makeCounter(0);

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2());

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }

//   function log() {
//     let message = `Count is ${count}`;

//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();
//var, let, const

//

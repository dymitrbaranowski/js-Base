console.log("JavaScript is awesome".length);
console.log("JavaScript is awesome".toUpperCase());

//Змінні та типи
// Оголошення змінних
const yearOfBirth = 2006;
console.log(yearOfBirth);

let age;
console.log(age);
age = 14;
console.log(age);

//Константи і Константи
const COLOR_TEAL = "#009688";

const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
//Звернення до змінної
//Невизначена undefined.

let username;
console.log(username);

//Неоголошена(undeclared or defined)
age = 15;
console.log(age);

//Примітивні типи
Number(20);
String("Mango");
Boolean(true, false);
const isLogedin = true;
const canMerge = false;
const hasChildren = true;
const isModalOpen = false;
//null(null);
//undefined(undefined);

//Оператор typeof

// console.log(typeof username);

// let inputValue = null;
// console.log(typeof inputValue);

// const quantity = 17;
// console.log(typeof quantity);
// // const message = "JavaScript is awesome!";
// // console.log(typeof message);
// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen);

//Виведення даних
// const message = "javaScript is awesome!";
// console.log("Username is ", username);

// const isComing = confirm("Please confirm hotel reservation");

// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);
// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

//Основні оператори
//Числа
//Приведення до Числа
//Number(val);

const valueA = "5";
console.log(Number(valueA));
console.log(typeof Number(valueA)); // "number"

//Number.parseInt() & NumberFloat()
console.log(Number.parseInt("5px"));
console.log(Number.parseInt("12rereyt74"));
console.log(Number.parseFloat("12.46qwe79")); // 12.46
//Перевірка на число
const validNumber = Number("51");
console.log(Number.isNaN(validNumber));

console.log(0.17 + 0.24);
console.log((0.17 * 100 + 0.24 * 100) / 100);

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

//КласMath

console.log(Math.floor(1.7));
console.log(Math.ceil(1.7));
console.log(Math.round(1.2));
console.log(Math.max(20, 10, 50, 40));
console.log(Math.min(20, 10, 50, 40));
console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// Рядки
//Конкатенація рядків
const message = "Mango " + "is " + "happy";
console.log(message);

//Шаблонні Рядки
const guestName = "Mango";
const roomNumber = 207;
const greeting = `Wellcome ${guestName}, your room number is ${roomNumber}`;
console.log(greeting);

//Властивості та методи рядків
console.log(message.length);
//methods toLowerCase() & toUpperCase()
console.log(message.toLowerCase());
console.log(message.toUpperCase());
//indexOf()
console.log(message.indexOf("is")); // 8
console.log(message.indexOf("hello")); // -1
//includes()
const productName = "Ремонтний дроїд";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроїд")); // true
console.log(productName.includes("Дроїд")); // false
console.log(productName.includes("Ремонтний")); // true
console.log(productName.includes("ремонтний")); // false
//endsWith()
const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js"));
//replace() & replaceAll()
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"
const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); //

//slice()
const productName1 = "Repair droid";
console.log(productName1.slice(0, 4)); // "Repa"
console.log(productName1.slice(3, 9)); // "air dr"
console.log(productName1.slice(0, productName1.length)); // "Repair droid"
console.log(productName1.slice(7, productName1.length)); // "droid"

//Логічні оператори

const age1 = 20;

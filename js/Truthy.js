//Логічні оператори
//false, 0, NaN, null,undefined,"", false = {false};

// const age = 20;
// console.log(age > 10 && age < 30);

// const age = 5;
// console.log(age < 10 || age > 30);

// Розгалуження
// const arr = [1, 23, 44, 55, 7];

function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Vladilen",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info: `);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

// person.logInfo.bind(lena, "Frontend", "8-999-1223-23")();
// person.logInfo.call(lena, "Frontend", "8-999-1223-23");
person.logInfo.apply(lena, ["Frontend", "8-999-1223-23"]);

/// ============

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(20));

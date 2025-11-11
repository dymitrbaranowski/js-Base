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

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

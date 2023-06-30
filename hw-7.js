// Задание 1
// let str = 'string';
// str = str.toUpperCase();
// console.log(str);
// --------------------------
// Задание 2
// const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог']; // ['кошка', 'комар']
// const search = 'ко'

// searchStart.forEach((el) => {
//   if (el.toLowerCase().includes(search.toLowerCase())) {
//     console.log(el);
//   }
// });
// -------------------------------------------
// Задание 3
// let number = 32.58884;
// let minNumber = Math.floor(number);
// let maxNumber = Math.ceil(number);
// let roundNumber = Math.round(number);
// console.log(minNumber, maxNumber, roundNumber);
// -----------------------------------------
// Задание 4
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));
// ---------------------------------------
// Задание 5
// function getRandomInt() {
//     return Math.round(Math.random() * 10);
//  }
//  console.log(getRandomInt());
// -------------------------------------------
// Задание 6 - 
// function getRandomArrNumbers(n) {

//     let arrWithNum = [];
    
//     for(i = 0; i < n/2.5; i++) {
//        arrWithNum.push(Math.floor(Math.random(n) * 10));
//     }
    
//     return arrWithNum;
// }

// console.log(getRandomArrNumbers(7));
// ------------------------------------
// Задание 7
// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue- minValue)) + minValue;
//   }
//   console.log(getRandomInt(1, 10));
// ----------------------------------
// Задание 8
// let currentDate = new Date();
// console.log(currentDate);
// ------------------------------
// let myDate = new Date(1688023937848);
// console.log(myDate); 
// --------------------------------
// let myDate = new Date(2023, 5, 29, 15, 41, 20, 10); 
// console.log(myDate); 
// -----------------------------------
// Задание 9
// let currentDate = new Date(); 
// currentDate.setDate(103);
// console.log(currentDate);
// -------------------------------------
// Задание 10
// для начала создадим массив, в который занесем все дни недели на русском
// помним, что отсчет в JS начинается с воскресенья — 0
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// // создадим массив, где будем хранить названия месяцев на русском
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
//   "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// function getDateRu() {

//   let myDate = new Date(); 

//   return fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
//     " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
// }
// console.log(getDateRu()); 
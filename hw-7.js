// Задание 1
// let str = 'string';
// str = str.toUpperCase();
// console.log(str);
// --------------------------
// Задание 2
// function getArrString(array, str) {
// 	let arr = [];
// 	for(el of array) {
// 		let element = el.toLowerCase().startsWith(str.toLowerCase());	
// 		element ? arr.push(el.toLowerCase()) : el;
// 	}
// 	return arr;
// }

// console.log(getArrString(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
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
    
//     for(i = 0; i < Math.floor(n/2); i++) {
//        arrWithNum.push(Math.floor(Math.random() * n));
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

// let days73 = 73 * 24 * 60 * 60 * 1000; 
// let searchDate = +currentDate + days73;
// let daysForward73 = new Date(searchDate); 
// console.log(daysForward73);
// -------------------------------------
// Задание 10 
// function formatDate(date) {
// 	const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// 	const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	
// 	const day = days[date.getDay()];
// 	const month = months[date.getMonth()];
	
// 	const dateFormat = (`Дата: ${date.getDate()} ${month} ${date.getFullYear()} - это ${day}`);
// 	const timeFormat = (`Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
	
// 	return (`${dateFormat}\n${timeFormat}`);
//   }
  
//   const today = new Date();
//   const formattedDate = formatDate(today);
//   console.log(formattedDate);

// -----------------------------------------
// Задание 11 

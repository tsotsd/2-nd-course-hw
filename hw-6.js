// Задание 1
// const array = [1, 5, 4, 10, 0, 3]
// for (let index = 0; index < array.length; index++) {
// 	if (array[index] === 10) break;
// 	console.log(array[index]);
// }
// --------------------------------
// const array = [1, 5, 4, 10, 0, 3]
// let index = 0;
// while (array[index] != 10) {
// 	console.log(array[index]);
// 	index++;
// }
// ----------------------------------
// const array = [1, 5, 4, 10, 0, 3]
// let index = 0;
// do {
// 	console.log(array[index]);
// 	index++;
// } while (array[index] != 10) 
//  ---------------------------------
// Задание 2 
// const array = [1, 5, 4, 10, 0, 3]
// console.log(array.indexOf(4));
// -------------------------------------
// Задание 3
// let array = [1, 3, 5, 10, 20];
// array = array.join(' ');
// console.log(array);
// ----------------------------------
// Задание 4
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(1); 
// 	}
// }

// console.log(arr);
// -----------------------------
// Задание 5
// let arr = [1, 1, 1];

// arr.push(2, 2, 2);
// console.log(arr);
// ------------------------------
// // Задание 6
// let arr = [9, 8, 7, 'a', 6, 5];
// arr = arr.sort();
// arr.pop();
// console.log(arr);
// --------------------------------
// Задание 7
// let arr = [9, 8, 7, 6, 5];
// let answer = +prompt('Угадайте число спрятанное в массиве')
// if (answer === arr.length[el]) {
// 	alert('Угадал');
// } else {
// 	alert('Не угадал');
// }

// -----------
// let array = [9, 8, 7, 6, 5];
// let answer = Number(prompt('Угадайте число спрятанное в массиве'));
// for (let index = 0; index < array.length; index++) {
// 	if (array[index] === answer) {
// 		alert('Угадал');
// 	} else {
// 		alert('Не угадал');
// 	}
// }
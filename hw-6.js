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
// ----------------------
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = 1; 
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
// function mystery(arr) {
// let answer = +prompt('Угадайте число спрятанное в массиве');

// for (let index = 0; index < arr.length; index++) {
// 	if (arr[index] === answer) {
// 		return alert('Угадал');
// 		} 
// 	}
// 		alert('Не угадал');
// }	
// mystery(arr);

// -----------
// let arr = [9, 8, 7, 6, 5];
// function mystery(arr) {
// const answer = +prompt('Угадайте число спрятанное в массиве');
// return alert(arr.includes(answer) ? 'Угадал' : 'Не угадал');
// }
// mystery(arr);
// ---------------------
// Задание 8
// let line = 'abcdef'
// line = line.split('');
// line.reverse();
// line = line.join('')
// console.log(line);
// ------------------------
// Задание 9
// const arr = [[1, 2, 3], [4, 5, 6]];
// const union = [].concat(arr[0], arr[1]);
// console.log(union);
// -------------------------------
// const arr = [[1, 2, 3], [4, 5, 6]];
// const union = [].concat(...arr);
// console.log(union);
// -----------------------------
// Задание 10
// const arr = [1, 2, 3, 4]
// const totalarr = arr.reduce((a, b) => a + b);
// console.log(totalarr);
// ----------------------------------
// const arr = [1, 2, 3, 4, 5]
// for (let index = 0; index < arr.length; index++) {
// 	let element = arr[index] + arr[index+1]; 
// 	console.log(element);
// }
// -----------------------------------------
// Задание 11
// const arr = [1, 2, 3, 4, 5];
// let result = arr.map(item => item * item);
// console.log(result);
// ------------------------------------------
// Задание 12
// function getLengthWords(params) {
	
// }

// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

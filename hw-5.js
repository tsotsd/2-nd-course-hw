// Задание 1
// ------------------------
// function less(a, b) {
//     if (a > b) {
//         console.log(`${a}`);
//     } else {
//         console.log(`${b}`);
//     }
// }

// less(4, 5);
// less(9, 7);
// less(1, 1);
// --------------------------

// function less() {
//     let first = +prompt('Enter the first number');
//     let second = +prompt('Enter the second number');

//     if (first > second) {
//         return second;
//     } else if (first <= second) {
//         return first;
//     } else { 
//         return('incorrect data');
//     }
// }

// alert(less());
// -------------------------------
// function less() {
//     let first = +prompt('Enter the first number');
//     let second = +prompt('Enter the second number');

//        let min = first;

//        if (min > second) {
//            min = second; 
//        }
//        return min;
//     }
// alert(less());
// --------------------------------------
// Задание 2
// function returnString() {
//     let number = +prompt('enter the number');
//     if (number % 2 === 0) {
//         alert('Число четное');
//     } else if (isNaN(number)) {
//         alert('incorrect data')
//     } else {
//         alert('Число нечетное');
//     }
// }
// returnString();
// -----------------------------------------
// Задание 3.1
// function calcSquare(square) {
//     let result = square * square    
//     console.log(result);
// }

// calcSquare(8);

// Задание 3.2
// function calcSquare(square) {
//     let result = square * square    
//     alert(result);
// }

// calcSquare(5);
// ---------------------------------------------
// Задание 4
// function checkYaer() {
//     let question = +prompt('How old are you');
//     if (question >= 13) {
//         alert('Welcome');
//     } else if (question <= 12 && question > 0) {
//         alert('Hi, friend')
//     } else {
//         alert('You entered an invalid value')
//     }
// }

// checkYaer();
// ------------------------------------------
// Задание 5 
// function calcMult() {
//     let first = +prompt('enter the first number');
//     let second = +prompt('enter the second number');
    
//     if (isNaN(first) || isNaN(second)) {
//         alert('One or both values are not a number');
//     } else {
//         alert (first * second);
//     }
// }

// calcMult();
// -------------------------------------------
// function calcMult(first, second) {
   
//     if (isNaN(first) || isNaN(second)) {
//         console.log('One or both values are not a number');
//     } else {
//         console.log(first * second);
//     }
// }

// calcMult('df','sw');
// calcMult(5,8);
// calcMult(5,'fv');
// ----------------------------------------
// Задание 6

// function getCube() {
//     let number = +prompt('Enter the number');
//     cube = Math.pow(number, 3);
//     if (isNaN(number)) {
//         return;
//     } else {
//         alert(`n в кубе равняется ${cube}`);
//     }
// }
// getCube();
// ------------------------------------------
// Задание 7
// const circle1 = {
//     radius: 5,
//     getArea: function() {
//         let area = `${circle1.radius}` * `${circle1.radius}` * 3.14;
//         console.log(area);
//     },
//     getPerimetr: function() {
//         let perimetr = 2 * 3.14 * `${circle1.radius}`;
//         console.log(perimetr);
//     }
// }

// const circle2 = {
//     radius: 8,
//     getArea: function() {
//         let area = `${circle2.radius}` * `${circle2.radius}` * 3.14;
//         console.log(area);
//     },
//     getPerimetr: function() {
//         let perimetr = 2 * 3.14 * `${circle2.radius}`;
//         console.log(perimetr);
//     }
// }

// circle1.getArea();
// circle1.getPerimetr();
// circle2.getArea();
// circle2.getPerimetr();
// --------------------------------------------
[]
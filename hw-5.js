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
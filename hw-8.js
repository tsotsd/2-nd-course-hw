// Задание 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
//  let sortPeople = people;
//  sortPeople.sort(function (a, b) {
//     if (a.age > b.age) {
//         return 1;
//     }
//     if (a.age < b.age) {
//         return -1;
//       }
//       // a должно быть равным b
//       return 0;
//  });
//  console.log(sortPeople);
// ----------------------------
// Задание 2

// function getPlus(number) {
//     if (number > 0) {
//         return number;
//     }
// }
// function getMale(sign) {
//     if (sign.gender == 'male') {
//         return sign;
//     }    
// }
// function filter(arr, ruleFunction) {
//     for (let i = 0; i < arr.length; i++) {
//     return arr.filter(ruleFunction);

//     }
// }
// console.log(filter([3, -4, 1, 9], getPlus));
// const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
// ];
// console.log(filter(people, getMale));
// ---------------------------------
// Задание 3 
// const timer = (deadline) => {
//     const interval = setInterval(() => {
//         let currentDate = new Date();
//      console.log(currentDate);
//      }, 3000);
    
    
//      setTimeout(() => {
//         clearInterval(interval);
//         console.log('30 секунд прошло')
//       }, deadline * 1000)
//     };
    
//     timer(30);
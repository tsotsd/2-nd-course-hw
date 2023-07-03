// task1
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
----------------------------
// task2
// function isPositive() {
//     // писать код тут
//     }
//     function isMale() {
//     // писать код тут
//     }
//     function filter() {
//     // писать код тут
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]



// function square(number) {
//     return number * number;
//   }
  
//   function squareRoot(number) {
//     return Math.sqrt(number);
//   }
  
//   function map(arr, ruleFunction) {
//     const output = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       output.push(ruleFunction(arr[i]));
//     }
  
//     return output;
//   }
  
//   console.log(map([1, 4, 9, 16], square)); // => [ 1, 16, 81, 256 ]
//   console.log(map([1, 4, 9, 16], squareRoot)); // => [ 1, 2, 3, 4 ]

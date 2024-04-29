// 13/100
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// function arrayPlusArray(arr1, arr2) {
//   let results = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     results += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     results += arr2[i];
//   }

//   return results;
// }

// function arrayPlusArray(arr1, arr2) {
//   let results = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       results += arguments[i][j];
//     }
//   }

//   return results;
// }

// function arrayPlusArray(arr1, arr2) {
//   return [...arr1, ...arr2].reduce((acc, items) => acc + items);
// }

// const arrayPlusArray = (arr1, arr2) =>
//   [...arr1, ...arr2].reduce((acc, items) => acc + items);

// const arrayPlusArray = (arr1, arr2) =>
//   arr1.concat(arr2).reduce((acc, items) => acc + items);

// const arrayPlusArray = (...arrays) =>
//   [].concat(...arrays).reduce((acc, items) => acc + items);

const arrayPlusArray = (...arrays) => [].concat(...arrays)

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

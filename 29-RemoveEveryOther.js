// 29/100
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// function removeEveryOther(arr) {
//   newArray = [];
//   for (i = 0; i < arr.length; i += 2) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

const removeEveryOther = (arr) => arr.filter((e, i) => i % 2 == 0);

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

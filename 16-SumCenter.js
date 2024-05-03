// 16/100
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   const sorted = array.sort((a, b) => a - b);
//   let results = 0;
//   for (i = 1; i < sorted.length - 1; i++) {
//     results += sorted[i];
//   }
//   return results;
// }

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, items) => acc + items);
// }

// function sumArray(array) {
//   return array === null || array.length <= 2
//     ? 0
//     : array
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, items) => acc + items);
// }

const sumArray = (array) =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, items) => acc + items, 0)
    : 0;

console.log(sumArray([6, 2, 1, 8, 10]));

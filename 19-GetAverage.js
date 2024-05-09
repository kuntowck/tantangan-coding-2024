// 19/100
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks) {
//   results = 0;
//   for (let i = 0; i < marks.length; i++) {
//     results += marks[i] / marks.length;
//   }

//   return Math.floor(results);
// }

const getAverage = (marks) =>
  Math.round(marks.reduce((acc, curr) => acc + curr / marks.length, 0));

console.log(getAverage([2, 2, 2, 2]));

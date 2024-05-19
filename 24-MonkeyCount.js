// 24/100
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//   let results = [];
//   for (let i = 1; i <= n; i++) {
//     results.push(i);
//   }

//   return results;
// }

// function monkeyCount(n) {
//   for (var i = 0, arr = []; i < n; arr.push(++i));

//   return arr;
// }

// function monkeyCount(n) {
//   return [...Array(n).keys()].map((a) => a + 1);
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(5));

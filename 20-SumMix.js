// 20/100
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x) {
//   results = 0;
//   for (let i = 0; i < x.length; i++) { //let n of x
//     results += parseInt(x[i]);
//   }

//   return results;
// }

// function sumMix(x) {
//   return x.map(e => parseInt(e)).reduce((acc, curr) => acc + curr)
// }

// function sumMix(x) {
//   return x.map(e => +e).reduce((acc, curr) => acc + curr)
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));

// 23/100
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// function removeExclamationMarks(s) {
//   let x = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "!") {
//       x += s[i];
//     }
//   }
//   return x;
// }

const removeExclamationMarks = (s) => s.split('!').join('')

console.log(removeExclamationMarks("Hello World!"));

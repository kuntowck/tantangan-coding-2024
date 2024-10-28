// 37/100
// https://www.codewars.com/kata/5808e2006b65bff35500008f

// function position(letter) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

//   return `Position of alphabet: ${alphabet.indexOf(letter) + 1} `
// }

const position = (letter) => `Position of alphabet: ${letter.charCodeAt() - 96}`

console.log(position("z"))

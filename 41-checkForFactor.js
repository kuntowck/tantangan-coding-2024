// 41/100
// https://www.codewars.com/kata/55cbc3586671f6aa070000fb

function checkForFactor(base, factor) {
  // return base % factor ? false : true

  return !(base % factor)
}

console.log(checkForFactor(10, 2))

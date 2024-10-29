// 30/100
// https://www.codewars.com/kata/5b853229cfde412a470000d0

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2)
// }

const twiceAsOld = (d, s) => (d > s * 2 ? d - s * 2 : s * 2 - d)

console.log(twiceAsOld(55, 30))

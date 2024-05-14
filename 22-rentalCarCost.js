// 22/100
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   const cost = d * 40
//   if (d >= 7) return cost - 50
//   if (d >= 3) return cost - 20
//   return cost
// }

const rentalCarCost = (d) => (d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0)));

console.log(rentalCarCost(3));

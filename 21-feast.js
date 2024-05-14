// 21/100
// https://www.codewars.com/kata/5aa736a455f906981800360d

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] &&
//     beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)
//   );
// }

function feast(beast, dish) {
  return beast.at(0) === dish.at(0) && beast.at(-1) === beast.at(-1)
}

console.log(feast("brown bear", "bear claw"));

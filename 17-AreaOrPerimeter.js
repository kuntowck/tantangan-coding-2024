// 17/100
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// const areaOrPerimeter = function (l, w) {
//   if (l === w) return l * w;
//   return 2 * (6 + 10);
// };

const areaOrPerimeter = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter(3, 10));

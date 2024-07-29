// 28/100
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// function bonusTime(salary, bonus) {
//   if (bonus) return `£${salary * 10}`
//   return `£${salary}`
// }

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

console.log(bonusTime(25000, true));

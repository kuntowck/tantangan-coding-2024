// 18/100
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// function greet(name, owner) {
//   if (name === owner) return `Hello boss`
//   return `Hello guest`
// }

const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

console.log(greet("Daniel", "Daniel"));

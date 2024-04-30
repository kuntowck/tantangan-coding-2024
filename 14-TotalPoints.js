// 14/100
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let results = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       results += 3;
//     } else if (games[i][0] === games[i][2]) {
//       results += 1;
//     }
//   }

//   return results;
// }

const points = (games) =>
  games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y) + acc, 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);

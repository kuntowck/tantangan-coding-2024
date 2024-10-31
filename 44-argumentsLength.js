// 44/100
// https://www.hackerrank.com/challenges/birthday-cake-candles

// function birthdayCakeCandles(candles) {
//   const max = candles.slice(0, 1)

//   for (let i = 1; i < candles.length; i++) {
//     if (candles[i] >= max) {
//       max.push(candles[i])
//     }
//   }

//   console.log(max)
// }

const birthdayCakeCandles = (candles) => {
  const max = Math.max(...candles)
  return candles.filter((e) => e >= max).length
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))

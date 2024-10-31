// 43/100
// https://www.hackerrank.com/challenges/mini-max-sum

function miniMaxSum(arr) {
  const min = arr
    .sort((a, b) => a - b)
    .filter((_, i) => i < 4)
    .reduce((prev, current) => prev + current)

  const max = arr
    .sort((a, b) => a - b)
    .filter((_, i) => i > 0)
    .reduce((prev, current) => prev + current)

  console.log(min, max)
}

miniMaxSum([7, 69, 2, 221, 8974])

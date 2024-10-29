// 39/100
// https://www.hackerrank.com/challenges/plus-minus

// function plusMinus(arr) {
//   let positive = 0
//   let negative = 0
//   let zero = 0

//   arr.map((e) => (e > 0 ? positive++ : e < 0 ? negative++ : zero++))

//   const positiveRatio = positive / arr.length
//   const negativeRatio = negative / arr.length
//   const zeroRatio = zero / arr.length

//   console.log(positiveRatio)
//   console.log(negativeRatio)
//   console.log(zeroRatio)
// }

function plusMinus(arr) {
  let positive = arr.filter((e) => e > 0).length / arr.length
  let negative = arr.filter((e) => e < 0).length / arr.length
  let zero = arr.filter((e) => e === 0).length / arr.length

  console.log(positive)
  console.log(negative)
  console.log(zero)
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

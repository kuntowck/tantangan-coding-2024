// tantangan 35/100
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive(arr) {
  let count =   arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== count + 1) {
      return arr[i]
    }
    count = arr[i]
  }

  return null
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))

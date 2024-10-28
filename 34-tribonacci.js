//  34/100
//  https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  return signature.slice(0, n).reduce((total, item) => {
    return total + item
  }, )
}

console.log(tribonacci([1, 1, 1], 10));
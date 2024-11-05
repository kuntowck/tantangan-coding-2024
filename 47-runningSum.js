// 47/100
// https://leetcode.com/problems/running-sum-of-1d-array

const runningSum = (nums) => {
  let arr = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    arr.push(sum)
  }

  return arr
}

console.log(runningSum([1, 2, 3, 4]))

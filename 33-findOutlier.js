// 33/100
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// const findOutlier = (integers) => {
//   // tentukan mayoritas genap
//   const majorityEven = integers.filter((integer) => integer % 2 === 0).length > 1;

//   return integers.find((integer) => (integer % 2 === 0) !== majorityEven);
// };

const findOutlier = (integers) => {
  const even = integers.filter((integer) => integer % 2 === 0);
  const odd = integers.filter((integer) => integer % 2 > 1);

  return even.length === 1 ? even[0] : odd[1];
};

console.log(findOutlier([1, 2, 3]));

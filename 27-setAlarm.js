// 27/100
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// function setAlarm(employed, vacation){
//   if(employed && vacation) return false
//   if(!employed && vacation) return false
//   if(!employed && !vacation) return false
//   return true
// }

// const setAlarm = (employed, vacation) => employed && !vacation;

const setAlarm = (employed, vacation) => employed > vacation;

console.log(setAlarm(true, false));

// 45/100
// https://www.hackerrank.com/challenges/time-conversion

function timeConversion(s) {
  // remove am/pm
  const period = s.slice(-2).toUpperCase()

  // take hours, minutes, and seconds
  let [hours, minutes, seconds] = s.slice(0, -2).split(":")

  // check period
  if (period === "AM") hours = hours === "12" ? "00" : hours
  else hours = hours === "12" ? hours : String(Number(hours) + 12)

  return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion("07:05:45PM"))

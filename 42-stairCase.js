// 42/100
// https://www.hackerrank.com/challenges/staircase

function staircase(n) {
  let string = ""
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - 1; j++) {
      string += " "
    }

    for (let k = 0; k < i; k++) {
      string += "#"
    }

    string += "\n"
  }

  console.log(string)
}

staircase(6)


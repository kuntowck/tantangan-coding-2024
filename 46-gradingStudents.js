// 46/100
// https://www.hackerrank.com/challenges/grading/problem

// function gradingStudents(grades) {
//   let count = Math.ceil(grades / 5) * 5
//   if (grades >= 38 && count - grades < 3) return count
//   return grades
// }
// function gradingStudents(grades) {
//   return grades.map((grade) => {
//     const roundGrade = Math.ceil(grade / 5) * 5

//     if (grade >= 38 && roundGrade - grade < 3) return roundGrade

//     return grade
//   })
// }
const gradingStudents = (grades) => {
  return grades.map((grade) =>
    grade < 38 || grade % 5 < 3 ? grade : Math.ceil(grade / 5) * 5
  )
}

console.log(gradingStudents([73, 67, 38, 33]))

const students = [
  { rollNo: 1, name: "Akhil", course: "MERN", marks: 82, attendance: 92 },
  { rollNo: 2, name: "Riya", course: "Python", marks: 76, attendance: 85 },
  { rollNo: 3, name: "Rahul", course: "MERN", marks: 45, attendance: 70 },
  {
    rollNo: 4,
    name: "Sneha",
    course: "Data Science",
    marks: 90,
    attendance: 95,
  },
  { rollNo: 5, name: "Vishnu", course: "Python", marks: 55, attendance: 60 },
];

//1️⃣ print all student names in uppercase

// students.forEach((studentames) => {
//   console.log(studentames.name.toUpperCase())
// })

// 2️⃣ print names of students whose attendance is below 80

// let attendence = students.filter((studentMark) => studentMark.attendance < 80)
// console.log(attendence)

// 3️⃣ print students who scored more than 75 and belong to MERN course

// let mern = students.filter(
//   (eachStudent) => eachStudent.marks > 75 && eachStudent.course == "MERN"
// );
// console.log(mern);

// 4️⃣ calculate total marks of all students


let totalMark = students.reduce((acc,curr) => acc + curr['marks'],0)
console.log(totalMark)

// 5️⃣ find the student who has the highest marks

// let highest = students.reduce((acc,curr) => acc['marks']>curr['marks']?acc:curr)
// console.log(highest)

// 6️⃣ check if any student failed (mark < 50)

// let failed = students.filter((eachStudent) => eachStudent.marks < 50)
// console.log(failed)

// // 7️⃣ create an array of student names only (use map)
//  let names = students.map((eachStudent) => eachStudent.name)
// console.log(names)

// 8️⃣ print the average marks of all students
// let sum = 0
// students.forEach((eachStudent) => sum +=eachStudent.marks/students.length)
// console.log(sum)


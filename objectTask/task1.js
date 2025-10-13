const students = [
  {
    rollNo: 1,
    name: "Arjun",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 80 },
      { subject: "Science", score: 75 },
      { subject: "English", score: 85 },
    ],
  },
  {
    rollNo: 2,
    name: "Sneha",
    dept: "EC",
    marks: [
      { subject: "Maths", score: 90 },
      { subject: "Science", score: 88 },
      { subject: "English", score: 92 },
    ],
  },
  {
    rollNo: 3,
    name: "Rahul",
    dept: "ME",
    marks: [
      { subject: "Maths", score: 70 },
      { subject: "Science", score: 65 },
      { subject: "English", score: 68 },
    ],
  },
  {
    rollNo: 4,
    name: "Aisha",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 95 },
      { subject: "Science", score: 91 },
      { subject: "English", score: 89 },
    ],
  },
];

// 1. Print total number of students
// console.log(students.length)

// 2. Print names of students from CS department
students.forEach((eachStudent) => {
    if(eachStudent.dept == "CS"){
        // console.log(eachStudent.name)
    }
})

// 3. Print total marks of each student (sum of all subjects)

students.forEach((eachStudent) => {
    let totalMark = eachStudent.marks.reduce((acc,curr) => acc + curr['score'],0)
    // console.log(eachStudent.name,":",totalMark)
})

// 4. Print student with highest total marks
let maxHours = 0
let empName = ""
students.forEach((eachStudent) => {
    let totalMark = eachStudent.marks.reduce((acc,curr) => acc + curr['score'],0)
    if(totalMark>maxHours){
        maxHours = totalMark;
        empName = eachStudent.name
    }
})
// console.log(empName,":",maxHours)

// 5. Print average marks of student rollNo 2
let avg = 0
let roll2Mark = 0
let roll2 = students.find((eachStudent) => eachStudent.rollNo == "2")
// console.log(roll2)
roll2.marks.forEach((eachMark) =>{
    // console.log(eachMark.score)
    roll2Mark += eachMark.score
    avg = roll2Mark/roll2.marks.length
})
    // console.log(avg)



// 6. Print all students who scored more than 85 in Maths
let obj = {}
let mathsMark = students.map((eachStudent) => eachStudent.marks.forEach((eachMark) =>{
    if(eachMark.subject == "Maths" && eachMark.score>85){
        obj[eachStudent.name] = eachMark.score
    }
}))
// console.log(obj)


// 7. Print subject where rollNo 4 scored the least
let least = 0
let roll4 = students.find((eachStudent) => eachStudent.rollNo == "4")
// console.log(roll4.marks)
let leastMark = roll4.marks.reduce((acc,curr) => acc > curr['score'] ? acc:curr)
// console.log(leastMark)
    


// 8. Print department having the highest total marks (sum of all its students)
let depMark = 0
let depName = ""
students.forEach((eachDep) => {
    let totalDepMark = eachDep.marks.reduce((acc,curr) => acc + curr['score'],0)
    if(totalDepMark>depMark){
        depMark = totalDepMark
        depName = eachDep.dept
    }
})
// console.log(depName,":",depMark)


// 9. Print topper (student with highest marks in English)
let stdName = ""
let engMark = 0
students.forEach((eachStudent) => {
     eachStudent.marks.forEach((eachMark) => {
        if(eachMark.subject == "English"){
            let highest = eachMark.reduce((acc,curr) => acc > curr['score'],0)
            console.log(highest)
        }
     })
    
})

// 10. Print average marks of all students together
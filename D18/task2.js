const studentScores = [
    { student: "Alice", score: 85 },
    { student: "Bob", score: 78 },
    { student: "Charlie", score: 92 },
    { student: "Alice", score: 90 },
    { student: "Bob", score: 88 },
    { student: "Charlie", score: 95 },
    { student: "David", score: 80 },
    { student: "David", score: 83 },
];

// Print each student's total score

let markObj = {}


studentScores.forEach((eachStudent) => {
    let currentStudent = eachStudent.student
    let currentMark = eachStudent.score
    if(currentStudent in markObj){
        markObj[currentStudent] +=   currentMark  
    }else{
        markObj[currentStudent] = currentMark
    }
})

console.log(markObj)
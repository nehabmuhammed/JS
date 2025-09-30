const students = [
  [1, "Anu", "BCA", 85, "Kochi"],
  [2, "Basil", "BCom", 78, "Kollam"],
  [3, "Chitra", "BCA", 92, "Kochi"],
  [4, "Dinesh", "BSc", 67, "Trivandrum"],
  [5, "Eva", "BCom", 88, "Kottayam"],
  [6, "Farhan", "BSc", 59, "Kochi"],
  [7, "George", "BCA", 73, "Trivandrum"],
  [8, "Haritha", "BCom", 81, "Kollam"],
  [9, "Irfan", "BSc", 90, "Kochi"],
  [10, "Jiya", "BCA", 95, "Kottayam"],
];

// Print students who scored above 80
let mark = students.filter((std) => std[3] > 80)
console.log(mark);
// Print all students in BCA course

let bca = students.filter((std) => std[2] == "BCA")
console.log(bca);
// Print all students from Kochi

let kochi = students.filter((std) => std[4] == "Kochi")
console.log(kochi);
// Create a new array with only names and marks

let newArr = students.map((std) => [std[1],std[3]] )
console.log(newArr);
// Print total marks of all students

let markSum = 0
students.forEach((std) => markSum +=std[3])

console.log(markSum);
// Print average mark of students

let markAvg = 0
let avg = 0
students.forEach((std) => ( avg =(markAvg +=std[3])/students.length))
console.log(avg);

//  Sort students by marks in descending order

let desSort = students.toSorted((a,b) => b[3] - a[3])
console.log(desSort);

// Find the highest scoring student

console.log(desSort[9]);
//  Print students who scored less than 70
let mark70 = students.filter((std) => std[3] < 70)
console.log(mark70);
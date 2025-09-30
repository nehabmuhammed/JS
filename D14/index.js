const employees = [
  [1000, "John Mathew", "Developer", "Kochi", 600000, 2],
  [1001, "Rahul Das", "QA Tester", "Kochi", 500000, 2],
  [1002, "Sneha Raj", "Automation Tester", "Tvm", 550000, 3],
  [1003, "Arjun ks", "Data Engineer", "Kochi", 85000, 5],
  [1004, "Alan George", "Developer", "Kochi", 80000, 4],
  [1005, "Maya Thomas", "Developer", "Tvm", 75000, 3],
  [1006, "Abdulla ks", "DevOps Engineer", "Tvm", 80000, 4],
  [1007, "Vivek pp", "Cloud Architect", "Kochi", 95000, 6],
  [1008, "Sophia James", "Developer", "Tvm", 70000, 3],
  [1009, "Riya Paul", "System Analyst", "Tvm", 70000, 3],
];

// employees.forEach((employe) => console.log(employe[1])) 

// console.log(employees.length)

// let dev = employees.filter((element) => element[2] = "Developer")
// console.log(dev)

// let sal = employees.filter((element) => element[4] >75000)
// console.log(sal)

// let findemp = employees.find((emp) => emp[1] == "Vivek pp" )

// console.log(findemp)


// let sortedArr = employees.toSorted((a,b) => a[4]-b[4])
// console.log(sortedArr)

// let sortedArr = employees.toSorted((a,b) => b[4]-a[4])
// console.log(sortedArr)


// let sortedArr = employees.toSorted((a,b) => a[5]-b[5])
// console.log(sortedArr)

let sum = 0
employees.forEach((emp) => sum += emp[4])
console.log(sum)
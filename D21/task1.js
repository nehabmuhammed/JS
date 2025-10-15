const projects = [
  {
    pid: 1,
    projectName: "E-Commerce Platform",
    manager: "Arun",
    status: "completed",
    team: [
      { empId: 101, empName: "Alice", role: "Developer", hours: 120, rating: 4.5 },
      { empId: 102, empName: "Bob", role: "Tester", hours: 80, rating: 4.2 },
      { empId: 103, empName: "Charlie", role: "Designer", hours: 60, rating: 4.8 },
    ],
    budget: 800000,
  },
  {
    pid: 2,
    projectName: "Banking App",
    manager: "Divya",
    status: "in-progress",
    team: [
      { empId: 104, empName: "Evan", role: "Developer", hours: 100, rating: 4.3 },
      { empId: 105, empName: "Fathima", role: "Tester", hours: 70, rating: 4.1 },
      { empId: 106, empName: "George", role: "DevOps", hours: 90, rating: 4.7 },
    ],
    budget: 1000000,
  },
  {
    pid: 3,
    projectName: "Health Tracker",
    manager: "Rahul",
    status: "completed",
    team: [
      { empId: 107, empName: "Hannah", role: "Developer", hours: 130, rating: 4.9 },
      { empId: 108, empName: "Ibrahim", role: "Tester", hours: 85, rating: 4.4 },
    ],
    budget: 600000,
  },
  {
    pid: 4,
    projectName: "EduPortal",
    manager: "Aisha",
    status: "in-progress",
    team: [
      { empId: 109, empName: "John", role: "Developer", hours: 90, rating: 4.2 },
      { empId: 110, empName: "Kiran", role: "Tester", hours: 75, rating: 3.9 },
      { empId: 111, empName: "Lina", role: "Designer", hours: 65, rating: 4.6 },
    ],
    budget: 700000,
  },
];
// 1️⃣ Print total number of projects.
// console.log(projects.length)

// 2️⃣ Print names of all 'completed' projects. (use filter + map)

let comProject = projects.filter((eachProject) => eachProject['status'] == "completed")
let projectName = comProject.map((PName) => PName.projectName) 
// console.log(projectName)

// 3️⃣ Print all managers' names in uppercase.
// projects.forEach((eachProject) => console.log(eachProject.manager.toUpperCase()))

// 4️⃣ Print total budget of all projects. (use reduce)
let totalBudget = projects.reduce((acc,curr) => acc + curr['budget'],0)
// console.log(totalBudget)

// 5️⃣ Print all project names sorted by budget (descending order).
let sorted = projects.toSorted((a,b) => b['budget'] - a['budget'])
// sorted.forEach((eachProject) => console.log(eachProject.projectName))

// 6️⃣ Print total number of employees across all projects. (use map + flat + length)
let emp = projects.map((eachEmp) => eachEmp.team)
let flattenEmp = emp.flat(Infinity)
// console.log(flattenEmp.length)

// 7️⃣ Print all unique roles (Developer, Tester, Designer, etc.) across projects. (use map + flat + new Set)
// let obj = {}
// flattenEmp.forEach((eachRole) => {
//     if(eachRole.role == obj){
//         eachRole += 1
//     }else{
//         obj['eachRole.role] = 1
//     }
    

// })
// console.log(obj)

// 8️⃣ Print names of employees whose rating > 4.5. (use map + flat + filter)
let rating = flattenEmp.filter((eachRating) => eachRating.rating > 4.5)
// rating.forEach((eachName) => console.log(eachName.empName))

// 9️⃣ Print total working hours of project pid = 2. (use find + reduce)
let pid2 = projects.find((eachEmp) => eachEmp.pid == "2" )
let totalHours = pid2.team.reduce((acc,curr) => acc + curr['hours'],0)
// console.log(totalHours)


// 🔟 Print employee with highest rating overall. (use map + flat + reduce)
let highestRating = flattenEmp.reduce((acc,curr) => acc['rating'] > curr['rating']?acc:curr)
// console.log(highestRating)

// 11️⃣ Check if any project is still 'in-progress'. (use some)
let isStatus = projects.some((eachStatus) => eachStatus.status == "in-progress")
// console.log(isStatus)

// 12️⃣ Check if all projects have budget above 5 lakh. (use every)
let isBudget = projects.every((eachBudget) => eachBudget.budget > 500000)
// console.log(isBudget)

// 13️⃣ Print all employees who worked more than 100 hours. (use map + flat + filter)
let empHours = flattenEmp.filter((eachHours) => eachHours.hours > 100)
// empHours.forEach((eachEmp) => console.log(eachEmp.empName))

// 14️⃣ Print total working hours of each project as an object: { projectName, totalHours }. (use map + reduce)

let project = projects.map((eachProject) => {
    let obj = {}
    let projectName = eachProject.projectName
    let totalHours = eachProject['team'].reduce((acc,curr) => acc + curr['hours'],0)
    obj[projectName] = totalHours
    return obj
})
// console.log(project)


// 15️⃣ Print the project that has the highest total team hours. (nested reduce logic)



// 16️⃣ Create a new array of all employee names (flat list). (use map + flat + map)
let empNAmes = flattenEmp.map((eachEmp) => eachEmp.empName)
// console.log(empNAmes)

// 17️⃣ Print average rating of all Developers across all projects. (use map + flat + filter + reduce)
let empDeveloper = flattenEmp.filter((eachDev) => eachDev.role == "Developer")
let averageRating = empDeveloper.reduce((acc,curr) => acc + curr['rating'],0)
// console.log(averageRating/empDeveloper.length)

// 18️⃣ Print all testers' names whose project status is 'completed'. (use filter + map + flat + filter)
let comTester = projects.filter((eachProject) => eachProject.status == "completed")
let empTester = comTester.map((eachEmp) => eachEmp.team)
let flatTester = empTester.flat(Infinity)
let completedTester = flatTester.filter((eachTester) => eachTester.role == "Tester")
// completedTester.forEach((each) => console.log(each.empName))

// 19️⃣ Print all team members sorted by their rating (highest → lowest). (use map + flat + sort)
let sortRating = flattenEmp.toSorted((a,b) => a['rating'] - b['rating'])
// console.log(sortRating)

// 20️⃣ Print manager name with the project that has the largest team size. (use reduce)

let largest = projects.reduce((acc,curr) => acc.team.length >= curr.team.length? acc:curr)
console.log(largest.manager)
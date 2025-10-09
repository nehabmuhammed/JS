const employeeAttendance = [
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Absent" },
  { employee: "John", status: "Present" },
  { employee: "Mary", status: "Present" },
  { employee: "Steve", status: "Present" },
  { employee: "Steve", status: "Absent" },
  { employee: "Mary", status: "Present" },
  { employee: "John", status: "Absent" },
];
 
// Question: Print how many days each employee was "Present"

let att = {}

employeeAttendance.forEach((eachEmplyee) => {
    let currentEmp = eachEmplyee.employee
    let currentStatus = eachEmplyee.status
    if(currentEmp in att){
        if(currentStatus == "Present"){
            att[currentEmp] += 1
        }
    }
else{
    if(currentStatus == "Present"){
            att[currentEmp] = 1
    }else{
        att[currentEmp = 0]
    }
}}
)
console.log(att)
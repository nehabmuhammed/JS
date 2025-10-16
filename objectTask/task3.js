const patients = [
  {
    id: 201,
    name: "Kiran",
    age: 45,
    dept: "Cardiology",
    bills: [
      { service: "Consultation", amount: 800 },
      { service: "ECG", amount: 1200 },
      { service: "Medicine", amount: 700 },
    ],
  },
  {
    id: 202,
    name: "Divya",
    age: 30,
    dept: "Neurology",
    bills: [
      { service: "MRI", amount: 5000 },
      { service: "Consultation", amount: 1000 },
    ],
  },
  {
    id: 203,
    name: "John",
    age: 50,
    dept: "Orthopedics",
    bills: [
      { service: "X-Ray", amount: 1500 },
      { service: "Plaster", amount: 1200 },
      { service: "Medicine", amount: 800 },
    ],
  },
  {
    id: 204,
    name: "Meera",
    age: 35,
    dept: "Cardiology",
    bills: [
      { service: "ECG", amount: 1000 },
      { service: "Consultation", amount: 700 },
    ],
  },
];


// 1. Print total number of patients
// console.log(patients.length)

// 2. Print names of patients from 'Cardiology'
let Cardiology = patients.filter((each) => each.dept == "Cardiology")
// Cardiology.forEach((each) => console.log(each.name))

// 3. Print total bill amount for each patient
let obj = {}
patients.forEach((each) => {
    let totalAmounnt = each.bills.reduce((acc,curr) => acc + curr['amount'],0)
    obj[each.name] = totalAmounnt
})
// console.log(obj)
// 4. Print patient with highest total bill
let highestBill = 0
let patient = ""
let depName = ""
patients.forEach((each) => {
    let highBill = each.bills.reduce((acc,curr) => acc + curr['amount'],0)
    if(highBill>highestBill){
        highestBill=highBill
        patient = each.name
        depName = each.dept
    }
})
// console.log(patient,":",highestBill)

// 5. Print total earnings of the hospital
let bills = patients.map((each) => each.bills)
let flattenBill = bills.flat(Infinity)
totalEarning = 0 
flattenBill.forEach((each) => totalEarning+=each.amount)
// console.log(totalEarning)

// 6. Print all services costing more than 1000
let service = flattenBill.filter((each)=> each.amount > 1000)
// console.log(service)

// 7. Print department having highest total bill collection
// console.log(depName,":",highestBill)

// 8. Print patient who had an 'MRI'
patients.forEach((each) => {
    each.bills.forEach((eachBill) => {
        if(eachBill.service == "MRI"){
            // console.log(each.name,":",eachBill.service)
        }
    })
})

// 9. Print average bill per patient
let sumBill = 0
let avg = flattenBill.forEach((each) => {
    sumBill += each.amount
})
// console.log(sumBill/flattenBill.length)

// 10. Print total number of services billed
console.log(flattenBill.length)
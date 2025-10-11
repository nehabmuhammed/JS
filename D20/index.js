const accounts = [
  {
    acno: 1000,
    ac_type: "saving",
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
      { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
      { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
    ],
  },
  {
    acno: 1001,
    ac_type: "current",
    balance: 30000,
    transaction: [
      { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
      { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
    ],
  },
  {
    acno: 1002,
    ac_type: "saving",
    balance: 55000,
    transaction: [
      { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
      { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
    ],
  },
  {
    acno: 1003,
    ac_type: "saving",
    balance: 20000,
    transaction: [
      { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
      { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
    ],
  },
  {
    acno: 1004,
    ac_type: "current",
    balance: 60000,
    transaction: [
      { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
      { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
    ],
  },
];

// total number of accounts
// console.log(accounts.length);


// print account number whose ac_type is savings

// let savings = accounts.filter((eachEmp) => eachEmp.ac_type == "saving")
// console.log(savings)


// print the balance of account number 1000
// accounts.forEach((eachEmp) => {
//     if(eachEmp.acno == 1000){
//         console.log(eachEmp.balance)
//     }
// })



// print all phonePay transaction
let transaction = accounts.map((eachEmp) => eachEmp.transaction)
let flattendArr = transaction.flat(Infinity)
// flattendArr.forEach((eachTranscation) => {
//     if(eachTranscation['mode'] == "phonePe"){
//         console.log(eachTranscation)
//     }
// })


// print all transactions > 3000
// accounts.forEach((eachEmp) =>{
//     if(eachEmp.transaction[0].amount > 3000){
//         console.log(eachEmp)
//     }
// })


// print credit transaction of account 1002(CREDITED TO)
let credit = flattendArr.filter((eachCredit) => eachCredit.to == "1002")
// console.log(credit)

// print total credited amount to 1002

let totalCredit = credit.reduce((acc,curr) => acc + curr.amount,0)
// console.log(totalCredit)



// print debit transaction of 1002

let debit = accounts.find((eachElement)=> eachElement.acno == "1002")
let debitTranscation = debit.transaction
// console.log(debitTranscation)



// transaction history of 1002


let transactionHistory = [...credit,...debitTranscation]
// console.log(transactionHistory)


// current balance of 1002 (balace +credit amount)

console.log(debit.balance+totalCredit)

// Account with highest balance

let highestBalance = accounts.reduce((acc,curr) => acc.balance > curr.balance?acc:curr)
// console.log(highestBalance)
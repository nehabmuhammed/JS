// [ no,district,+ve cases, death rate, curred rate ,1st dose vaccine , 2nd dose vaccine ]

covid_data = [
  [1, "Ernakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Thiruvananthapuram", 25000, 1500, 18000, 15000, 1800],
  [3, "Kozhikode", 27000, 1800, 20000, 19000, 1700],
  [4, "Thrissur", 30000, 1900, 22000, 21000, 2000],
  [5, "Kottayam", 20000, 1200, 15000, 14000, 1200],
  [6, "Kannur", 22000, 1300, 17000, 16000, 1300],
  [7, "Alappuzha", 24000, 1400, 19000, 18000, 1500],
  [8, "Pathanamthitta", 18000, 1000, 14000, 13000, 1100],
];

// Is there any district with +ve cases > 25000 

let arr = covid_data.filter((element) => element[2]>25000 )
console.log(arr)

// Check every district with +ve cases > 25000 or not 

covid_data.forEach((element) => element[2]>25000?console.log("25000",element[1]):console.log("Less than 25000",element[1]))

// // Print total number of positive cases
let positiveSum = 0
covid_data.forEach((element) => positiveSum += element[2])
console.log(positiveSum)

// District having Highest +ve case :
let sortArr = covid_data.toSorted((a,b) => b[2]-a[2])
console.log(sortArr[0])

// District having Highest 1st dose vaccine  :

let vaccineArr = covid_data.toSorted((a,b) => b[5]-a[5])
console.log(vaccineArr[0])

// District having lowest death :
let death = covid_data.toSorted((a,b) => a[3]-b[3])
console.log(death[0])


// Sort data with +ve case in descending order :

let positive = covid_data.toSorted((a,b) => b[2]-a[2])
console.log(positive)

// Sort data with 1st dose vaccine
let firstVaccien = covid_data.toSorted((a,b) => a[5]-b[5])
console.log(firstVaccien)


// Print thrissur details

let thrissur = covid_data.find((element) => element[1] == "Thrissur")
console.log(thrissur)

// Print total number of curred cases
let totalcure = 0;
covid_data.forEach((element) => totalcure += element[4])
console.log(totalcure)
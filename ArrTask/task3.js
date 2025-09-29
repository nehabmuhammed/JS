// Use forEach() to calculate the sum of all numbers in an array.

let arr = [10, 20, 30, 40, 50]

let sum = 0
arr.forEach((element)=>(
    sum += element
))
console.log(sum)
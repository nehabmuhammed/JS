let arr = [2,55,4,6,3,5]

let total = arr.reduce((acc,curr) => acc + curr,10)
console.log(total)

let largest = arr.reduce((acc,curr) => acc>curr?acc:curr)
console.log(largest)
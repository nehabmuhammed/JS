// Use toSorted() on [45, 12, 89, 33, 25] and print both the original and the new sorted array.

let arr =  [45, 12, 89, 33, 25]

let newArr = arr.toSorted((a,b) => a-b)

console.log(arr)
console.log(newArr)

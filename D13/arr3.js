let numArray = [10,20,30,40,50]
let sum = 0
for(let i = 0; i<= numArray.length-1;i++){
    sum = numArray[i] + sum
}
console.log(sum)
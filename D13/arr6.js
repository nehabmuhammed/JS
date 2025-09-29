let arr = [5,10,15,20]
let newArr = []
let mul = 5
let mulCopy = mul

for(let i = 0;i<=arr.length-1;i++){
    mul *= arr[i]
    newArr.push(mul);
    mul = mulCopy
}
console.log(newArr)
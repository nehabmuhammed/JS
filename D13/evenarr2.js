let arr =[2,4,6,7,8]
let newArr = []

for(let i = 0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i])
    }
}
console.log(newArr)
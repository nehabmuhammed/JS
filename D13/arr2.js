let numArray = [10,20,30,40,50,1]
let smallest = numArray[0]
for(let i = 1; i<= numArray.length-1;i++){
    if(numArray[i]<smallest){
        smallest = numArray[i]
    }
}
console.log(smallest)
//duplicate
let numArray = [10,20,30,10,40,40,50,1]


for(let i = 0;i<=numArray.length-1;i++){
    for(let j =i+1;j<=numArray.length-1;j++){
        if(numArray[i] == numArray[j]){
            console.log(numArray[i])
        }
    }
}
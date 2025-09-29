let numArray = [10,20,75,30,40,50,1]
 
let searchKey = 75
 let isFound = false
for(let i = 0;i<=numArray.length-1;i++){
    for(let j =i+1;j<=numArray.length-1;j++){
        if(numArray[i] == searchKey){
            isFound = true
            break
        }
    }
}
if(isFound){
            console.log("Search Key Finded")

}else{
            console.log("Search Key not found")

}

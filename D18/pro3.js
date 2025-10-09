let str = "ABBCCBAD"

let out = {
}
let arr = str.split('')

for(let  i = 0;i<=arr.length -1;i++){
    if(arr[i] in out){
        console.log(arr[i])
        break;
    }else{
        out[arr[i]] = 1
    }
} 
const prompt = require('prompt-sync')();

let a = prompt("Eneter the number")
let b = prompt("Eneter the number")
let c = prompt("Eneter the number")

function largest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1,"is the largest")
    }else if(num2>num3){
        console.log(num2,"is the largest")
    }else{
        console.log(num3,"is the largest")
    }
}

largest(a,b,c)
// Write an arrow function isAdult(age) that returns true if age ≥ 18.
const prompt = require('prompt-sync')();

let number = prompt("Eneter the number")

const age = (num1) => {
    if(num1>=18){
        return console.log(num1,"is Adult")
    }else{
        return console.log(num1,"is child")
    }
}

age(number)

// Write an arrow function square(n) that returns the square of a number.
const prompt = require('prompt-sync')();

let number = prompt("Eneter the number")

const sqaure = (numb) =>{
    return numb*numb
}

console.log(sqaure(number))

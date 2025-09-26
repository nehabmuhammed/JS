// Create a function convertToCelsius(fahrenheit) that converts Fahrenheit to Celsius
const prompt = require('prompt-sync')();

let celcius = prompt("Eneter the number")

const faren = (num1) =>{
    return (num1 * 9/5) + 32
}

console.log(faren(celcius))
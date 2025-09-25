const prompt = require('prompt-sync')();



let year = prompt("Enetr your Birth Year");

const age = 2025 - Number(year);
console.log(age);
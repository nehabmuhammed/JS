let input = 123; 
let cn = input;
let output = 0;

for(let i =1;input>0;i++){
    let lastDigit = input % 10; 
    output = output * 10 + lastDigit;
    input = Math.floor(input / 10);
}
if(output == cn){
    console.log("It is palindrome")
}else{
    console.log("It is not palindrome")
}
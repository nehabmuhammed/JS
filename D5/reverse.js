let num = 4567;
let output = 0;
while(num>0){
    let numb = num % 10;
     num = Math.floor(num/10);
    output = (output*10+numb)
}
console.log(number);
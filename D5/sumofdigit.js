let num = 4567;
let output = 0;
while(num>0){
    let numb = num % 10;
     num = Math.floor(num/10);
    output = (output+numb);
}
console.log(output);
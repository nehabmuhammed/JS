let num = 154;
const input = 154;
let output = 0;
while(num>0){
    let numb = num % 10;
     num = Math.floor(num/10);
    output = ( output + (numb*numb*numb));
}
if(input == output){
    console.log(output+" Yes it is armstrong");
}else{
    console.log(output," No its is not armstrong")
}
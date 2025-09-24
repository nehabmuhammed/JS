let num = 6;
let isPrime = true;
for(let i = 2;i<=num;i++){
    if(num % i == 0){
        isPrime = false;
    }
 }
 if(isPrime == true){
    console.log(num,"is  prime");
 }else{
    console.log(num,"is not prime");
 }

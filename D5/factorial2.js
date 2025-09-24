let num = 10;
while(num<=20){
     let fact = 1;
     let number = num;
    while(number >=1){
        fact = fact * number;
        number--;
    }
    console.log(fact)
    num++
}
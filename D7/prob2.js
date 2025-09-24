let num = 123456;
let cn = num;
let searchKey  = 3;
let flag = false;
while(num>0){
    let lastDigit = num % 10;
    if(lastDigit == searchKey){
        flag = true;
    }
    num = Math.floor(num / 10);
}
  if( flag== true){
    console.log( searchKey+" is present in "+cn)
  }else{
    console.log( searchKey+" is not present in "+cn)

  }
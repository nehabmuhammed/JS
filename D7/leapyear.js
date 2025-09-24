let year = 2027;

if((year%4==0 && year % 100 != 0) || (year%400==0)){
    console.log(year," Is Leap Yaer")
}else{
    console.log(year," Is not Leap Yaer")
}
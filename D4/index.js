const mark = 50;
console.log(mark);

if(mark>=90 && mark<100){
    console.log(mark,"A Grade")
}else if(mark>=80){
    console.log(mark,"B Grade")
}else if(mark>=70){
    console.log(mark,"C Grade")
}else if(mark>=60){
    console.log(mark,"D Grade")
}else if(mark<60 && mark>0){
    console.log("Failed");
}
else{
    console.log("Invalid Mark")
}
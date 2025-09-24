// 1 4 7 10
// 2 5 8 11
// 3 6 9 12
// 4 7 10 13

for(let row=1;row<5;row++){
    let line="";
    let counter=0;
    counter+=row
    for(let col=1;col<5;col++){
        line+=counter+" "
        counter+=3;
    }
    console.log(line);
}
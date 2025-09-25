for(let row =1;row<=5;row++){
    let line = ""
    for(let col =1;col<=5;col++){
        if(row == 1||col == 3){
            line +="T"
        }else{
            line+="  "
        }
    }
    console.log(line)
}
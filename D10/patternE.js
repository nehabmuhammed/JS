for(let row = 1;row<=5;row++){
    let line = ""
    for(let col = 1;col<=5;col++){
        if(col == 1 || row == 1 || row ==3 || row == 5){
            line += "F "
        }else{
            line+= "  "
        }
    }
    console.log(line)
}
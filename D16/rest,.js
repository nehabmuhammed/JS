function add(...args){
    let sum = 0
    args.forEach((element) => sum+=element)
    console.log(sum)
}

add(1,2,3,4,5,6)
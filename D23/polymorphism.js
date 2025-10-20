function add(...args){
    let sum = args.reduce((a,b) => a + b ,0)
    console.log(sum)
}
add(2,3)
add(4,5,6)
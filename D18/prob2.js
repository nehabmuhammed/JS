let str = "hello word hai hello";

let obj = {}
let array1 = str.split(' ')

array1.forEach((eachWord) => {
    if(obj.hasOwnProperty(eachWord)){
        obj[eachWord] = obj[eachWord] + 1
    }else{
        obj[eachWord] = 1;
    }
})
console.log(obj)
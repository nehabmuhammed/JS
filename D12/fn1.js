
const add = (a) =>{
    return (b) =>{
        return (c) =>{
            return console.log(a+b+c)
        }
    }
}

add(10)(20)(30)

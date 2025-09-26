let globalData = "This is Global Data"

const parentFn = () => {
    let parentData = "This is Paretn Data"
    return () => {
        let childData = "This is cjild data"
        console.log(globalData)
        console.log(parentData)
        console.log(childData)
    }
}

childFn = parentFn()


childFn()
const a = (...b) => {
    let c = [1,2,3,4,5]
    let d = [...c,...b]
    console.log(d)
}

a(1,2,3,4,5,)
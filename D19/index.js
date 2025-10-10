const products = [
    { pid: 100, pName: 'Apple', brand: '5G', price: 120000, display: 'OLED' },
    { pid: 101, pName: 'Samsung', brand: '4G', price: 90000, display: 'AMOLED' },
    { pid: 102, pName: 'OnePlus', brand: '4G', price: 75000, display: 'Fluid AMOLED' },
    { pid: 103, pName: 'Pixel', brand: '3G', price: 85000, display: 'OLED' },
    { pid: 104, pName: 'Xiaomi', brand: '3G', price: 40000, display: 'Super AMOLED' }
];

// print product name only - 
// products.forEach((eachElement) => {
//     console.log(eachElement.pName)
// })

// print all mobile details whose display is oled :
// let Oled = products.filter((eachElement) => eachElement.display == "OLED")
// console.log(Oled)



// // print 3g mobile phone names :

// products.forEach((eachMobile) => {
//     if(eachMobile.brand == "3G"){
//         console.log(eachMobile.pName)
//     }
// })

// sort mobile based on price - sort 

//  let sorted = products.toSorted((a,b) => a.price - b.price)
// console.log(sorted)

// print costly mobile price 

// let costly = products.reduce((acc,curr) => acc['price']>curr['price']?acc:curr)
// console.log(costly)

// print low cost mobile
let costly1 = products.reduce((acc,curr) => acc['price']>curr['price']?curr:acc)
console.log(costly1)


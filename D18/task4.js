const productSales = [
  { product: "Laptop", sold: 5 },
  { product: "Mobile", sold: 10 },
  { product: "Tablet", sold: 7 },
  { product: "Laptop", sold: 3 },
  { product: "Mobile", sold: 4 },
  { product: "Tablet", sold: 6 },
  { product: "Headphone", sold: 8 },
  { product: "Headphone", sold: 2 },
];

//  Question: Print each product's total units sold.

let obj = {}

productSales.forEach((eachProducts) => {
    let currentProduct = eachProducts.product
    let currentSold = eachProducts.sold

    if(currentProduct in obj){
        obj[currentProduct] += currentSold 
    }else{
        obj[currentProduct] = currentSold
    }
})
console.log(obj)
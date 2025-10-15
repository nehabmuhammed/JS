const orders = [
  {
    orderId: 5001,
    customer: "Amal",
    items: [
      { name: "Laptop", price: 55000, qty: 1 },
      { name: "Mouse", price: 1500, qty: 2 },
    ],
    status: "delivered",
    paymentMode: "upi",
  },
  {
    orderId: 5002,
    customer: "Rahim",
    items: [
      { name: "Phone", price: 30000, qty: 1 },
      { name: "Charger", price: 1500, qty: 1 },
    ],
    status: "pending",
    paymentMode: "card",
  },
  {
    orderId: 5003,
    customer: "Sneha",
    items: [
      { name: "Headphones", price: 2000, qty: 1 },
      { name: "Laptop Stand", price: 1200, qty: 1 },
    ],
    status: "delivered",
    paymentMode: "upi",
  },
  {
    orderId: 5004,
    customer: "Vivek",
    items: [
      { name: "Tablet", price: 18000, qty: 1 },
      { name: "Case", price: 800, qty: 1 },
    ],
    status: "delivered",
    paymentMode: "netbanking",
  },
];


// 1. Print total number of orders
// console.log(orders.length)

// 2. Print names of customers who used 'upi' as payment mode
orders.forEach((eachOrder) => {
    if(eachOrder.paymentMode == "upi"){
        // console.log(eachOrder.customer)
    }
})

// 3. Print total amount of each order (price * qty for each item)
let totalAmount = 0
let items = orders.map((eachOrder) => eachOrder.items)
let flattendOrders = items.flat(Infinity)
flattendOrders.forEach((eachItems) => {
    totalAmount += eachItems.price * eachItems.qty
})
// console.log(totalAmount)

// 4. Print the customer with the highest total bill amount
let highestBill = 0
let customerName = ""
orders.forEach((eachBill) => {
    let totalBill = eachBill.items.reduce((acc,curr) => acc + curr['price'],0)
    if(totalAmount>highestBill){
        highestBill = totalBill
        customerName = eachBill.customer
    }
})
// console.log(customerName,":",highestBill)

// 5. Print all 'delivered' orders
let deliverdOrders = orders.filter((eachOrder) => eachOrder.status == "delivered")
// console.log(deliverdOrders)

// 6. Print all items whose price > 5000
flattendOrders.forEach((eachItem) => {
    if(eachItem.price > 5000){
        // console.log(eachItem.name)
    }
})

// 7. Print total sales amount from 'delivered' orders
let totalSalesAmount = 0
let deliverdOrdersItems = deliverdOrders.map((eachItem) => eachItem.items)
let deliveredFlat = deliverdOrdersItems.flat(Infinity)
deliveredFlat.forEach((eachItem) => {
    totalSalesAmount += eachItem.price
})
// console.log(totalSalesAmount)

// 8. Print orderId with the most number of items
let orderId = ''
let qty = 0
orders.forEach((eachItem) => {
    let mostSale = eachItem.items.reduce((acc,curr) => acc + curr['qty'],0)
    if(mostSale>qty){
        qty = mostSale
        orderId = eachItem.orderId
    }
})
// console.log(orderId,"sales:",qty)

// 9. Print customer who bought 'Laptop'
orders.forEach((eachItem) => eachItem.items.forEach((eachName) => {
    if(eachName.name == "Laptop"){
        // console.log(eachItem.customer)
    }
}))

// 10. Print average order value (AOV)

let average = flattendOrders.reduce((acc,curr) => acc + curr ['qty'],0)
console.log(average/flattendOrders.length)
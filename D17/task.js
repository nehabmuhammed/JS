let car = {
    name:'polo',
    model:'petrol',
    manufactoror:'volswagen',
    price:800000
}
console.log("Car Name:",car.name,"Car Price:",car.price)

if('model' in car){
    console.log("Model:",car['model'])
}else{
    console.log("Not found")
}

car.varient = ['Automatic','Manual']

car.color = 'red'

console.log(car)
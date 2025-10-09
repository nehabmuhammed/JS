const salesData = [
    { city: "New York", sales: 5000 },
    { city: "Los Angeles", sales: 7000 },
    { city: "Chicago", sales: 6000 },
    { city: "New York", sales: 8000 },
    { city: "Los Angeles", sales: 6500 },
    { city: "Chicago", sales: 9000 },
    { city: "Houston", sales: 4000 },
    { city: "Houston", sales: 5500 },
];

// Print each city with its highest sales value

let obj = {}


salesData.forEach((eachElement) => {
    let currentCity = eachElement.city
    let currentSales = eachElement.sales
    if(currentCity in obj){
        if(currentSales >= obj[currentCity]){
            obj[currentCity] = currentSales
        }

    }else{
        obj[currentCity] = eachElement.sales
    }

})
console.log(obj)
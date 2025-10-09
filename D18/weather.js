const weatherData = [
    { district: "Thrissur", temp: 32 },
    { district: "Thiruvananthapuram", temp: 33 },
    { district: "Kozhikode", temp: 31 },
    { district: "Thrissur", temp: 28 },
    { district: "Kozhikode", temp: 27 },
    { district: "Ernakulam", temp: 26 },
    { district: "Ernakulam", temp: 30 },
    { district: "Thiruvananthapuram", temp: 29 },
  ];
 
  // print district with its highest temperature

  let obj = {}

  weatherData.forEach((eachElement) => {
    let currentDistrict = eachElement.district
    let currentTemp = eachElement.temp

    if(currentDistrict in obj){
        if(currentTemp > obj[currentDistrict]){
            obj[currentDistrict] = currentTemp
        }
    }else{
        obj[currentDistrict] = currentTemp
    }
  })
  console.log(obj)
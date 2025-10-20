const displayData = (value) => {
    result.value += value
}
const clearValue = () => {
    result.value = ''
}
const calculate = () => {
    try {
        if(result.value == ''){
            alert('please eneter a number')
        }else{
            result.value = eval(result.value)
        document.getElementById('para').innerHTML = 'Calculated'
        }
    

    } catch (error) {
        document.getElementById('para').innerHTML = 'Error Occured'
    }
}
const del = () => {
        result.value = result.value.slice(0,-1)
        
    }

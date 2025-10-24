const getData = () => {
    const name = document.getElementById('iName').value
    const email = document.getElementById('email').value
    const cource = document.getElementById('cource').value
    const feedback = document.getElementById('feedback').value
    const rating = document.getElementById('rating').value


    document.getElementById('Iname').innerHTML = name
    document.getElementById('Iemail').innerHTML = email
    document.getElementById('Icource').innerHTML = cource
    document.getElementById('Feedback').innerHTML = feedback
    document.getElementById('rated').innerHTML = rating

    const obj = {name,email,cource,feedback,rating}
    const objJson = JSON.stringify(obj)
    try {
        sessionStorage.setItem('data',objJson)
        alert('Data stored in Session Storage ')
    } catch (error) {
        console.log(error)
        alert('Storing Data failed ')

    }
  


}
const resetButton = () => {
    sessionStorage.clear()
    document.getElementById('iName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('cource').value = "";
    document.getElementById('feedback').value = "";

    document.getElementById('Iname').innerHTML = ""
    document.getElementById('Iemail').innerHTML = ""
    document.getElementById('Icource').innerHTML = ""
    document.getElementById('Feedback').innerHTML = ""
    document.getElementById('rated').innerHTML = ""

}
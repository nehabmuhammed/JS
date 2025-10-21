const getData = () => {
    try {
        const name1 = document.getElementById('nameInp').value;
    const email = document.getElementById('username').value;
    let obj = {name1,email}
    console.log(obj)
    let jsonData = JSON.stringify(obj)
    localStorage.setItem('userDetaiils',jsonData)
    console.log(jsonData)
    alert('local storage succesfully')
    window.location = './seconsPage.html'
    } catch (error) {
        console.log(error)
        alert('error occured')
    }
} 

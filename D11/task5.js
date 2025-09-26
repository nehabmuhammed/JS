// Create a recursive function countdown(n) that prints numbers from n down to 1.


const countdown = (num) =>{
    if(num ==0){
        return 
    }
    console.log(num)
    countdown(num - 1)
}

countdown(10)
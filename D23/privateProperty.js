class accDetails{
    accNo = 2001;
    accName = "John";
    #balance = 5000

    printBalance(){
        console.log(this.#balance)
    }

}

let c1 = new accDetails()
c1.printBalance()
// console.log(c1.balance)
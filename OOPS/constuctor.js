class Person{
    //properties
    constructor(){
    this.name = "Nehab";
    this.age = 21;
    this.weight = 75;
    }

    //method
    printDetails(){
        console.log(`Name : ${this.name} age : ${this.age}`)
    }
}

let p1 = new Person()
p1.printDetails()
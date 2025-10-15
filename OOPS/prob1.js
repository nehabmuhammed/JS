class Person{
    //properties
    name = "Nehab";
    age = 21;
    weight = 75;

    //method
    printDetails(){
        console.log(`Name : ${this.name} age : ${this.age}`)
    }
}

let p1 = new Person()
p1.printDetails()
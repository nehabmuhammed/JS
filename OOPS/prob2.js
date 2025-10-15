class employee {
  constructor(empId, empName, empSal, empDes) {
    this.empId = empId;
    this.empName = empName;
    this.empSal = empSal;
    this.empDes = empDes;
  }

  display() {
    console.log(this.empName, this.empSal);
  }
}

let emp1 = new employee(1001, "John", 40000, "Developer");
emp1.display();
let emp2 = new employee(1002, "Honai", 50000, "Tester");
emp2.display();

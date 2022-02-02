class Emp {
  empId: number;
  empName: string;
  constructor() {
    this.empId = 20;
    this.empName = "Sahil Singh";
  }
}

let person = new Emp();
console.log(person.empId + " " + person.empName);

class Emp1 {
  empId: number;
  empName: string;
  constructor(id = 30, name = "Payal Singh") {
    this.empId = id;
    this.empName = name;
  }
}

let person1 = new Emp1();
console.log(person1.empId + " " + person1.empName);

class Emp2 {
  empId: number;
  empName: string;
  constructor(id: number, name: string) {
    this.empId = id;
    this.empName = name;
  }
}

let name1 = new Emp2(285, "Sahil Singh");
console.log(name1.empId + " " + name1.empName);

let name2 = new Emp2(450, "Payal Singh");
console.log(name2.empId + " " + name2.empName);

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  empCode: number;
  constructor(empcode: number, name: string) {
    super(name);
    this.empCode = empcode;
  }
  displayName(): void {
    console.log(this.empCode + " " + this.name);
  }
}

let emp1 = new Employee(1001, "Sopnil");
emp1.displayName();

interface Office {
  name: string;
  display(): void;
}
interface Office1 {
  empCode: number;
}

class Employee5 implements Office, Office1 {
  empCode: number;
  name: string;
  constructor(name: string, empcode: number) {
    this.name = name;
    this.empCode = empcode;
  }
  display(): void {
    console.log(
      "Employee name is: " + this.name + " Employee Code is: " + this.empCode
    );
  }
}

let pro = new Employee5("Pooja", 635);
pro.display();

class Popo {
  name: string;
}

interface Per2 extends Popo {
  empCode: number;
}

let popo: Per2 = { empCode: 123, name: "Roy" };
console.log(popo);

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(speed: number = 0) {
    console.log("A" + this.name + " is running " + speed);
  }
}

class Audi extends Car {
  constructor(name: string) {
    super(name);
  }
  run(speed = 150) {
    console.log("Audi started ");
    super.run(speed);
  }
}

class KIA extends Car {
  constructor(name: string) {
    super(name);
  }
  run(speed = 100) {
    console.log("KIA started ");
    super.run(speed);
  }
}

let newCar1 = new Audi("Audi");
let newCar2 = new KIA("KIA");

console.log(newCar1.run());
console.log(newCar2.run());

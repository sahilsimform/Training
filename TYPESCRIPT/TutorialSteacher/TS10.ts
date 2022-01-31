// abstract class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   display(): void {
//     console.log(this.name);
//   }
//   abstract find(string): Person;
// }

// class Employee extends Person {
//   empCode: number;
//   constructor(name: string, empCode: number) {
//     super(name);
//     this.empCode = empCode;
//   }
//   find(name: string): Person {
//     return new Employee(name, 1);
//   }
// }

// let num1: Person = new Employee("Pooja", 1);
// num1.display();

// let num2: Person = num1.find("Roma");
// num2.display();

// class Prop1 {
//   public name: string;
//   empId: number;
// }
// let people1 = new Prop1();
// console.log((people1.name = "Pooja"));
// console.log((people1.empId = 123));

// class Prop2 {
//   private name: string;
//   enpId: number;
// }
// let people2 = new Prop2();
// // console.log((people2.name = "Poo"));
// // console.log((people2.empId = 456));

// class Prop3 {
//   public empName: string;
//   protected empCode: number;
//   constructor(name: string, code: number) {
//     this.empName = name;
//     this.empCode = code;
//   }
// }

// class Prop4 extends Prop3 {
//   private department: string;
//   constructor(name: string, code: number, department: string) {
//     super(name, code);
//     this.department = department;
//   }
// }

// let num4 = new Prop4("Sopnil", 123, "CSE");
// console.log(num4);

// class Emp2 {
//   readonly empCode: number;
//   empName: string;

//   constructor(code: number, name: string) {
//     this.empCode = code;
//     this.empName = name;
//   }
// }
// let emp1 = new Emp2(352, "Roma");
// // emp1.empCode = 20;
// emp1.empName = "Sahil";
// console.log(emp1);

// interface Emp3 {
//   readonly empCode: number;
//   empName: string;
// }
// let empobj: Emp3 = {
//   empCode: 1,
//   empName: "Ro",
// };

// // // empobj.empCode = 100;

// interface Emp4 {
//   empCode: number;
//   empName: string;
// }
// let emp1: Readonly<Emp4> = {
//   empCode: 1,
//   empName: "Sahil",
// };
// // emp1.empName = "Ram";
// // emp1.empCode = 641;

// let emp2: Emp4 = {
//   empCode: 52,
//   empName: "Sopnil",
// };

// console.log((emp2.empCode = 456));
// console.log((emp2.empName = "ro"));

class Circle {
  static pi: number = 3.14;
  static Area(radious: number) {
    console.log(this.pi * radious * radious);
  }
  circumference(radious: number): number {
    console.log(2 * Circle.pi * radious);
  }
}
Circle.pi;
Circle.Area(6);

let circleObj1 = new Circle();
circleObj1.circumference(5);

// class Cir1 {
//   static pi = 3.14;
//   pi = 3;
// }
// console.log(Cir1.pi);
// let circleObj = new Cir1();
// console.log(circleObj.pi);

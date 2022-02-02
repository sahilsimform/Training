let num: number = 2;

while (num <= 4) {
  console.log("Block statement execution no." + num);
  num++;
}

let num2: number = 2;
do {
  console.log("Block statement execution no." + num2);
  num2++;
} while (num2 < 4);

function printer() {
  console.log("Hello world..My name is Sahil");
}

printer();

function sum(x: number, y: number): number {
  return x + y;
}
console.log(sum(20, 30));

let RO = function mane3() {
  console.log("welcome");
  return function () {
    console.log("yoyo");
  };
};

let display = RO();
console.log(display());

function greet(greeting: string, name: string): string {
  return name + " is a " + greeting + " Engineer";
}
let result = greet("software", "Sahil");
console.log(result);

function greet1(greeting1: string, name1?: string): string {
  return name1 + " is a " + greeting1 + " Engineer";
}
let result1 = greet1("software", "Sahil");
console.log(result1);
let result2 = greet1("software");
console.log(result2);

function Greet2(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name + "!";
}

console.log(Greet2("Roy")); //OK, returns "Hello Steve!"
console.log(Greet2("Sheela", "Hi")); // OK, returns "Hi Steve!".
console.log(Greet2("Sheetal")); //OK, returns "Hello Bill!"

function Greet3(greeting: string = "Hello", name: string): string {
  return greeting + " " + name + "!";
}

console.log(Greet3(undefined, "Sonu")); //returns "Hello Steve!"
console.log(Greet3("Hi", "Pooja")); //returns "Hi Steve!".
console.log(Greet3(undefined, "Vaibhav")); //returns "Hello Bill!"

let name5 = (x: number, y: number): number => x + y;

console.log(name5(10, 20)); //returns 30

let name6 = function (x, y) {
  return x + y;
};
console.log(name6(10, 20));

let print1 = (y) => console.log("YOYO is Back...!!" + y);
print1(3);

let print2 = (x: number, y: number) => x + y;
console.log(print2(3, 7));

class Employee1 {
  empNo: number;
  empName: string;
  constructor(code: number, name: string) {
    this.empNo = code;
    this.empName = name;
  }
  display = () => console.log(this.empNo + " " + this.empName);
}
let ro = new Employee1(1, "Sahil");
ro.display();

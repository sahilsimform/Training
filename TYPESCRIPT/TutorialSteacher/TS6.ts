function sum(a: number, b: number) {
  return a + b;
}
var total: number = sum(10, 20); // OK
// var str: string = sum(10, 20); // Compiler Error

interface Employee1 {
  name: string;
  code: number;
}

let employee1 = <Employee1>{};
console.log((employee1.name = "Sahil")); // OK
console.log((employee1.code = 589)); // OK

let code1: any = 745;
let employeeCode1 = <number>code1;
console.log(employeeCode1); // OK

let code2: any = 364;
let employeeCode2 = code2 as number;
console.log(employeeCode2); // OK

let x: number = 10,
  y = 20;

if (x > y) {
  console.log("x is greater than y.");
} else if (x < y) {
  console.log("x is less than y."); //This will be executed
} else if (x == y) {
  console.log("x is equal to y");
}

let o: number = 10,
  i = 20;

o > i
  ? console.log("x is greater than y.")
  : console.log("x is less than or equal to y.");

let day: number = 6;

switch (day) {
  case 0:
    console.log("Its Sunday");
    break;
  case 1:
    console.log("Its Monday");
    break;
  case 2:
    console.log("Its Tuesday");
    break;
  case 3:
    console.log("Its Wednesday");
    break;
  case 4:
    console.log("Its Thursday");
    break;
  case 5:
    console.log("Its Friday");
    break;

  default:
    console.log("Its Saturday");
}

let name12 = "Welcome to Sahil Program";

for (let i = 0; i < name12.length; i++) {
  console.log(name1[i]);
}

for (var y of name12) {
  console.log(y);
}

let arr5 = [10, 20, 30, 40];

for (var index1 in arr5) {
  console.log(index1); // prints indexes: 0, 1, 2, 3
}
console.log(index1); //OK, prints 3

for (let index2 in arr5) {
  console.log(index2); // prints elements: 0, 1, 2, 3
}
console.log(index2); //Compiler Error: Cannot find index2

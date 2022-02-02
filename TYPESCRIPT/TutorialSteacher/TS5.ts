let name1: string = "Annu";
let Id: number = 1;

let employee: [number, string] = [1, "Sahil"];
let person: [number, string, boolean] = [1, "Pooja", true];
let user: [number, string, boolean, string, number] = [
  1,
  "Payal",
  false,
  "Singh",
  50000,
];
console.log(user);

let toupple: [number, string][];
toupple = [
  [1, "Sahil"],
  [2, "Pooja"],
  [3, "Payal"],
];

console.log(toupple);

toupple.push(4, "Roy");
console.log(toupple);

toupple[1] = toupple[1].concat("Singh");
console.log(toupple);

enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

function getMedia(mediaName: string): PrintMedia {
  if (mediaName === "Forbes" || mediaName === "Outlook") {
    return PrintMedia.Magazine;
  }
}

console.log(getMedia("Forbes")); // returns Magazine

enum PrintMedia {
  Newspaper = 1,
  Newsletter = getPrintMediaCode("newsletter"),
  Magazine = Newsletter * 3,
  Book = 10,
}

function getPrintMediaCode(mediaName: string): number {
  if (mediaName === "newsletter") {
    return 5;
  }
}

PrintMedia.Newsetter; // returns 5
PrintMedia.Magazine; // returns 15

let code: string | number;
code = 123; // OK
code = "ABC"; // OK
// code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
// empId = true; // Compiler Error

function displayType(code: string | number) {
  if (typeof code === "number") console.log("Code is number.");
  else if (typeof code === "string") console.log("Code is string.");
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number

let num09: any[] = ["Sahil", 11, true];
num09.push("Payal", 202);
console.log(num09);

function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech);

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

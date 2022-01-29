let Arr1: string[] = ["Apple", "Orange", "Banana", "KIVI"];
let Arr2: Array<string> = ["Apple", "Orange", "Banana", "KIVI"];
console.log(Arr1);
console.log(Arr2);

let Arr3: Array<string>;
Arr3 = ["Sahil", "Payal", "Sopnil"];
console.log(Arr3);

let Arr4: Array<number>;
Arr4 = [23, 34, 100, 124, 44];
console.log(Arr4);

let Arr5: Array<string | number> = [
  "Apple",
  3,
  "Orange",
  5,
  "Banana",
  8,
  "KIVI",
];
console.log(Arr5);

let Arr6: (string | number)[] = ["Apple", 8, "Orange", 7, "Banana", 3, "KIVI"];
console.log(Arr6);

let Arr7: Array<string> = ["Sahil", "Pooja", "Roy"];
console.log(Arr7[0]);
console.log(Arr7[1]);
console.log(Arr7[2]);

let Arr8: Array<string> = ["Sahil", "Pooja", "Sahil", "Roy"];
for (let i in Arr8) {
  console.log(Arr8[i]);
}

for (let i = 0; i < Arr8.length; i++) {
  console.log(Arr8[i]);
}

let Arr9: Array<string> = ["Sahil", "Pooja", "Roy", "Sopnil"];
Arr9.push("Payal");
console.log(Arr9);
Arr9.pop();
console.log(Arr9);
Arr9.sort();
console.log(Arr9);
Arr9 = Arr9.concat(["Meet", "Vaibhav"]);
console.log(Arr9);
console.log("Sahil " + Arr9.indexOf("Sahil"));

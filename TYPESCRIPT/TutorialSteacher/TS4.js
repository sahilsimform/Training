var Arr1 = ["Apple", "Orange", "Banana", "KIVI"];
var Arr2 = ["Apple", "Orange", "Banana", "KIVI"];
console.log(Arr1);
console.log(Arr2);
var Arr3;
Arr3 = ["Sahil", "Payal", "Sopnil"];
console.log(Arr3);
var Arr4;
Arr4 = [23, 34, 100, 124, 44];
console.log(Arr4);
var Arr5 = [
    "Apple",
    3,
    "Orange",
    5,
    "Banana",
    8,
    "KIVI",
];
console.log(Arr5);
var Arr6 = ["Apple", 8, "Orange", 7, "Banana", 3, "KIVI"];
console.log(Arr6);
var Arr7 = ["Sahil", "Pooja", "Roy"];
console.log(Arr7[0]);
console.log(Arr7[1]);
console.log(Arr7[2]);
var Arr8 = ["Sahil", "Pooja", "Sahil", "Roy"];
for (var i_1 in Arr8) {
    console.log(Arr8[i_1]);
}
for (var i_2 = 0; i_2 < Arr8.length; i_2++) {
    console.log(Arr8[i_2]);
}
var Arr9 = ["Sahil", "Pooja", "Roy", "Sopnil"];
Arr9.push("Payal");
console.log(Arr9);
Arr9.pop();
console.log(Arr9);
Arr9.sort();
console.log(Arr9);
Arr9 = Arr9.concat(["Meet", "Vaibhav"]);
console.log(Arr9);
console.log("Sahil " + Arr9.indexOf("Sahil"));

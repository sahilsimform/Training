function sum(a, b) {
    return a + b;
}
var total = sum(10, 20); // OK
var employee1 = {};
console.log((employee1.name = "Sahil")); // OK
console.log((employee1.code = 589)); // OK
var code1 = 745;
var employeeCode1 = code1;
console.log(employeeCode1); // OK
var code2 = 364;
var employeeCode2 = code2;
console.log(employeeCode2); // OK
var x = 10, y = 20;
if (x > y) {
    console.log("x is greater than y.");
}
else if (x < y) {
    console.log("x is less than y."); //This will be executed
}
else if (x == y) {
    console.log("x is equal to y");
}
var o = 10, i = 20;
o > i
    ? console.log("x is greater than y.")
    : console.log("x is less than or equal to y.");
var day = 6;
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
var name12 = "Welcome to Sahil Program";
for (var i_1 = 0; i_1 < name12.length; i_1++) {
    console.log(name1[i_1]);
}
for (var _i = 0, name12_1 = name12; _i < name12_1.length; _i++) {
    var y = name12_1[_i];
    console.log(y);
}
var arr5 = [10, 20, 30, 40];
for (var index1 in arr5) {
    console.log(index1); // prints indexes: 0, 1, 2, 3
}
console.log(index1); //OK, prints 3
for (var index2 in arr5) {
    console.log(index2); // prints elements: 0, 1, 2, 3
}
console.log(index2); //Compiler Error: Cannot find index2

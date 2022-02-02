var name1 = "Annu";
var Id = 1;
var employee = [1, "Sahil"];
var person = [1, "Pooja", true];
var user = [
    1,
    "Payal",
    false,
    "Singh",
    50000,
];
console.log(user);
var toupple;
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
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === "Forbes" || mediaName === "Outlook") {
        return PrintMedia.Magazine;
    }
}
console.log(getMedia("Forbes")); // returns Magazine
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediaCode("newsletter")] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 6] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === "newsletter") {
        return 5;
    }
}
PrintMedia.Newsetter; // returns 5
PrintMedia.Magazine; // returns 15
var code;
code = 123; // OK
code = "ABC"; // OK
// code = false; // Compiler Error
var empId;
empId = 111; // OK
empId = "E111"; // OK
// empId = true; // Compiler Error
function displayType(code) {
    if (typeof code === "number")
        console.log("Code is number.");
    else if (typeof code === "string")
        console.log("Code is string.");
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
var num09 = ["Sahil", 11, true];
num09.push("Payal", 202);
console.log(num09);
function sayHi() {
    console.log("Hi!");
}
var speech = sayHi();
console.log(speech);
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log("I always does something and never ends.");
    }
}

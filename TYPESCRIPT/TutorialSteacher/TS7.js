var num = 2;
while (num <= 4) {
    console.log("Block statement execution no." + num);
    num++;
}
var num2 = 2;
do {
    console.log("Block statement execution no." + num2);
    num2++;
} while (num2 < 4);
function printer() {
    console.log("Hello world..My name is Sahil");
}
printer();
function sum(x, y) {
    return x + y;
}
console.log(sum(20, 30));
var RO = function mane3() {
    console.log("welcome");
    return function () {
        console.log("yoyo");
    };
};
var display = RO();
console.log(display());
function greet(greeting, name) {
    return name + " is a " + greeting + " Engineer";
}
var result = greet("software", "Sahil");
console.log(result);
function greet1(greeting1, name1) {
    return name1 + " is a " + greeting1 + " Engineer";
}
var result1 = greet1("software", "Sahil");
console.log(result1);
var result2 = greet1("software");
console.log(result2);
function Greet2(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
console.log(Greet2("Roy")); //OK, returns "Hello Steve!"
console.log(Greet2("Sheela", "Hi")); // OK, returns "Hi Steve!".
console.log(Greet2("Sheetal")); //OK, returns "Hello Bill!"
function Greet3(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
console.log(Greet3(undefined, "Sonu")); //returns "Hello Steve!"
console.log(Greet3("Hi", "Pooja")); //returns "Hi Steve!".
console.log(Greet3(undefined, "Vaibhav")); //returns "Hello Bill!"
var name5 = function (x, y) { return x + y; };
console.log(name5(10, 20)); //returns 30
var name6 = function (x, y) {
    return x + y;
};
console.log(name6(10, 20));
var print1 = function (y) { return console.log("YOYO is Back...!!" + y); };
print1(3);
var print2 = function (x, y) { return x + y; };
console.log(print2(3, 7));
var Employee1 = /** @class */ (function () {
    function Employee1(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empNo + " " + _this.empName); };
        this.empNo = code;
        this.empName = name;
    }
    return Employee1;
}());
var ro = new Employee1(1, "Sahil");
ro.display();

function display(Fname, Sname) {
    return Fname + Sname;
}
console.log(display(2, 5));
console.log(display("Sahil", "Singh"));
console.log(display(1, "Payal"));
function display2(a, b) {
    console.log(a + " " + b);
}
function dispaly2(a) {
    console.log(a);
}
display2("Sahil", "Singh");
// display2("Sahil");
function job(greating) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greating + " My name is: " + name.join(", ");
}
console.log(job("Hello", "Sahil", "Payal"));
console.log(job("HII..!", "Sonu", "Pooja"));
console.log(job("HII..!"));
var job2 = function (greating1) {
    var name1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name1[_i - 1] = arguments[_i];
    }
    return greating1 + " " + name1.join(", ") + "!";
};
console.log(job2("Hello", "Sahil", "Payal"));
console.log(job2("Hello"));
var key1 = { key: 1, value: "Sahil" };
console.log(key1);
var key2 = { key: 2, value: "Payal" };
console.log(key2);
function AddPeople(key, value) {
    console.log("Adding the People Key: " + key + " value is :" + value);
}
function UpdatingPeople(key, value) {
    console.log("Updating the People Key: " + key + " value is " + value);
}
var People_1 = AddPeople;
console.log(People_1(1, "Sahil"));
People_1 = UpdatingPeople;
console.log(People_1(2, "Pooja"));
var numArr = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[1]);
setTimeout(function () {
    console.log("Hello World");
}, 5000);
var sayHello = function (a) {
    return function () {
        console.log("Hello!" + a);
    };
};
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}
outside()(10); // returns 20 instead of 10
var myFunc = sayHello(3);
myFunc();
// Hello!
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}
console.log(outside()(10)); // returns 20 instead of 10

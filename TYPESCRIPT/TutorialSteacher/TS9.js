var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Emp = /** @class */ (function () {
    function Emp() {
        this.empId = 20;
        this.empName = "Sahil Singh";
    }
    return Emp;
}());
var person = new Emp();
console.log(person.empId + " " + person.empName);
var Emp1 = /** @class */ (function () {
    function Emp1(id, name) {
        if (id === void 0) { id = 30; }
        if (name === void 0) { name = "Payal Singh"; }
        this.empId = id;
        this.empName = name;
    }
    return Emp1;
}());
var person1 = new Emp1();
console.log(person1.empId + " " + person1.empName);
var Emp2 = /** @class */ (function () {
    function Emp2(id, name) {
        this.empId = id;
        this.empName = name;
    }
    return Emp2;
}());
var name1 = new Emp2(285, "Sahil Singh");
console.log(name1.empId + " " + name1.empName);
var name2 = new Emp2(450, "Payal Singh");
console.log(name2.empId + " " + name2.empName);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empcode;
        return _this;
    }
    Employee.prototype.displayName = function () {
        console.log(this.empCode + " " + this.name);
    };
    return Employee;
}(Person));
var emp1 = new Employee(1001, "Sopnil");
emp1.displayName();
var Employee5 = /** @class */ (function () {
    function Employee5(name, empcode) {
        this.name = name;
        this.empCode = empcode;
    }
    Employee5.prototype.display = function () {
        console.log("Employee name is: " + this.name + " Employee Code is: " + this.empCode);
    };
    return Employee5;
}());
var pro = new Employee5("Pooja", 635);
pro.display();
var Popo = /** @class */ (function () {
    function Popo() {
    }
    return Popo;
}());
var popo = { empCode: 123, name: "Roy" };
console.log(popo);
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.run = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log("A" + this.name + " is running " + speed);
    };
    return Car;
}());
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi(name) {
        return _super.call(this, name) || this;
    }
    Audi.prototype.run = function (speed) {
        if (speed === void 0) { speed = 150; }
        console.log("Audi started ");
        _super.prototype.run.call(this, speed);
    };
    return Audi;
}(Car));
var KIA = /** @class */ (function (_super) {
    __extends(KIA, _super);
    function KIA(name) {
        return _super.call(this, name) || this;
    }
    KIA.prototype.run = function (speed) {
        if (speed === void 0) { speed = 100; }
        console.log("KIA started ");
        _super.prototype.run.call(this, speed);
    };
    return KIA;
}(Car));
var newCar1 = new Audi("Audi");
var newCar2 = new KIA("KIA");
console.log(newCar1.run());
console.log(newCar2.run());

"use strict";
// export {}; //tst treats this file as module instaed of script
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// import {hello, good  from "./hello";
var hello_1 = require("./hello");
var name = "digambar welcome back to the team";
// console.log(name);
// variable declaration
var x = 10;
var y = 5;
var title = "Codevolution";
// variable types
var isBegginer = true;
var total = 100;
var place = "Belgaum";
var sentence = "my tite is ".concat(title);
// console.log(sentence);
var list1 = [1, 2, 3, 54];
var list2 = [11, 12, 13];
// console.log(list1);
// console.log(list2);
// let words : string[] = [1,2,3,"great"]  //gives error during compilation
var person = ["digamnar", 56];
// console.log(person);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var first = Color.Red;
var second = Color.Green;
// console.log(first);
// console.log(second);
// variable type unknown and any
var myVariable = 10;
myVariable = "digambar";
myVariable = true;
var newVar = "digambar";
// newVar.toUpperCase(); // error  newVar of type unknown
// console.log((newVar as string).toUpperCase());
// functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Digambar",
    lastName: "Deshawal"
};
// fullName(p);
// class
var Car = /** @class */ (function () {
    function Car(name, model) {
        this.carName = name;
        this.carModel = model;
    }
    Car.prototype.carDetails = function () {
        console.log("".concat(this.carName, " and ").concat(this.carModel));
    };
    return Car;
}());
//instance of class
var car1 = new Car("Tata", 1000);
var car2 = new Car("Mahindra", 200);
// console.log(car1);
// console.log(car2);
// Array of objects created using class
var cars = []; // objects created using class "Car" only can be added in Array of Cars
// cars.push(car1);
// cars.push(car2);
// console.log(cars)
cars.forEach(function (car) { return console.log((car.carName = "sumit"), car.carModel); });
// Access Modifier
// private : propety can be access and modified only iniside the class
// public  : property can be accessed and modified both inside and outside of the class
// protected  : property can be accesed within class and instance of class
var demo = /** @class */ (function () {
    function demo(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    demo.prototype.getDetails = function () {
        return this.x + this.y + this.z;
    };
    return demo;
}());
var demo1 = new demo(5, 6, 8);
// demo1.x  accesible
// demo1.y not accesible
// demo1.z not accesible
// subclass
var extendedDemo = /** @class */ (function (_super) {
    __extends(extendedDemo, _super);
    function extendedDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    extendedDemo.prototype.getPrivateMembers = function () {
        // only x and z are accesible not y
    };
    return extendedDemo;
}(demo));
// readOnly modifier
var Greet = /** @class */ (function () {
    function Greet(message) {
        this.msg = message;
    }
    Greet.prototype.modifyMessage = function () {
        console.log(this.msg);
        // this.msg="modified message"  cannot modifiy msg as its only readonly
        return this.msg;
    };
    return Greet;
}());
var greet1 = new Greet("initialmesage");
// console.log(greet1.modifyMessage());
// Generics
function test1(val) {
    return val;
}
// console.log(test1(6));
// console.log(test1("high"));
// console.log(test1(true));
function test2(val) {
    return val;
}
// console.log(test2("fd"));
// console.log(test2(6));
// generics with function
function test(val) {
    return val;
}
var userData = {
    name: "ram",
    age: "5"
};
console.log(userData);
// generics with class
var DemoClass = /** @class */ (function () {
    function DemoClass(a, b) {
        this.uName = a;
        this.age = b;
    }
    DemoClass.prototype.getPersonDetails = function () {
        console.log("".concat(this.uName, " +").concat(this.age));
    };
    return DemoClass;
}());
var person1 = new DemoClass("mahesh", 35);
var person2 = new DemoClass(25, "mahesh");
// Generic constraints
function anotherFunction(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
function anotherFunction1(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
// console.log(anotherFunction1(3, { type: "NoSQL", dbName: "mongoDB" }));
// generic constraints with class
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.studentName = name;
    }
    return Student;
}());
function display(obj) {
    console.log("".concat(obj.id, ",").concat(obj.studentName));
}
var st = new Student(2, "mahesh");
// display(st);
// typeof type operator
// console.log(typeof "mahesh");
var s = "string";
var n;
function f() {
    return { x: "10", y: 2 };
}
// modules
(0, hello_1.hello)();
// good();
(0, hello_1.good)();
var foo;
foo = "i am a string";
var name1 = foo; //foo only refers to type its not declared as value
var m = { name: "dig" };
var z = { name: "dig" };
m.name = "digambar";
// z.name="digambar"  //Error
// Types in TypeScript -custom types
// 1. Union type
var helloMsg = function (name) {
    return name;
};
var handleArtistResponse = function (response) {
    if (response.error) {
        console.log(response.error.message);
    }
    else {
        console.log(response.artists);
    }
};
var input = {
    artists: [{ name: "sumit" }],
    success: true,
    error: { message: "this is error" }
};
var myData = ["mahesh", 5];
function ABC(myInfo) {
    return myInfo;
}
function XYZ(myData) {
    return myData;
}
// #4 implements
// both interface and type can be implement same way
var somePoints = /** @class */ (function () {
    function somePoints() {
        this.fname = "ram";
        this.lnam = "patil";
    }
    return somePoints;
}());
var base = { x: 12, y: "string" };
// super calls
var BaseClass = /** @class */ (function () {
    function BaseClass(k) {
        this.num = k;
    }
    return BaseClass;
}());
var DerivedClass = /** @class */ (function (_super) {
    __extends(DerivedClass, _super);
    function DerivedClass(userName) {
        var _this = _super.call(this, 34) || this;
        _this.user = userName;
        return _this;
    }
    DerivedClass.prototype.getName = function () {
        console.log("".concat(this.num, " ").concat(this.user));
    };
    return DerivedClass;
}(BaseClass));
var classIntsance = new DerivedClass("digambar");
// classIntsance.getName()
// overriding methods
var Base1 = /** @class */ (function () {
    function Base1() {
        this.age = "dsvdsv";
    }
    Base1.prototype.greet = function () {
        console.log("hello Geek");
    };
    return Base1;
}());
var subclass1 = /** @class */ (function (_super) {
    __extends(subclass1, _super);
    function subclass1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    subclass1.prototype.greet1 = function (name) {
        if (name === undefined) {
            this.greet();
        }
        else {
            console.log("Hello ".concat(name, " ").concat(this.age));
        }
    };
    return subclass1;
}(Base1));
var instance1 = new subclass1();
// use case example
var userData1 = {
    name: "akash",
    id: 5,
    address: "bgm",
    age: 12
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(userData1, "address"));
console.log(getProperty(userData1, "age"));

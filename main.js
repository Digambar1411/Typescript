"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "digambar welcome back to the team";
// console.log(name);
// variable declaration
let x = 10;
let y = 5;
const title = "Codevolution";
// variable types
let isBegginer = true;
let total = 100;
let place = "Belgaum";
let sentence = `my tite is ${title}`;
console.log(sentence);
let list1 = [1, 2, 3, 54];
let list2 = [11, 12, 13];
console.log(list1);
console.log(list2);
// let words : string[] = [1,2,3,"great"]  //gives error during compilation
let person = ["digamnar", 56];
console.log(person);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let first = Color.Red;
let second = Color.Green;
console.log(first);
console.log(second);
// variable type unknown and any
let myVariable = 10;
myVariable = "digambar";
myVariable = true;
let newVar = "digambar";
newVar.toUpperCase(); // error  newVar of type unknown
console.log(newVar.toUpperCase());
// functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(4, 5));
function fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
    firstName: "Digambar",
    lastName: "Deshawal",
};
fullName(p);
// class
class Car {
    constructor(name, model) {
        this.carName = name;
        this.carModel = model;
    }
    carDetails() {
        console.log(`${this.carName} and ${this.carModel}`);
    }
}
//instance of class
let car1 = new Car("Tata", 1000);
let car2 = new Car("Mahindra", 200);
console.log(car1);
console.log(car2);
// Array of objects created using class
let cars = []; // objects created using class "Car" only can be added in Array of Cars
cars.push(car1);
cars.push(car2);
console.log(cars);
cars.forEach(car => console.log(car.carName = "sumit", car.carModel));
// Access Modifier
// private : propety can be access and modified only iniside the class
// public  : property can be accessed and modified both inside and outside of the class
// protected  : property can be accesed within class and instance of class
class demo {
    constructor(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
    }
    getDetails() {
        return this.x + this.y + this.z;
    }
}
const demo1 = new demo(5, 6, 8);
// demo1.x  accesible
// demo1.y not accesible
// demo1.z not accesible
// subclass
class extendedDemo extends demo {
    getPrivateMembers() {
        // only x and z are accesible not y
    }
}
// readOnly modifier
class Greet {
    constructor(message) {
        this.msg = message;
    }
    modifyMessage() {
        console.log(this.msg);
        // this.msg="modified message"  cannot modifiy msg as its only readonly
        return this.msg;
    }
}
let greet1 = new Greet("initialmesage");
console.log(greet1.modifyMessage());
// Generics
function test1(val) {
    return val;
}
console.log(test1(6));
console.log(test1("high"));
console.log(test1(true));
function test2(val) {
    return val;
}
console.log(test2("fd"));
console.log(test2(6));
// generics with function 
function test(val) {
    return val;
}
console.log(test(4));
console.log(test("4"));
console.log(test(true));
const userData = {
    name: "ram",
    age: 5
};
console.log(userData);
// generics with class
class DemoClass {
    constructor(a, b) {
        this.uName = a;
        this.age = b;
    }
    getPersonDetails() {
        console.log(`${this.uName} +${this.age}`);
    }
}
let person1 = new DemoClass("mahesh", 35);
let person2 = new DemoClass(25, "mahesh");

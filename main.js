"use strict";
exports.__esModule = true;
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
console.log(sentence);
var list1 = [1, 2, 3, 54];
var list2 = [11, 12, 13];
console.log(list1);
console.log(list2);
// let words : string[] = [1,2,3,"great"]  //gives error during compilation
var person = ["digamnar", 56];
console.log(person);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var first = Color.Red;
var second = Color.Green;
console.log(first);
console.log(second);
// variable type unknown and any
var myVariable = 10;
myVariable = "digambar";
myVariable = true;
var newVar = "digambar";
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
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Digambar",
    lastName: "Deshawal"
};
fullName(p);
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
var car1 = new Car("TATA", 1000);
var car2 = new Car("Mahindra", 200);
console.log(car1);
console.log(car2);

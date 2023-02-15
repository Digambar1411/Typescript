// export {}; //tst treats this file as module instaed of script

// import {hello, good  from "./hello";
import { hello, good as better } from "./hello";
let name = "digambar welcome back to the team";
// console.log(name);

// variable declaration
let x = 10;
let y = 5;
const title = "Codevolution";

// variable types
let isBegginer: boolean = true;
let total: number = 100;
let place: string = "Belgaum";
let sentence: string = `my tite is ${title}`;
// console.log(sentence);

let list1: number[] = [1, 2, 3, 54];
let list2: Array<number> = [11, 12, 13];

// console.log(list1);
// console.log(list2);

// let words : string[] = [1,2,3,"great"]  //gives error during compilation

let person: [string, number] = ["digamnar", 56];
// console.log(person);

// enum

enum Color {
	Red,
	Green,
	Blue,
}
let first: Color = Color.Red;
let second: Color = Color.Green;
// console.log(first);
// console.log(second);

// variable type unknown and any

let myVariable: any = 10;
myVariable = "digambar";
myVariable = true;

let newVar: unknown = "digambar";

// newVar.toUpperCase(); // error  newVar of type unknown
// console.log((newVar as string).toUpperCase());

// functions
function add(num1: number, num2: number): number {
	if (num2) {
		return num1 + num2;
	} else {
		return num1;
	}
}

// console.log(add(4, 5));
// console.log(add(4));  //gives error during compilation

// interface
interface Person {
	firstName: string;
	lastName: string;
}

function fullName(person: Person) {
	console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
	firstName: "Digambar",
	lastName: "Deshawal",
};

// fullName(p);

// class

class Car {
	carName: string;
	carModel: number;

	constructor(name: string, model: number) {
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

// console.log(car1);
// console.log(car2);

// Array of objects created using class

let cars: Car[] = []; // objects created using class "Car" only can be added in Array of Cars

cars.push(car1);
cars.push(car2);

// console.log(cars)

cars.forEach((car) => console.log((car.carName = "sumit"), car.carModel));

// Access Modifier

// private : propety can be access and modified only iniside the class
// public  : property can be accessed and modified both inside and outside of the class
// protected  : property can be accesed within class and instance of class

class demo {
	public x: number;
	private y: number;
	protected z: number;

	constructor(a: number, b: number, c: number) {
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
	readonly msg: string;

	constructor(message: string) {
		this.msg = message;
	}

	modifyMessage() {
		console.log(this.msg);
		// this.msg="modified message"  cannot modifiy msg as its only readonly
		return this.msg;
	}
}

let greet1 = new Greet("initialmesage");
// console.log(greet1.modifyMessage());

// Generics
function test1(val: number | string | boolean): number | string | boolean {
	return val;
}

// console.log(test1(6));
// console.log(test1("high"));
// console.log(test1(true));

function test2(val: any): any {
	return val;
}

// console.log(test2("fd"));
// console.log(test2(6));

// generics with function

function test<Y>(val: Y): Y {
	return val;
}

// console.log(test(4));
// console.log(test("4"));
// console.log(test(true));

// generics with interface

interface data<Y> {
	name: Y;
	age: Y;
}

const userData: data<string> = {
	name: "ram",
	age: "5",
};

console.log(userData);

// generics with class

class DemoClass<A, B> {
	uName: A;
	age: B;

	constructor(a: A, b: B) {
		this.uName = a;
		this.age = b;
	}

	getPersonDetails() {
		console.log(`${this.uName} +${this.age}`);
	}
}

let person1 = new DemoClass("mahesh", 35);
let person2 = new DemoClass(25, "mahesh");

// Generic constraints
function anotherFunction<T, U extends number>(val1: T, val2: U): object {
	return {
		val1,
		val2,
	};
}
console.log(anotherFunction(3, 5));

interface database {
	type: string;
	dbName: string;
}

function anotherFunction1<T, U extends database>(val1: T, val2: U): object {
	return {
		val1,
		val2,
	};
}
console.log(anotherFunction1(3, { type: "NoSQL", dbName: "mongoDB" }));

// generic constraints with class

class Student {
	id: number;
	studentName: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.studentName = name;
	}
}

function display<T extends Student>(obj: T) {
	console.log(`${obj.id},${obj.studentName}`);
}
let st = new Student(2, "mahesh");
display(st);

// typeof type operator

console.log(typeof "mahesh");

let s = "string";
let n: typeof s;

function f() {
	return { x: "10", y: 2 };
}

type p1 = ReturnType<typeof f>;

// keyof type operator

type Point = { x: number; y: string };
type S = keyof Point;

type Arrayish = { [n: number]: string };
type A = keyof Arrayish;

// template literals types
type msg = "world";

type greeting = `Hello ${msg}`;

type email = "gmail" | "outlook";
type unionEmail = `${email}_id`;

// string manipulation
type greeting1 = "Hellow World";
type greeting2_msg = Lowercase<greeting1>;
type greeting3_msg = Uppercase<greeting1>;
type greeting4_msg = Capitalize<greeting1>;
type greeting5_msg = Uncapitalize<greeting1>;

// indexed access types

type player = { name: string; age: number; alive: boolean };
type Age = player["age"];
type I1 = player["name" | "age"];
type I2 = player[keyof player];

// modules

hello();
// good();
better();

// declarative scope

type foo = {
	title: string;
};

let foo: string;
foo = "i am a string";

let name1 = foo; //foo only refers to type its not declared as value
// console.log(foo)
// console.log(name1)
type foo1 = {
	name: string;
};

// Readonly
type foo2 = Readonly<foo1>;

let m: foo1 = { name: "dig" };
let z: foo2 = { name: "dig" };
m.name = "digambar";
// z.name="digambar"  //Error

// Types in TypeScript -custom types

// 1. Union type

const helloMsg = (name: string | undefined) => {
	return name;
};

// console.log(helloMsg(3))   // gives error
console.log(helloMsg("Good Evening"));
console.log(helloMsg(undefined));

// 2.Intersection type

interface ErrorHandling {
	success: boolean;
	error?: { message: string };
}

interface artistsData {
	artists: { name: string }[];
}

interface artworksData {
	artwork: { title: string }[];
}

type artworksResponse = artworksData & ErrorHandling;
type artistsResponse = artistsData & ErrorHandling;

const handleArtistResponse = (response: artistsResponse) => {
	if (response.error) {
		console.log(response.error.message);
	} else {
		console.log(response.artists);
	}
};

let input = {
	artists: [{ name: "sumit" }],
	success: true,
	error: { message: "this is error" },
};

handleArtistResponse(input);

// *********** Interface vs Types **********
// #1. In terms of function and object

interface point {
	fname: string;
	lnam: string;
}

interface setPoint {
	(fname: string, lnam: string): void;
}

type word = {
	fname: string;
	lnam: string;
};

type setWord = (x: string, y: string) => void;

// #2 interface wont support  primitives, unions, and tuples.

//primitive
type mName = string;

type first = { fName: string };
type last = { lName: string };

//Union
type firstAndLast = first | last;

// tuple
type Data = [string, number];

const myData: Data = ["mahesh", 5];

// #3 Extend
// interface extend interface 
interface point1 extends point {address: string;}

// type extend type 
type word1 = word & {address: string;};

function ABC(myInfo: point1) {
	return myInfo;
}

function XYZ(myData: word1) {
	return myData;
}

console.log(XYZ({ fname: "amr", lnam: "patil", address: "pune" }));

console.log(ABC({ fname: "sumit", lnam: "patil", address: "delhi" }));

// interface extend 

type phone ={ mobile:number }

interface point2 extends phone {mobile: number}

// type extend interface

interface phone1 { mobile:number }

type word2 = phone1 & { address:string }

// #4 implements

// both interface and type can be implement same way

class somePoints implements point{
	fname="ram"
	lnam="patil"
}


// however class cannot imlememnt type of union type 
type a1 ={fname:string } | {lname:string }

// class b1 implements a1{
// 	fname="sumit1";
// 	lname:"patil";
// }

// #5 Merging

// interface can be defined multiple times, and will be treated as a single interface  
interface A2 { x:number}
interface A2 { y:string}

const base:A2 = {x:12,y:"string"}


// super calls
class BaseClass{
	
	num:number

	constructor(k:number){
		this.num=k
	}

}

class DerivedClass extends BaseClass{
	user:string;

	constructor(userName:string){
		super(34)  // used to invoke base class constructor
		this.user=userName
	
	}

	getName(){
		console.log(`${this.num} ${this.user}` )
	}
}

let classIntsance = new DerivedClass("digambar")
classIntsance.getName()

// overriding methods
class Base1{
	age="dsvdsv"
	greet(){
		console.log("hello Geek")
	}
	
}

class subclass1 extends Base1{
	greet1(name?:string){
		if(name===undefined){
			this.greet()
		}else{
			console.log(`Hello ${name} ${this.age}`)
		}
	}
}

let instance1 = new subclass1()
instance1.greet1()
instance1.greet1("digambar")
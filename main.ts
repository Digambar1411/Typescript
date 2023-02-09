export {}; //tst treats this file as module instaed of script
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
console.log(sentence);

let list1: number[] = [1, 2, 3, 54];
let list2: Array<number> = [11, 12, 13];

console.log(list1);
console.log(list2);

// let words : string[] = [1,2,3,"great"]  //gives error during compilation

let person: [string, number] = ["digamnar", 56];
console.log(person);

// enum

enum Color {
	Red,
	Green,
	Blue,
}
let first: Color = Color.Red;
let second: Color = Color.Green;
console.log(first);
console.log(second);

// variable type unknown and any

let myVariable: any = 10;
myVariable = "digambar";
myVariable = true;

let newVar: unknown = "digambar";

newVar.toUpperCase(); // error  newVar of type unknown
console.log((newVar as string).toUpperCase());

// functions
function add(num1: number, num2: number): number {
	if (num2) {
		return num1 + num2;
	} else {
		return num1;
	}
}

console.log(add(4, 5));
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

fullName(p);


// class

class Car{
    carName:string;
    carModel:number;

    constructor(name:string, model:number){
        this.carName=name
        this.carModel=model;
    }

    carDetails(){
        console.log(`${this.carName} and ${this.carModel}`)
    }
}


//instance of class
let car1 = new Car("Tata", 1000)
let car2 = new Car("Mahindra",200);

console.log(car1);
console.log(car2);



// Array of objects created using class

let cars:Car[]=[];  // objects created using class "Car" only can be added in Array of Cars

cars.push(car1);
cars.push(car2);


console.log(cars)

cars.forEach(car=>console.log(car.carName="sumit", car.carModel));

// Access Modifier

// private : propety can be access and modified only iniside the class
// public  : property can be accessed and modified both inside and outside of the class
// protected  : property can be accesed within class and instance of class

class demo{
	 public x:number;
	 private y:number;
	 protected z:number;

	constructor(a:number, b:number, c:number){
		this.x=a;
		this.y=b;
		this.z=c;
	}

	getDetails(){
		return this.x+this.y+this.z;
	}
}

const demo1 = new demo(5,6,8);

// demo1.x  accesible
// demo1.y not accesible
// demo1.z not accesible

// subclass
class extendedDemo extends demo{
	getPrivateMembers(){
		// only x and z are accesible not y
	
	}
} 

// readOnly modifier

class Greet{
	readonly msg:string;

	constructor (message:string){
		this.msg=message;
	}

	modifyMessage(){
		console.log(this.msg)
		// this.msg="modified message"  cannot modifiy msg as its only readonly
		return this.msg
	}
}

let greet1 = new Greet("initialmesage")
console.log(greet1.modifyMessage());

// Generics
function test1(val:number | string | boolean):number | string | boolean{
	return val
}

console.log(test1(6));
console.log(test1("high"));
console.log(test1(true));

function test2 (val:any) :any{
	return val
}

console.log(test2("fd"));
console.log(test2(6));



// generics with function 

function test<T>(val:T):T{
	return val
}

console.log(test(4));
console.log(test("4"));
console.log(test(true));

// generics with interface 

interface data<X,Y>{
	name:X;
	age:Y
}

const userData: data<string,number>={
	name:"ram",
	age:5
}

console.log(userData)


// generics with class

class DemoClass <A,B>{
	uName:A;
	age:B

	constructor(a:A, b:B){
		this.uName=a;
		this.age=b
	}

	getPersonDetails(){
		console.log(`${this.uName} +${this.age}`)
	}
}

let person1 = new DemoClass("mahesh",35);
let person2 = new DemoClass(25,"mahesh");


// Generic constaints
function anotherFunction<T,U extends number>(val1:T,val2:U):object{
	return {
		val1, val2
	}
}
console.log(anotherFunction(3,5))


interface database{
	type:string;
	dbName:string
}

function anotherFunction1<T,U extends database>(val1:T,val2:U):object{
	return {
		val1, val2
	}
}
console.log(anotherFunction1(3,{type:"NoSQL", dbName:"mongoDB"}))
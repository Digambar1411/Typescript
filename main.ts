export {}   //tst treats this file as module instaed of script
let name ="digambar welcome back to the team";
// console.log(name);

// variable declaration 
let x=10;
let y=5;
const title ="Codevolution"


// variable types
let isBegginer :boolean = true;
let total:number = 100;
let place:string ="Belgaum"
let sentence :string = `my tite is ${title}`
console.log(sentence)


let list1 :number[]=[1,2,3,54];
let list2 : Array<number> = [11,12,13]

console.log(list1)
console.log(list2)

// let words : string[] = [1,2,3,"great"]  //gives error during compilation

let person: [string,number]= ["digamnar",56]
console.log(person)


// enum

enum Color {Red, Green, Blue};
let first :Color = Color.Red;
let second :Color = Color.Green;
console.log(first);
console.log(second);

// variable type unknown and any

let myVariable: any =10;
myVariable="digambar";
myVariable=true;

let newVar : unknown= "digambar";

newVar.toUpperCase(); // error  newVar of type unknown
console.log((newVar as string).toUpperCase());
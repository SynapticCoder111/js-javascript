// Primitive 
// 7 types: String, Number Boolean , Null, Undefined , Symbol, BigInt

const score = 100;
const isLoggedIn = false;
const outsideTemp = null;
let id = Symbol('123');
let anotherid = Symbol('123');
let userEmail;

const bigNumber = 6788208499288392992898n
console.log(id);
console.log (anotherid);

console.log(id === anotherid);

// Reference  (Non Primitive)
// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "Prince",
    age : "22",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
// DataTypes and ECMA standards
"use strict"; // treats all JS code as newer version

// alert(4 + 5) we are using nodejs not browser.
let name = "Jexy"
let age = 65
let isLoggedIn = false;

// Below are primitive Datatypes
// number => 2 to power 53
// bigInt
// string => ""
// boolean => true/false
// null => it is a standalone value ut a dataType too and it's a representation of an empty value.
// undefined => value hasn't been assigned yet.
// symbol => unique.

// object
// console.log(typeof "Jexy");
// console.log(typeof null); // called as an object.
// console.log(typeof undefined);

const id = Symbol("1234")
const anotherid = Symbol("1234")
// console.log(id === anotherid);

const bigNumber = 907664376587697869n // bigInt

// Non Primitive DataTypes
// Array, Objects, Functions

const marvels = ["Captain", "Deadpool", "Beetle"];
let myObj = {
    name : "Steve",
    age : 34,
}

const myFunction = function (){
    // console.log("Hey there");   
}

// console.log(typeof myFunction);

let myName = "Antonian"

let myNamewould = myName
myName = "John"
// console.log(myName);
// console.log(myNamewould);

let user1 = {
    email:"fhgrig@google.com",
    upi_Id:"user@ybl"
}

let user2 = user1

user2.email = "john@google.com"
console.log(user1.email);
console.log(user2.email);




// singleton
// its an object of its own

// Object literals
// Object.create

const mySum = Symbol("Key1")
const jsUser = {
    name: "Aamir",
    [mySum]: "MyKey",
    age: 24,
    location: "Hyderabad",
    email: "aamir35@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySum]);

jsUser.email = "sameer34@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "sameer34@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hey there");
}

jsUser.greeting2 = function(){
    console.log(`This is what we've been doing, ${this.age}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


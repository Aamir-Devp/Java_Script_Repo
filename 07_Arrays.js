const years = ["2"]
const year = ["02"]
// console.log(years != year);

const cars = []
cars.push("BWW", "VOLVO")
// console.log(cars.length);

// console.log(cars[0]);

const myArray = new Array(1, 3, 2, 4, 5)
// console.log(myArray[2]);

// Array Methods.
// myArray.push(9)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);
// myArray.unshift(7)
// myArray.shift()
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(9));

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);

// Slice and Splice.

console.log("A ", myArray);
const myNew1 = myArray.slice(1, 3)

console.log(myNew1);
console.log("B ", myArray);

const myNew2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myNew2);




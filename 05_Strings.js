// Strings in JS

const name = "Maddy"
const weight = 87

console.log(`The name is ${name} and weight is ${weight}`);
// This is basically called as string interpolation in JS


// This is another way of declaring a string in JS
const newName = new String(`jonathan`)
console.log(newName[0]);
console.log(newName.__proto__);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(2)); // indexOf

const newString = newName.substring(0, 2) // cannot give -ve values
// This substring(start index, ending index) but the interesting part is is includes 
// strating index and excludes the ending index
console.log(newString);


const anotherString = newName.slice(-8, 4) // can give -ve values and here 4 is excluded
console.log(anotherString);

const newString1 = "  John   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://aamir.com/aamir%20sohail"
console.log(url.replace('%20', '-')) // what to replace with what
console.log(url.includes('aamir'));

console.log(newName.split('-'));











// console.log(2 > 1);
// console.log("2" > 1); // returns true because JS converts this into number
// whenever we datatypes make sure that it is of same type.

console.log(null > 0); // returns false
console.log(null == 0); // returns false
console.log(null >= 0); // returns true
// comparision converts null into a number treating it as a 0
// which is why null >= 0 is true and null > 0 is false

console.log("2" === 2); // returns false because it strictly check with the datatype 
// and doesn't convert it into number.




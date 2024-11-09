// Async functions
// function findSum(n){
//     let ans = 0
//     for(let i = 0; i<n; i++){
//         ans += i
//     }
//     return ans
// }

// function findSumTill100(){
//     return findSum()
// }

// setTimeout(findSumTill100, 1000)
// console.log("Hey there we have learnt Async function working");


// -----------------------------------------------------

// fs.readFile - to read file from your filesystem
// Fetch - to fetch some data from an API endpoint

const fs = require("fs")

// utf-8 is actually encoding which reads data in bytes
fs.readFile("file.txt", "utf-8", function(err, data){
    console.log(data);
    
})
// this will run first because it is asynchronous function
console.log("Now running");

let a = 0;
for(let i = 0; i<100000000; i++){
    a++;
}
console.log("Running after");

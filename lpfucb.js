// Loops, Functions and Callbacks in JS

// let sum = 0

// for(let i = 0; i<=100; i++){
//     sum += i
// }
// console.log(sum)

// function funcName(n){
//     let sum = 0
// for(let i = 1; i<=n; i++){
//     sum += i
// }
// return sum;
// }
// let sum = funcName(100);
// console.log(sum);

// let sum2 = funcName(200)
// console.log(sum2);

// function square(n){
//     return n * n;
// }
// function cube(n){
//     return n * n * n;
// }

// function sumOfSquares(a, b){
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1 + val2;
// }
// function sumOfcube(a, b){
//     const val1 = cube(a);
//     const val2 = cube(b);

//     return val1 + val2;
// }
// console.log(sumOfcube(2, 3));

function func1(a){
    return a * a;
}

function doSomething(a, b, fn){
    console.log(a);
    console.log(fn);
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2
}
const ans = doSomething(2, 2, function(n){
    return n * n * n;
})
console.log(ans);

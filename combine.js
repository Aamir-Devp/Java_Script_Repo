const arrOne = [1, 2, 3]
const arrTwo = [4, 5, 6]
// arrOne.unshift(1)
// arrOne.shift()
// unshift pulls from back and shift from the front
console.log(arrOne.concat(arrTwo))

// for(let i = 0; i<arrOne.length; i++){
//     console.log(arrOne[i])
// }

function myLog(str){
    console.log(str);
}
arrOne.forEach(myLog)
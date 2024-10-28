// const users = {
//     name: "Aamir", 
//     Age: 24, 
//     Gender: "Male"
// }

// const user = JSON.stringify(users)
// console.log(user);

const details = '{"name": "Aamir", "Age": 24, "Gender": "Male"}'

const other = JSON.parse(details)
console.log(other)
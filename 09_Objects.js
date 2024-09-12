// const tinderUser = new Object() // singleton object
// console.log(tinderUser);

// Non singleton object
const tinderUser1 = {}
tinderUser1.id = "123abd"
tinderUser1.name = "Jonathan"
tinderUser1.isLoggedIn = false

// console.log(tinderUser1);

const regularUser = {
    email : "user@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Mark",
            lastname: "Jonathan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

// Combining the objects.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}

// console.log(obj4);

// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// when we get values from database

const users = [
    {
    id: 1,
    email: "a@gmail.com"
   },
   {
   id: 2,
   email: "b@gmail.com"
  },
  {
  id: 3,
  email: "c@gmail.com"
 }
]

users[1].email
console.log(tinderUser1);

console.log(Object.keys(tinderUser1)); // to access the keys
console.log(Object.values(tinderUser1)); // to access the values
console.log(Object.entries(tinderUser1)); // to access the entries

console.log(tinderUser1.hasOwnProperty('isLoggedI'));


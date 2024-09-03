// Cannot change at all.
const account_ID = 14453243
let accountEmail = "sameer35@gmail.com"
var accountPassword = "Jexy@123"
accountCity = "Sweden"
let accountState; // not defined.

// account_ID = 234 not allowed.
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "sabshu@gmail.com"
accountPassword = "3565486"
accountCity = "Norway"
console.log(account_ID);
console.table([accountEmail, accountPassword, accountCity, accountState]);


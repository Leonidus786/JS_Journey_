const accountId = 30062000;
let accountEmail = "abhishek@google.com";
var accountPassword = "12345";
accountCity = "Gurugram";

// accountId = 1 // not allowed
accountEmail = "au@au.com";
accountPassword = "12345";
accountCity = "New Delhi";
let accountState;
// console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

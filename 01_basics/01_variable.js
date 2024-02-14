//exploring variables of js and investigating...

//investigory coding
//const, let , var;
const accountId =23456
let accountEmail = "shatl3434@gmail.com"

var accountPassword = "21345"

accountCity="Jaipur"

// added a new varialble

let accuntState="mr."; // output:undefined! unless assign a value.


//accountId change not allowed.

/*
Preffered not to use var because of issue
block scope and functional scope
*/

/*
var is functional scope

let, const block scope
*/

accountEmail="shatil873" 
accountPassword="12345"

accountCity="Banglaru"


console.log(accountId,accountEmail,accountPassword,accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accuntState]);

// Exploring var,let const using block scope and functional scope.

/*

var => is a functional scope
let,cons=> is a block scope

*/


// writing a fuction hello which will include these variables

function hello()
{

if(true){

var a= "JS"

let b="Java"

const c= "C++"

console.log("inside condigtional staement!");// block scope
console.log(a);
console.log(b); //all output ok
console.log(c);


}

console.log(" outside condigtional staement!");// fucntional scope
console.log(a);
console.log(b); //error
console.log(c);//error 
//b&c both is call outside from the block scope

}

hello();// caling the function


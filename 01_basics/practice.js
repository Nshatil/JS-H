//arry diclarare

let arr=[12,23,323]

//// checking the length

//console.log(arr.indexOf)

//console.log("push",arr.push("123"));
//console.log("after push",arr.length);
//console.log("new added index", arr[3],)

//push returns the total length of the array after executing.

//--------------- pop up method ------------

console.log("using pop method",arr.pop());

console.log("after using pop method",arr.length);

//---------Arrow function

const fun= (x,y)=> x+y;

console.log("Arrow function Example",fun(2,3));

//-------- Nested Function

function outer()

{

console.log("Outer!!");

function inner() {
    console.log("inner!!!");
}
inner();

}

outer();

//------function scope---

/*

Function scope has 2 rules.

Rule#1. Varables that are defined inside a function cannot be accessed from outside.

Rule#2. A function can access all the variable inside the scope it is defined.


*/

function dosome(){

var x=10;
let y=20;
const z=30;

console.log("example of functional scope!!!",x,y,z); //rule#1



}

dosome();


//console.log("example of functional scope!!!",x,y,z); will give an error as these vars can't be access outside it's function




var a=1;
let b=2;
const c=3;


function dosome1() {
    
console.log("example of function sco[e rule2", a,b,c); // The function can get access all the variable from the scope it's defined.

}

dosome1();

//--------- Closure------

function baire(x) {

    function bitre(y) {

        return x+y;
        
    }
    return bitre;
}

const testClosure= baire(10); // it'll store the x value

console.log(testClosure(10));// output is 20

////-------------- Call back function

//The function can be passed as parameter.

function foo(bar){

bar();



}

foo(function(){


console.log("bar");




})

// another way

function named(){


    console.log("Bar again!!!");



}

foo(named);

/*
1. recap of hoisting
2. scope chain
3. closures
4. this keyword
*/

// let y ; // y = undefined ;
// console.log(y);

/**
 * difference between `not defined` and `undefined`
 1. not defined is an error that will encountered when the variable is not present 

 2. undefined is a data type that will be given to the variables which are not intialsied 
 */

// scope means influence

/*
1. context scope 
    context : {
        global context
        functional context 
    }
2. block scope 
*/
// let a = 10;
// function callme() {
//   console.log(a);
//   var a = 200;
// }
// callme();
// var a = 10;
// callme();

/*
Explanation: 
1. global statements : 4
2. callme functional statements (local statements) : 2

partial hoisting: 
    variables during creation phase will be intialised
    with undefined valeus 
full hoisting: 
    variables during creation phase will be intialised 
    with the actual value

let (partially hoisted , TDZ)
const (partially hoisted , TDZ)
var (partially hoisted)
function (fully hoisted)
(used to create function type variables only)

let and const declared variables are block scoped
var, function declared variables are context scoped
*/
// function parent() {
//   let a = 200; // a = 200
//   let child = function () {
//     // child = #200
//     console.log(a);
//   };
//   return child; // #200
// }

// let a = 900;
// let result = parent(); // result = #200
// console.log(typeof result); // function
// result(); // #200()

// let b = 200 ;
// function callme(a) {
//   // a = #300
//   console.log(typeof a); // typeof #300 => function

//   let b = 100;

//   a(); // #300()
// }

// let x = () => { // x = #300
//   console.log(b);
// };

// callme(x); // callme( #300 )

// global: callme = #200, x = #300

// function callme() {
//   let a = 10;
//   let b = 100;
//   return () => {
//     console.log(a + b);
//   };
// }
// let b = 200;
// // let result = callme();
// // result();
// callme()();

// functions
// Hoisting
// scope chain
// a and b are called as parameters.
// function mul(a, b, c) {
//   // let a = 1, b = undefined, c = false  ;
//   if (a && b) {
//     // 1 && undefined = falsy
//     // 1 && !undefined
//     return 100;
//   }
//   return c;
// }

// mul(10, 20); // result = 200
// console.log(mul(1, undefined, false));

// console.log(1 && undefined);
/*
a function is a block of code which can take some data into it and do some performance inside it , and may return some data . 
*/

// functions in js are data types only

// function ab123() {
//   console.log("something");
// }

// let x = true; // boolean
// console.log(typeof x);
// console.log(typeof ab123);

/**
 * various ways of declaring functions
 * 1. function function_name() { // code }
 * 2. let x = function() { // code } // regular function
 * 3. let y = () => { // code } arrow function
 *
 */
// function a() {}
// let x = function () {};
// // anonymous functions
// let z = () => {};
// let y = true;
// z();
// console.log(typeof a); // funtion
// console.log(typeof x); // function
// console.log(typeof z); // function
// console.log(typeof y); // boolean

// Hositing
// let x = 200;
// let y = true;

// let z = (a, b) => {
//   console.log(a + b);
// };

// let result = x + y + z(x, y);

// console.log(result);

/*
every line of code in js is devided into
two parts 
1. global statement (not inside a function)
2. local statement  (not a global statement)


global context
    all the global statements are executed by the global context
local context
    all the local statements are executed by the local context .


    1. creation phase (hoisting phase)
    2. execution phase ( the actual execution of lines happens)
*/

/*
 To create variables js supports  4 types of keywords
function keyword is used to declare function datatype variables only
 1. let 
 2. const
 3. var 

* The behaviour of let and const is almost same except const declared variables must be intialised and can't re assigned.
*/

// const x = "abc";

// x += "xyz"; // x = x + "xyz"

// console.log(a);
// console.log(x);
// let x = 200;
// var a = 500;

// console.log(callme());
// function callme() {
//   let a = 20;
//   b = 300;
//   console.log(a + b);
// }
// console.log(callme);

// var x = 20;
// var x = 300; // x = 300

// const x = 20;
// const x = 300;

// let y = 500;
// function callme() {
//   let x = 200;
//   console.log(x + y);
//   var y = 100;
//   console.log(x + y);
// }
// callme();

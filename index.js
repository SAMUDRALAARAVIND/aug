// variables 
// CPU + RAM random access memory (16GB RAM laptop
// 8 GB RAM for my phone)

/*
Once the program execution is done by the CPU , what ever the data that cpu utilised in RAM will be erased 

RAM is stack of bytes
1 byte is 8 bits memory
1 bit 
0 bit

01000100 => 8bits => 1 byte
1byte = 8 bits
1KB = 1024 bytes
1MB = 1024 KB
1GB = 1024 MB


Memory is a Rack of bytes (boxes of bytes)
every byte will have a unique address
*/


// 1 + 1 => 2
// -
// -
// -
// 2 * 7 = 14

// identifiers are english names used in programming languages to hold data in it.

// let, const , var

// let a = 20; // 4 bytes
// console.log(a); // 20
// let b = 10; // 4 bytes of memory in the RAM ( 10 )
// console.log(b); // 10


// console.log(b);
// let b = 20; 

// datatypes 

// number  20, 20.0, 
// 0 - 1
// 10, -2, 19.3, .... infinite possible values
// let a = 20.4;
// console.log(typeof a)
// let b = false; // boolean data type
// // 1 | 0
// console.log(typeof b)

// all the data which is kept inside ' , " is a string type ``````````` ''''''' """"
// let x = 'wf0fiprwmffrgmg' ; // char 
// console.log(typeof x)

// for boolean true | false 
// for undefined => undefined
// let x;
// console.log(typeof x , x); // 90, 12, true, "abc"

// number, boolean, string, undefined

/*
Identifier declaration rules | variable naming convention

1. a variable should start with _ or alphabet or $
2. a variable can container numbers, _, $, and alphabets
*/


// operators

/**
 * 1. unary operator
 * 2. binary operators
 * 3. ternary operators
 * 
 */

// arithmatic operators +, -, *, / , %


// assignemnt operator

// let x = 20;

// logical operators
// &&(and), || (or), !(not)

/**
 * and
 * A        B       R
 * true     true    true
 * true     false   false
 * false    true    false
 * false    false   false
 * 
 * or
 * 
 * A        B       R
 * true     true    true
 * true      false  true
 * false    true    true
 * false    false   false
 * 
 * not
 * !true => false
 * !false => true
 */

// console.log(false || false)

let a = 20; // number
let b = "a" ; // string
// "23" => 23
// console.log(Number(undefined))
// arithmatic operators casts type of operands internallyto number type
// console.log(a * b); // console.log(a * Number(b))
// number * string => 20 * NaN = NaN
// console.log(2 * undefined) // 2 * Number(undefined) => 2 * NaN = NaN
// number * boolean =

// console.log(2 - "-2") // 2 - Number("2") = 2 - 2 = 0

// not all arithmatic operators do the internal typecasting
// + => behaves as both arithmatic(addition) and concatenation operator
// console.log(String(undefined), "10", 10)
// operand
// 10 => "10"
// true => "true"
// undefined => "undefined"
// 10.2 => "10.2"
// console.log(2 + "5") // 25
// string + string 
// number + number => arith
// string + x => string + String(x) = concatenanation

// console.log(undefined + "a")
// x + string => String(undefined) + "10" => "undefined" + "10" = undefined10

// console.log(2 + +"5") // 25 invalid

// console.log(2 + 2 + "2" + 2)
// 2 + 2 + "2" + 2 => 4 + "2" + 2 = "42" + 2 = 422

// console.log(2 + undefined) // arithmatic
// 2 + Number(undefined) = 2 + NaN = NaN


// string / string
// console.log(typeof Infinity) //  Number("4") / Number(false) = 4 / 0 = infi
// NaN, Infinity

// 4 / ( 3 / 0) = 4 * 0 / 3 = 0

// console.log("2" / "4") // 2 / 4 => 0.5


// && (and => logical operator)

// console.log(Boolean())
// console.log("0" && "20")
// true && x
// Boolean("10") => true

// a => any
// b => any

// console.log("2" && 4)

// +, -, *, /, %

// conditional statements

// if("" && 10){ // "" => false
//     console.log("hello")
// }
// else if(undefined || ''){ // "" => falsy
//     console.log("second")
// }
// else if(undefined || (0 + "")){ // undefined || "0" => truthy
//     console.log("third")
// }
// else {
//     console.log("final")
// }

// if("0"){ // "0" => truthy
//     console.log("djjd")
// }
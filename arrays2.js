// let arr = [ 3, 4, 5 ] ;
// console.log(arr[100])
//          0  1  2
// let sum = 0; 

// for(let i = 0 ; i < arr.length; i++){
//     sum+= arr[i];
// }
// for, while, do while [ native loops ]
// for in, for of [ native loops ]

// `for in` loop is used to iterate on keys of a data structure
// `for of` loop is used to iterate on values of a data structure.

// console.log(arr["0"])
// for(let i in arr) {
//     // i points to key of arr
//     console.log(i, arr[i]) // 0 3 , 1 4 , 2 5
// }
// for(let i of arr) {
//     console.log(i) // 
// }

// 1 47
// "name" 117
// co


// let obj = {
//     100: "xyz",
//     "course": 'BTech', // "course"
//     "name": 'aravind', // "name"
//     "company": 'Company', // "company"
//     1: 192, // "1"
//     "true": 192882 , // "true"
//     "abc-xyz": 2892,
//     10: "abc"
// } ;

// for(let i in obj){
//     // i = "name", "course", "company"
//     // obj["name"], obj["course"], obj["company"]
//     console.log(i, typeof i) 
// }

// let x = "name" ;
// // obj[x] = obj["name"] = "aravind"
// console.log(obj.name, obj[x])
// console.log(obj.abc) 
// for(let i in obj){
//     // i = "name", "course", "company"
//     // obj["name"]
//     console.log(obj[i]) // name, course, company 
// }

// for(let i of obj){
//     console.log(i)
// }

// console.log(typeof [1, 2, 3])

/*
Data types are devided into two sections 

1. primitive data types
    number, string, boolean, undefined
2. non-primitive data types.
    objects

RAM
Stack => primtive data types will be stored.
Heap  => non primitive data types will be stored.
*/

// let a = 2 ; // primitive Stack

// let b = [2] ; // non primitive , Heap

// identifiers are always stored in stack memory.
// let a = 200; // primitive => Stack 

// let b = [ 2, 3, 4] ; // non primitive  => Heap

// // console.log(b[0]) // b = #100 , 2
// b[0] = 183 ;  // b = #100

// let c = true ; // primitive => Stack 

// let d = { a: 10, b : 20} // non primitive => Heap

// console.log(d.a) // d = #200 , 10



// Strings 

// let x = "aravind" ; // string is an array of characters
// let y = [4, 5, 10] ;

// console.log(y.length) // 5
// console.log(x.length) // 'r', "r"

// y[0] = 82 ;

// console.log(y) // [ 82, 5, 10]
// strings are immutable
// x[0] = "A" ; // "aravind" => "Aravind"
// console.log(x)
// strings are almost like arrays 




let firstName = "Vikas"
let lastName = "Jat" ;
let age = 22 ;
let course = "MBA" ;
// I am Vikas Jat. Having age 20, studying BTech

// let fullName = firstName + " " +lastName;
// // // console.log(fullName)

// console.log("I am " + fullName +". Having age "+age+", studying "+course)

// let sentence = `I am ${fullName}. Having age ${age + 20}, studying ${course}`; // Template String


// == , === js 

// console.log(2 == 2) ; //  true
// console.log(2 === 2) ; // true
// console.log("5" === 5) //
 // value of "5" is equal to value of 5
 // dataType of "5" is not equal to dataType of 5
// string , number
// console.log("5" == 5) // string , number

// console.log(true == 1) ;//
// console.log(true === 1) ; // boolean === number => false



// Methods on Strings: 

let str = "abc$mno$xyz" ;
 // abc , mno, xyz
// let fragments = str.split("b") ; // "$" => delimeter
// console.log(fragments)

let url = "https://google.com/search?q=abc&username=aravind"

/*
    {
        q: "abc",
        username: "aravind"
    }

https://google.com/search?q=abc&username=aravind
split("?")
["https://google.com/search", "q=abc&username=aravind"]

paramters = "q=abc&username=aravind"
split("&")
["q=abc", "username=aravind"]

"q=abc"
split("=")

let arr = ["q", "abc"]
obj[ arr[0] ] = arr[1]
obj["q"] = "abc" 
{
    "q" : "abc"
}



*/
let obj = {} ;


// obj.q = "abc"
// obj[ "q" ] = "abc"
// let arr = "x" ;
// // obj.arr = 10 ; // { arr: 10}
// obj["x"] = 10

// let frags = url.split("?"); // [ ] 
// let parameters = frags[1] ;
// let values = parameters.split("&");
// // ["q=abc", "username=aravind"]
// for(let i =0  ; i < values.length; i++){
//     let arr = values[i].split("="); // "q=abc"
//     // arr = ["q", "abc"]
//     // obj[ arr[0] ] = arr[1]
//     // obj[ "q" ] = "abc" ;
//     obj[ arr[0] ] = arr[1]
// }
// // let str1 = "abc$efg" ;
// console.log(obj)

// console.log(str1.split("$"))

let map = {
    "Virupaksha Temple": 'The Virupaksha Temple',
    'Victoria Memorial' : 'Victoria Memorial' ,
    'Tajmahal' : 'Tajmahal'
}

let bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
// ["Virupaksha Temple' , 'Victoria Memorial', 'Tajmahal']

// ["Tajmahal", "Victoria Memorial", "Virupaksha Temple"]
// [ map["Tajamahal"], map["Victoria Memorial"], map["Virupaksha Temple"] ]
//  ["Tajmahal", "Victoria Memorial", "The Virupaksha Temple"]


// [4, 2, 12] / => [2, 4, 12]
// comparision 
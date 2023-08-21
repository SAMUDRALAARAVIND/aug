/**
 * Higher order functions ( array methods)
 * JSON methods
 * spread operator, destructing
 * Date
 * Event loop , callback queue and microtask queue
 *
 * Upcoming :
 * Async js
 * promise , promise chaining , async/await
 * fetch API
 */

// a function that returns or may take another function as an argument is called higher order function

// callme is an higher order function
// function callme() {
//   return () => {};
// }

// let result = callme();

// x is callback function and callme is higher order function
// function callme(x) {
//     // x
//     console.log(typeof x)
// }
// callme(() => {
//     console.log("some function")
// })

/*
 Higher order functions :  forEach, map , filter and reduce
    1. forEach is just used to iterate on the array and returns nothing.
    2. map function is also used for iterating on the array and it always returns another array of same length.
    3. filter method is also used for iteration on the array and it always returns an array of any size.
*/

// let arr = [3, 4];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// function forEach(p) {
//   // p = #400
//   p(3, 23, 45); // #400(), x()
// }

// let x = (a, b, c) => {
//   // #400
//   console.log(10, a, b, c);
// };

// forEach(x); // forEach(#400)

// function forEach(p) {
//   // p = global(x)
//   for (let i = 0; i < arr.length - 1; i++) {
//     p(arr[i], i, arr); // (3, 0, [3, 5])
//     // (5, 1, [3, 5])
//   }
// }
// const x = (element, index, list) => {
//   console.log(element, index, list);
// };
// forEach(x);
// let sum = 0;
// arr.forEach((element, index, list) => {
//   sum += element;
// });
// console.log(sum);

// function map(p) {
//   // p = function
//   let aggregatedArray = []; // [] => [3] => [3, 6] => [3, 6, 6]
//   for (let i = 0; i < arr.length; i++) {
//     let value = p(arr[i], i, arr);
//     // p(4, 2, [3, 5, 4]) => value = 6
//     aggregatedArray.push(value);
//   }
//   return aggregatedArray; // [3, 6, 6]
// }

// let result = map((element, index, list) => {
//   // element = 4, index = 2, list = [3, 5, 4]
//   return element + index; // 4 + 2 = 6
// });
// let result = arr.map((element, index, list) => {
//   return element + index;
// });

// console.log(result); // [3, 6, 6]

// let result = arr.map((element, index, list) => {
//   console.log(element, index, list);
//   return element + index;
// });
// console.log(result);

// let arr = [3, 5, 4, 7, 8];
// ///        f  f  t  f  t
// // filter all the even numbers

// let result = arr.filter((element, index) => {
//   return element % 2 !== 0; //
// });

// console.log(result);

// let arr = [3, 5, 4];

// reduce(function, intialValue);
// let result = arr.reduce((previousValue, element, index) => {
//   // first Iteration: prev = 0, elment = 3, index = 0
//   // returned value in the first iteration = undefined

//   // second iteration = prev = undefined,  element = 5, index = 1

//   // 1st iter = prev = 0, element = 3, index = 0
//   // 1st returned value = 3 + 0 = 3

//   // 2nd itr = prev = 3, element = 5, index = 1
//   // 2nd itr rturned value  = 3 + 5 = 8

//   // 3rd itr = prev = 8, element = 4, index = 2
//   // 3rd itr returned value =  8 + 4 = 12
//   console.log(previousValue, element, index);
//   return element + previousValue;
// }, 0);

// console.log(result); // 12

// let arr = [3, 5, 4];

// let result = arr.reduce((prev, element, index) => {
//   //1st itr =  prev = 3, element = 5, index = 1
//   // 1st itr = 3 + 5 = 8

//   // 2nd itr = prev = 8, element = 4, index = 2
//   // 2nd itr = 8 + 4 = 12
//   console.log(prev, element, index);
//   return prev + element;
// });

// console.log(result); // 12

// let arr = [3, 4, 5];
// [3, 4, 5] => [9, 12, 15] => [12]

// multiply all the numbers with 3 and after that return the even numbers

// let result = arr
//   .map((element, index) => element * 3)
//   .filter((element) => element % 2 == 0);

// console.log(result);

// JSON methods
// JSON javascript object notation

// {
//     key: value
// }

// server - client

// json
// let loginInfo = {
//   email: "aravind@gmail.com",
//   password: "27382",
// };

// let json = JSON.stringify(loginInfo);
// console.log(json);
// const obj = JSON.parse(json);
// console.log(obj);

// FE - BE
//        stringification
// object => string data => network =>

//             parse
// string data =>  object

// console.log(json);

// Spread Operator

// let a = [2]; // #100

// let b = []; // #200
// for (let i in a) {
//   b.push(a[i]);
// }
// a[0] = 90;
// console.log(a, b);

// spread operator ...
//

// let obj1 = { a: 1, b: 2 };
// let obj2 = { ...obj1 };
// console.log(obj2);
// {...obj1} = {a: 1, b: 2}

// function callme(a, b) {
//   console.log(a, b);
// }

// callme(...[10, 20]); // callme(10, 20)

// ...[10, 20] => 10, 20

// Destructuring

// let obj = {
//   fullName: {
//     firstName: "Aravind",
//     lastName: "Samudrala",
//   },
//   b: 20,
//   c: 100,
// };

// let { b: x } = obj;
// console.log(x);

// let {
//   fullName: { firstName },
// } = obj; // {}
// console.log(firstName);

// let arr = [10, 20, 30];

// let [, b, c] = arr;

// console.log(b, c);

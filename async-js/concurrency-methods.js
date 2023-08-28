// Promise concurrency methods
// Auction status app ( complete frontend app)

// static methods in java | javascript
// static methods should be called by using the classnames and not by using the instances.

// class Test {
//   static callme() {
//     console.log("Something");
//   }
// }

// new Test().callme();

// function generatePromise(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject({ delayValue: delay });
//     }, delay);
//   });
// }
// // {delayValue : 1000}, {delayValue: 2000} , "aravind"
// let x = Promise.all([
//   generatePromise(2000),
//   generatePromise(3000),
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("aravind");
//     }, 5000);
//   }),
// ]);

// console.log(x); //

// x.then((data) => {
//   console.log("x is resolved", data);
// });

// x.catch((data) => {
//   console.log("x is rejected", data);
// });

// x is a promise

/**
 * 1. Promise.all
 * Takes a list of promises returns another promise which will resolve when all the promises are resolved and rejected when atleast one promise gets rejected.
 */

// let x = Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("aravind");
//     }, 3000);
//   }),

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Hardik");
//     }, 2000);
//   }),
// ]);

// x.then((data) => {
//   console.log(data);
// });

// x.catch((data) => {
//   console.log(data);
// });

/*
let x = Promise.race()
1. this method takes a list of promises and figures out the earliest promise which is gets settled down. 
2. If the earlist statemet gets resolve then x will also be resolved vice versa.
*/

// let x = Promise.allSettled([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("aravind");
//     }, 3000);
//   }),

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Hardik");
//     }, 2000);
//   }),
// ]);

// //

// x.then((data) => {
//   console.log("x is fulfilled", data);
// });

/**
 * let x = Promise.allSettled()
 * this method will also take a list of promises and returns another promise(x)
 * x will be fulfilled when all the promises gets settled down( rejected | resolved)
 * x will be fulfilled with an array objects where each object will represent the status and data of the promise which get's settled down.
 */

// let x = Promise.any([
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("aravind");
//     }, 2000);
//   }),

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hardik");
//     }, 2000);
//   }),
// ]);

// x.then((data) => {
//   console.log("x is resolved", data);
// });

// x.catch((data) => {
//   console.log("x is rejected", data);
// });

/**
 * let x = Promise.any()
 * this method will take a list of promises and returns another promise .
 * x will be resolved with the earliest promise which gets resolved.
 * x will rjected with an AggregateError when none of the promises will get resolved.
 */

// let x = Promise.resolve(20);
// console.log(x);

// let y = Promise.reject(10);
// console.log(y);

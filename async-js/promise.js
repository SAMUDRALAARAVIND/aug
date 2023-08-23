/*

I promised to give the pen to vikas by tomorrow 12:00PM

possible states of the promsie: 

before 12:00PM( if the pen is given)     promise will become `fullfilled`.
before 12:00PM( if the pen is not given) promise will be in the `pending` state 
>= 12:00 PM (if the pen is given)        promise will be `fullfilled`
>= 12:00 PM (if pen is not given)        promise will be `rejected`

Error scenarios:

Every Promise will have 3 possible states ( pending, rejected, fullfilled )

as soon as the promise is created it's state will be <pending>

a promise's state can be mutated from 
<pending> to <fullfilled>
<pending> to <rejected>
<pending> forever

Once a promise gets `settled` ( reached either to fullfilled or rejected) 
then the promise cann't be mutated to some other value .


How many maximum states a promise can go through ?
2
ans: (pending, fullfilled) or (pending , rejected).
*/

/*
Promise in js is a Object
*/

// class User {
//   constructor(name, age) {
//     // this = { } = #200
//     console.log("inside the constructor", this); // {}
//     this.name = name; // {name: "Aravind"}
//     this.age = age; // {name: "Aravind", age: 45}
//     console.log(this); //
//   }
// }

// let user = new User("Aravind", 45); // #200
// console.log(user);

// console.log(typeof Promise); // constructor function

// The callback function passed as an argument inside the Promise class is called as executor function.

// class Prom {
//   constructor(executor) {
//     executor(
//       () => {},
//       () => {}
//     );
//   }
// }

// function executor(resolve, reject) {
//   console.log(typeof resolve, typeof reject);
// }

// let promise1 = new Prom(executor);

// function executor(resolve, reject) {
//   resolve(); // since resolve is a function i can call it.
// }
// // The executor will be called inside the constructor Promise by passing two other function back to executor invocation.
// let promise = new Promise(executor);

// console.log(promise); // every promise will have a state

// when resolve function is called the state of the promise mutates from pending to fullfilled.

// when reject function is called the state of the promise mutates from pending to rejected.

// when ever a promise gets settled (fullfilled or rejected) the promise should be given some data

// let promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(promise);
//     resolve(true);
//     console.log(promise);
//   }, 1000);
//   console.log(2);
// });

// console.log(promise); // <pending>

// Question expect the output of below code :
// let p = new Promise((resolve, reject) => {
//   queueMicrotask(() => {
//     console.log(p); // p <rejected> 20
//     resolve(10); // has no effect
//     console.log(p); // p <rejected> 20
//   });
//   reject(20); // p <rejected> 20
// });

// console.log(p); // <rejected> 20

// Question : Expect the output of below code.

// let prom = new Promise((resolve, reject) => {
//   queueMicrotask(() => {
//     setTimeout(() => {
//       console.log(prom);
//       resolve(29);
//     });
//   });

//   setTimeout(() => {
//     queueMicrotask(() => {
//       console.log(prom);
//       reject(34);
//     });
//   });
// });

// console.log(prom);

function supermarket(prices, n, k) {
  prices.sort((a, b) => a - b);
  //   [1, 2, 3, 4, 5]
  console.log(prices);
  let sum = 0;
  for (let i = 2; i <= 2 + k - 1 && i < n; i++) {
    sum += prices[i];
  }
  return sum;
}

let result = supermarket([4, 1, 2, 3, 5], 5, 2);

// [1, 2, 3, 4, 5]

console.log(result);

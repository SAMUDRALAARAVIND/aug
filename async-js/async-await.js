// let prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject({ name: "aravind" });
//   }, 2000);
// });
// prom <fullfilled> {name: "aravind"}

// prom <rejected> {name: "aravind"}
// prom
//   .then((data) => {
//     console.log("upon resolve of prom");
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data); // {name: "aravind"}
//   });

// x <fullfilled> undefined
// x <rejected> {name: "aravind"}
// x.then((data) => {
//   console.log(data); // undefined
// });

// x.catch((data) => {
//   console.log(data); // {name: "aravind"}
// });

/**
 * Error handling ( try , catch and finally)
 * async/await (very important)
 * Concurrency methods of promise.
 */

// try {
//   console.log(2);
//   console.log(a);
//   console.log(1);
// } catch (error) {
//   console.log(error);
//   console.log(error.message);
//   console.log(error.name);
//   console.log(error.stack);
// }

// console.log(20);

// function callme() {
//   console.log(2);
//     // console.log(a);
//   throw new Error("Some custom error");
//   console.log(1);
// }

// console.log(0);
// try {
//   callme();
// } catch (e) {
//   console.log(e);
// }
// console.log(10);
// 0 , 2, 1, 10

// async-await

// console.log(1);

// setTimeout(() => {
//     console.log(2)
// })

// await L1

// async function callme() {
//   console.log(88);
//   console.log(34);
//   let x = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
//   console.log(x);
//   console.log(2);
//   return;
// }
// console.log(19);
// let prom = callme(); // x = 200
// console.log(prom); // <pending>
// console.log(18);
// x.then((data) => {
//   console.log(data); // true
// });

// x.catch((data) => {
//   console.log(data);
// });
// // console.log(x);
// console.log(192);

// async function callme() {
//   // position : 2
//   console.log(1);
//   let x = await new Promise((resolve) => {
//     console.log("immediately");
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//     // after resolving the async function context will be pushed into microtask queue.
//   });
//   console.log(x); // 10
// }

// console.log(0);
// let p = callme(); // Promise<pending>
// console.log(p);
// console.log(3);

/**
 * 0
 * 1
 * immediately (prom resolve with 10)
 * pending
 * 3
 * 10
 */

// async function callme() {
//   console.log(1);
//   return new Promise((resolve, reject) => {
//     resolve(340);
//   });
//   // when async function returns a promise the promise settled value will be given as settled value of the promise x ( returned implicitly by the async function)
// }
// // async returns a promise
// let x = callme();
// x.then((data) => {
//   console.log(data, "then"); // 340 then
// });
// x.catch((data) => {
//   console.log(data, "catch"); // 10
// });
// console.log(x); // pending
// console.log(20); // 20
// x promise will be fulfilled with the returned value by callme();

const button = document.getElementById("btn");
const text = document.getElementById("text");

// Solution to callback hell
// {fontSize: 16px}
// button.addEventListener("click", () => {
//   text.style.fontSize = "20px";
//   setTimeout(() => {
//     text.style.color = "red"; // closure
//     setTimeout(() => {
//       text.style.backgroundColor = "green";
//     }, 4000);
//   }, 4000);
// });

// function delay(number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, number);
//   });
// }

// async function callbackHeaven() {
//   text.style.fontSize = "20px";
//   await delay(3000); // 3s
//   text.style.color = "red";
//   await delay(1000); // 1s
//   text.style.backgroundColor = "green";
// }

// button.addEventListener("click", callbackHeaven);

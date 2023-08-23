/**
 * Async Programming
 * 1. Event loop
 * 2. callback queue
 * 3. microtask queue .
 */

/**
 * first
 *
 */
// console.log(typeof window.setTimeout);

// console.log(0); // (1)

// setTimeout(() => {
//   console.log(1);
// }, 2000);
// console.log(2);
// for (let i = 0; i < 10e9; i++) {
//   // 8.5s
// }
// console.log(3);
// console.log(4); // (2)

/**
 * 1. eventloop and callback queue are software components inside the js engine just like the callstack.
 * 2. The task of event loop is to push the methods which are waiting in the callback queue , into the callstack whenever callstack becomes empty.
 */

// let a  = 10;
// setTimeout(() => {
//     console.log(a)
// }, 1000)
// console.log(a);
// a = 20 ;
// console.log(a)

// setTimeout(() => {
//   console.log(1);
// });
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   });
//   console.log(4);
// }, 1000);
// console.log(3);

// setTimeout(() => {
//   console.log(0);
// });
// console.log(1);
// queueMicrotask(() => {
//   console.log(2);
// });
// console.log(3);

// setTimeout(() => {
//     console.log(1)
// })
// console.log(2)
// setTimeout(() => {
//     console.log(3)
// })
// for(let i = 0; i < 10e9; i++){
//     // takes almost 8.5 seconds
// }
// queueMicrotask(() => {
//     console.log(4)
// })
// console.log(5)

// DOM

// const container = document.getElementById("container");

// console.log(container.getAttribute("data-abc"));
// container.setAttribute("data-password", "abc@123");

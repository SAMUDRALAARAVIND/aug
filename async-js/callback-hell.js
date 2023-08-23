/*
1. callback hell 
2. Promises
*/

// queueMicrotask(() => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//     }, 1000)
// })

// setTimeout(() => {
//     console.log(3)
// }, 2000)

/*
 we have bold text inside html, button
when user clicks on the button
1. increase the fontSize to 20px;
2. after one second of increasing font size change the color to red
3. after one second of changing the color to red add the background color (green).
*/

// const button = document.getElementById("btn");
// const text = document.getElementById("text");

// button.addEventListener("click", () => {
//   text.style.fontSize = "20px";
//   setTimeout(() => {
//     text.style.color = "red"; // closure
//     setTimeout(() => {
//       text.style.backgroundColor = "green";
//     }, 3000);
//   }, 3000);
// });

// L1;
// L2;
// L3;

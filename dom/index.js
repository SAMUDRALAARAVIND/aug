// function parent() {
//   console.log(b);
//   if (true) {
//     let a = 200;
//     var b = 100;
//     console.log(a + b);
//   }
//   console.log(b);
//   console.log(a);
// }
// let b = 10,
//   a = 56;
// parent();

// console.log(a);

// if (true) {
//   let func = () => {
//     console.log(a);
//   };
//   var a = 100;
//   func();
// }
// console.log(a);

// let htmlDoc =  {
//     html: {
//         tagName: "html",
//         children: [
//             {
//                 tagName: "head",
//                 children: [
//                     {},{},{},{}
//                 ]
//             },
//             {
//                 tagName: "body",
//                 children: [
//                     {
//                         tagName: "div",
//                         id: "container",
//                         children: [
//                             {},
//                             {},
//                             {
//                                 tagName: "input",
//                                 type: "number",
//                                 value: 23,
//                                 disabled: true,
//                                 name: "age"
//                             }
//                         ]
//                     },
//                     {}
//                 ]
//             }
//         ]
//     }
// }

// let div = {
//   tagName: "div",
//   id: "container",
//   children: [
//     {},
//     {},
//     {
//       tagName: "input",
//       type: "number",
//       value: 23,
//       disabled: true,
//       name: "age",
//     },
//   ],
// };
// window.alert("Some message");
// latitude
// :
// 12.9529218
// longitude
// :
// 77.7022314
// window.navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position);
// });

// console.log(document);

/*
document API has the control on the DOM tree


using document API(Application Programming interface);
1. we can extract the references from the dom tree
2. we can do manipulations on dom tree.
*/

/*
To extract the reference / address of a html element (or) dom node we can use the following methods.

1. getElementById
*/

// console.log(typeof document.getElementById);

// const result = document.getElementById("test");
// // result = #200
// console.log(result.type); // "checkbox"
// result.type = "number";
// result.disabled = false;
// console.log(result.type); // "number"
// const bold = document.getElementById("talib");
// console.log(bold.style);

// const obj = {
//   name: "aravind",
// };

// obj.name = "skdkdk"; allowed
// obj = "dvfkvk"; not allowed

/*
Methods to retrive the references of dom nodes / html elements 

1. document.getElementById
    extracts based on id of the html element
2. document.getElementsByClassName
    extracts based on class Name 
3. document.getElementsByTagName 
    extracts based on tag name 
4. document.querySelector 
    extracts based on css selector 
5. document.querySelectorAll
    extracts based on css selector 
*/

// var elements = document.getElementsByClassName("naveen");

// console.log(elements[0]);

// console.log(elements[1]);

// let spanElements = document.getElementsByTagName("span");
// console.log(spanElements);

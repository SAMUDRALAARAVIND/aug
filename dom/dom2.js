// by using the id of elemtn
// const input = document.getElementById("test");
// console.log(input.type);

// by using the className of the elments
// const elements = document.getElementsByClassName("naveen");
// console.log(elements[1]);

// by using the tagName of the elements
// const elements = document.getElementsByTagName("span");
// console.log(elements.length);

// by using the css selectors
// const element = document.querySelector("span");
// console.log(element);

// const elements = document.querySelectorAll("span");
// console.log(elements.length);

/*
DOM Manipulations : 

1. addition of a new node into the DOM tree .
2. deletion of an existing node from the DOM tree .
3. manipulation or changing the properties of an existing node .
*/

// let imageUrl =
//   "https://fastly.picsum.photos/id/179/200/300.jpg?hmac=oo9H3-mvUxV9CjfSms5helxQW-n5PsZLzkg1ko78uFk";

// const container = document.getElementById("container");
// // <img src="some_url" alt="some text" /> => in memory it's an object

// let imageElement = document.createElement("img");
// // imageElement => empty image object / image html element
// // console.log(imageElement); // <img>
// imageElement.src = imageUrl;
// imageElement.alt = "some random image";
// console.log(container.children);
// container.appendChild(imageElement);
// console.log(container.children);

/*
Events in javascript 

mouse events :

    scroll
    click
    dblclick
    hover 
    leave 
    dragging

keyboard events : 
    keydown
    keyup

Using javascript we can execute a piece of code upon an interaction(event) by the user
*/

// let clicks = 0;
// let imageUrl =
//   "https://fastly.picsum.photos/id/179/200/300.jpg?hmac=oo9H3-mvUxV9CjfSms5helxQW-n5PsZLzkg1ko78uFk";
// const container = document.getElementById("container");

// function callme() {
//   const imageElement = document.createElement("img");
//   imageElement.src =
//     "https://fastly.picsum.photos/id/179/200/300.jpg?hmac=oo9H3-mvUxV9CjfSms5helxQW-n5PsZLzkg1ko78uFk";
//   imageElement.width = 100;
//   imageElement.height = 100;
//   imageElement.alt = "random image";
//   container.appendChild(imageElement);
// }

const firstButton = document.querySelector("#btn");

// function toggleButton() {
//   //   if (firstButton.className === "error") firstButton.className = "success";
//   //   else firstButton.className = "error";
//   // `button error`
//   let classNames = firstButton.className;

//   let allClasses = classNames.split(" ");
//   console.log(allClasses);
//   // [`button`, `error`] => [`button`, `success`]

//   for (let i = 0; i < allClasses.length; i++) {
//     if (allClasses[i] === "error") {
//       allClasses[i] = "success";
//       firstButton.innerText = "Success";
//     } else if (allClasses[i] === "success") {
//       allClasses[i] = "error";
//       firstButton.innerText = "Error";
//     }
//   }
//   console.log(allClasses); //[`button`, `success`]
//   firstButton.className = allClasses.join(" ");
// }

// function toggleButton() {
//   console.log(firstButton.innerText);
//   firstButton.innerText = "Nayeem";
// }

// const inputElement = document.querySelector("input");
// function extractInputValue() {
//   //   console.log(inputElement.value);
//   inputElement.placeholder = "Some placeholder";
//   //   inputElement.value = "naveen";
// }

const alertContainer = document.getElementById("alert");

function closeAlert() {
  alertContainer.remove();
}

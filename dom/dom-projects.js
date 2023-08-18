// const sidebar = document.getElementById("sidebar");
// function toggle() {
//   //   sidebar.classList.toggle("open");
// }

// const boldElement = document.getElementsByClassName("test")[0];

// function callme(a) {
//     // a = () => {}
//     console.log(typeof a) // number , boolean, function
//     a();
// }

// callme(() => {}); //

/*
A function passed as an argument to another function is called as 
callback function.

To add the event listeners dynamically to a target element 

targetElement.addEventListener("eventName", listenerFunction )
*/

// const targetElement = document.getElementsByTagName("button")[0];

// const listener = function () {
//   console.log("this is a click listener function");
// };
// // event to be added ("click")
// // listener function
// targetElement.addEventListener("", listener);

// let students = ["nayeem", "ajay", "Vishal", "Anuj"];

// const nameInput = document.getElementById("name");
// const button = document.getElementsByTagName("button")[0];

// const listener1 = () => {
//   if (students.includes(nameInput.value)) {
//     button.addEventListener("click", () => {
//       console.log("added listener");
//     });
//   }
// };

// nameInput.addEventListener("keyup", listener1);

// Adding multiple listeners
// const button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", () => {
//   console.log("first listener");
// });

// button.addEventListener("click", () => {
//   console.log("second listener");
// });

/*

Array of student objects are given, when clicked on a button display all the student in the UI.
*/

let students = [
  {
    name: "Navneet",
    age: 20,
    gender: "Male",
  },
  {
    name: "Priya Angel",
    age: 50,
    gender: "Female",
  },
  {
    name: "Vishal",
    age: 22,
    gender: "Male",
  },
];

/**
 * 1.listen to the click of that button
 * 2.
 */
// const button = document.getElementById("btn");
// const container = document.getElementById("container");

// let index = 0; // 0 => 1 => 2 => 3

// const renderStudents = () => {
//   /*
//             <div class="student">
//                 <b>Pawan</b>
//                 <span>22</span>
//                 <span>Male</span>
//             </div>
//         */
//   if (index >= students.length) return;
//   const div = document.createElement("div");
//   div.className = "student";
//   const name = document.createElement("b");
//   name.innerText = students[index].name;
//   const age = document.createElement("span");
//   age.innerText = students[index].age;
//   const gender = document.createElement("span");
//   gender.innerText = students[index].gender;
//   div.append(name, age, gender);
//   container.appendChild(div);

//   index++;
// };

// button.addEventListener("click", renderStudents);

// form submission

const form = document.getElementsByTagName("form")[0];

// eventName = "submit"
const table = document.getElementById("table");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops the default behavious
  const email = form["email"].value; //
  const password = form["password"].value;
  //   const f = () => {
  //     console.log(email, password)
  //   }
  //   f();
  const tableRow = document.createElement("tr");

  tableRow.addEventListener("click", () => {
    // #50
    console.log(email, password);
  });

  const emailCell = document.createElement("td");
  emailCell.innerText = email;

  const passwordCell = document.createElement("td");
  passwordCell.innerText = password;

  tableRow.append(emailCell, passwordCell);
  table.appendChild(tableRow);
});

// let a = 200;
// function callme(x) {
// //   let a = 2 * x; // a = 2 * 5 = 10
//   let f = () => {
//     console.log(a);
//   };
//   return f;
// }

// let result = callme(10); //

// result(); // 20
// let result2 = callme(5);
// result2(); //

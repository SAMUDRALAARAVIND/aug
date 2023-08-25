// To interact ( call ) our friend we need the contact number of that person.
// similarly to interact with a server ( for sharing data ) we need a URL

// let x = [
//     {
//         "id": 3,
//         "label": "Hyderabad",
//         "state_name": "Telangana",
//         "state_code": "TG",
//         "pin_code": 500001
//     },
//     {
//         "id": 4651,
//         "label": "Hyderabad Airport RGIA",
//         "state_name": "Telangana",
//         "state_code": "TG",
//         "pin_code": 500016
//     }
// ]

// const promise = fetch("https://api.postalpincode.in/pincode/2009");

// promise.then((response) => {
//   console.log("Server response", response); // response object
//   let result = response.json();

//   result.then((data) => {
//     console.log("actual data", data);
//   });
// });

// promise.catch((error) => {
//     // network error || server refused || server errors
// })

async function fetchPincodeDetails(pincode) {
  const url = `https://api.postalincode.in/pincode/${pincode}`;
  try {
    let response = await fetch(url);
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
fetchPincodeDetails(506114);

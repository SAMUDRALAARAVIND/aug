// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(true);
//   }, 1000);
// });

// then and catch methods takes a callback function as an argument they will be executed as soon as the promise get resolved or rejected.

// function f() {
//   console.log(promise);
//   console.log("inside f");
// }

// promise.then(f);

// promise.catch(f);

// promise.finally(f);

/*
Summary of then , catch and finally methods

1. Above 3 methods will take a callback function as an argument.
2. then's callback will be invoked when the promise gets fulfilled.
3. catch's callback will be called when the promise gets rejected.
4. finally's callback will be executed when the promise gets settled
( fullfilled or rejected )


Task of resolve and reject
 resolve / reject methods will do two tasks 
  i. to mutate state from pending -> fulfilled / rejected
  ii. if there are any attached callbacks ( successCallbacks | errorCallbacks ) those will be pushed into microtask queue.

Task of then , catch and finally 
 1. attaches the callback functions to the original promise objects.


 then's callback will collect the data with which the promise is resolved .

 catch's callback will collect the data ewith which the promise is rejected .

 finally's callback doesn't collect any data.
*/

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(4);
//     reject(false);
//     console.log(5);
//   }, 1000);
// });

// promise.then(() => {
//   console.log("resolved");
// });

// promise.catch(() => {
//   console.log("rejected");
// });

// promise.then(() => {
//   console.log(3);
// });
// promise.then(() => {
//   console.log(10);
// });

// promise.catch(() => {
//   console.log(3);
// });

// promise.finally(() => {
//   console.log(3);
// });

//   promise.catch();

//   promise.finally();

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "aravind" });
//   }, 1000);
// });

// p.catch((x) => {
//   console.log(1);
//   console.log(x); // 10
// });

// p.finally(() => {
//   console.log(2); // 10
// });

// Promise chaining.

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(promise); // rejected
//     resolve(10);
//   });
//   console.log(a); // promise <pending> to promise<rejected>
//     // throw new Error("a is not defined");
//   console.log(11)
// });

// promise.catch(() => {
//     console.log("catch")
// })
// console.log(12)

// promise.then((data) => {
//   console.log(data, "then");
// });

// promise.catch((data) => {
//   console.log(data, "catch");
// });

// let arr = [2, 3];
// chaining example
// let arr2 = arr.map(x => x + 1)
//               .map(x => x + 1)
//               .map()
//               .map()
//               .map()

// console.log(arr2)
// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(10);
//   }, 1000);
// });

// // p <rejected> 10
// // x <rejected> 10

// p.catch((data) => {
//   console.log(data);
// });

// let x = p.then((data) => {
//   console.log(data);
//   return true;
// });

// x.catch((someData) => {
//   console.log(someData); // 10
// });

/*
         /*
    Notes for Promise chaining 

    1. then method returns a promise that will indicate the execution or non execution of the callback passed to then method 

       let x = prom.then(cb);

        if `cb` is executed 
            case i: without any error inside `cb`
                => x state will change fullfilled with the data of x being the value returned by `cb`
            case ii: error inside `cb`
                => x state will change to rejected with the data of x being the Error object which occured inside `cb`.

        if `cb` is not executed => x state will change to rejected with the data of x being the value with which `prom` is rejected.


    2. catch method will also returns a promise that will be fullfilled always but will be rejected when there's an error encountered inside the catch.
        let x = prom.catch(cb);

        if `cb` is called
            case i: no error occured inside the `cb` => x (fullfilled) with data returned by the `cb`
            
            case ii: error occured inside the `cb` => 
                x => {rejected, Error}
        if `cb` is not called:
            x will be fullfilled with the data with which the prom is fullfilled

*/

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   });
// });

// // p <fulfilled> 2
// // x <fulfilled> undefined

// const f = (data) => {
//   //   console.log(dat); // 2
//   //   return data + 20; // 22
//   // x promise <fulfilled> , 22
// };

// let x = p.then(f);

// x.then((data) => {
//   console.log("x is fulfilled", data); // 22
// });

// x.catch((data) => {
//   console.log(data);
// });

// console.log(x); // <pending>

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  });
});

// p <fullfilled> 2
// x <fulfilled> 2

p.catch((data) => {
  console.log(dat); // 2
  return 6;
}).then((data) => {
  console.log(data); // 2
});

x.catch((data) => {
  console.log("x is rejected", data);
});

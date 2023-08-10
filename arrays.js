// loops 
// for, while, do while (native loops)
// in js also we have 3 types of native loops

// loops , arrays, objects , assignemnts

// intialisation, condition, updation
// let a = 0;
// for(; "0" ; ) {
//     console.log("hello" + a)
// }
/**
 * hello0
 * hello2
 * hello4
 */
// console.log("exit")
/**     
 * a = 0 => 2 => 3 => 4
 * 2 < 4
 * 3 < 4
 * 4 < 4 => false
 * output: hello, hello
 *                      true
  intialisation => condition ====>   body => updation 
                       || false
                    comes out of the for loop
 */
// let a = -2; // -2 => -1 => 0 => 1
// while(0.2) { // 0 ++ => 0
//     console.log(a) // -1 , 0
// }
// console.log(a) // 1

// let a = 3; // 3 => 2 => 1 => 0 => -1
// while(a--){ // 0-- => 0
//     console.log(a) // 2, 0
//     if(a == 0){
//         continue;
//     }
//     a--; //
// }
// console.log(a) // -1



/*
Arrays and Objects
*/

// number, string, undefined, boolean
// primitive data types
// NaN, Infinity => number
// ArrayList<Integer> arr = 
// arr.get(0);
// by default in js arrays are heterogenious
// let arr = [10, [true, "aravind"] , "a", undefined,200];
// int[] arr = new int[10] ;

// console.log(arr[ Number(true) ])
// let a ;
// console.log(a)
// [10, 2, 11, 23] =>  [10, 2, 88, 11, 23]
// arr[0] = 88 ;
// console.log(arr)
// console.log(arr) // 4
// arr.push(99) // [10, 2, 11, 23, 99]
// console.log(arr) // 5
// arr.unshift("true"); // [true, 10, 2, 11, 23, 99]
// console.log(arr) // 6

// console.log(arr)
// arr.shift(); // removes the element from the first
// console.log(arr)

// [10, 2, 11, 23] => [10, 2, 88, 11, 23]
//  [10, 2, 11, 23].push(88) => 
// [10, 2, 88, 11, 23]
//          i
// let arr = [10, 2, 11, 23] ; // [ 10, 2, 76, 11, 23 ]
// // insert 76 at index = 2 
// let lastIndex = arr.length;  // 4
// splice(startIndex, deletedCount, newElements)

// [10, 2, 11, 23] => [10, 23] => [10, 90, 99, 100, 201, 23]
// arr.splice(2) ;
// console.log(arr)

// Objects

//          0   1     2
// every element in an array has (index, value)

// objects also have (index, value) => (key, value) => always the value should be a valid datatype
// let arr = [10, true, 45]

// console.log(arr[2]) // retrival

// arr[2] = 100;

// let obj = {name:"aravind", age: [100, 20, 30], course: "BTech"}
// obj["age"] = 30 ;
// // console.log(obj["age"], obj.age) // 30, 30
// // obj.age = 28;
// // console.log(obj["age"], obj.age) // 28, 28

// console.log(obj.age) // 30


// let user = {
//     email: "aravind@gmail.com",
//     fullName: { firstName: "Aravind", lastName: "Samudrala" },
//     friends: [ "aman", "deepak", "amit"],
//     isMale: true,
//     isMarried: true,
//     isAlive: false
// }
// console.log(typeof user)

// console.log(user.fullName["firstName"])
// console.log(user.fullName.firstName)
// if(user.isMarried){
//     console.log(user.fullName.firstName+ " " + user.fullName.lastName+ " is Married");
// }
// console.log(user.friends.length, user["friends"].length)
// user.phoneNumber = 2930200202 ;
// console.log(user)

// delete user.isMarried ;

// console.log(user)


// let arr = [1, 2, 3]
// console.log(arr);
// arr.push(10);
// console.log(arr)

// objects in js are non primitive 
// other than objects are primitive (string, number, boolean, undefined)
// Objects are always stored in the memory heap.
// let a = [4, 5, 10] ; // a = #200,  #200 - #213
// let b = [] ; // b = #400
// for(let i = 0 ; i < a.length; i++){
//     b.push(a[i]);
// }

// console.log(a== b);
// let arr = [20, 10, 23]
// //         0    1   2
// let user = { // #300
//     name: "aravind", 
//     age: 22,
//     isAlive: true,
// } ; 

// let user1 = {}; // user1 = #500

// for(let i in user){
//     // i = "name" user1["name"] = user["name"]
//     user1[i] = user[i]; 
// }
// console.log(user1)
// for(let i in arr) {
//     console.log(i , arr[i])
// }

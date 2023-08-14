/**
 * 1. strings , regexp
 * 2. solve assignments.
 * 3. Hoisting
 */

// let str = "arAvinD" ;
// 6
// 7 (str.length)

// console.log(str[0].toUpperCase() + str.slice(1, str.length - 1) + str[str.length  - 1].toLowerCase() )
// ArAvind
// "aravind" => ["","r", "vind" ]
// let frags = str.split("a")
// console.log(frags)
// slice is different from splice
// splice is invalid in strings as strings ae imutable
// console.log(str.substring(2, 4))
// a += x ; // a = a + x ;
// str = str + " abc" //
// "arAvinD"+" abc" = "arAvinD abc"
// console.log(str[0].toUpperCase() + str.slice(1)) ;
// console.log(str.toLowerCase());
// console.log(str.toUpperCase())

// console.log( str[0].toUpperCase() )

// console.log( str.slice(1) , str.substring(1) )

// let str = "abc" ; // stack memory  #100

// console.log(str) // "abc"

// str = str + " xyz" ; // "abc" + " xyz" = "abc xyz" #200

// console.log(str) // "abc xyz"

// let arr = [1, 2, "abc"] ;
// arr[0] = 10;

// arr = [ 10, 20 ]; //
// console.log(arr)

// let arr = [1, 2, 3] ;
//  // join method joins all the elements of an array into a single string.
// let joinedString = arr.join("") // 1 + "" + 2 + "" + 3
// console.log(joinedString)
// let str = "aravind" ; // #100
// let str2 = "aravind" ; // #100
// str = "sjdkd" // #800

// Regular expressions
// syntax => /expression/modifiers

/**
 * expression includes characters or meta characters
 *
 * characters are regular one's a , b , c,$
 *
 * Modifiers:
 * g => global modifier
 *
 * Meta characters:
 * . (dot) => matches any single character
 * * (arsterisk) => matches zero or more preceeding characters.
 * + (plus) => matches one or more of preceeding character.
 * ?  => matches 0 or 1 preceeding character
 *
 * special characters:
 *
 * \s => defines the space character
 * \d => defined the digit
 * \w => defines an indivudual word.
 */
// "I am ajith.plays cricket" ;

// /a?c.e+/ = > cke
// aCxee
// cme

// let str = "av ammv ammmv" ;

// // "I am  Mvind M"
// let regexp = /am*v/g;

// am*v
// av
// amv
// ammv
// ammmv
// ...

// console.log( str.match( regexp ) )

// a.a => a1a, a2a, a3a, axa, aea, a$a

// abc*
// ab , abc, abcc, abcccccccccc

// asjsk*

// ay, ayc, aycc, ayccc,

// let sentence = "An amthe the an egg the" ;
// let words = sentence.split(" "); //

// // (6) ['An', 'amthe', 'the', 'an', 'egg', 'the']
// //               i                               i
// let finalString = "";
// // "" => "umbrelan " => "umbrelan egg "

// for(let i = 0; i < words.length; i++) {
//     let currentWord = words[i].toLowerCase() ; // amthe
//     if(currentWord !== "an" && currentWord !== "a" && currentWord !== "the") {
//         finalString += words[i]+ " ";
//     }
// }
// console.log(finalString)// "umbrelan egg "
// console.log(  finalString.trim() )

// "An umbrealla an egg"
// " umbrealla  egg"

//  /the\s?/, /a\s?/ , /an\s?/

// article at the beginning: The\s, a\s, an\s
// article in the middle: \sthe\s , \sa\s, \san\s
// article at the end: \sthe, \sa, \san;

// replace all the above with ""
// console.log(sentence.match( /\ba/gi ));

//

// let result = sentence.replace(/the\s?|an\s?|a\s?/gi, "") ;
// console.log(result);

let arr = ["Tajmahal", "The Virupaksha Temple", "an Victoria Memorial"];

/*
    {
        Tajmahal: Tajmahal,
        The Virupaksha Temple: Virupaksha Temple,
         an Victoria Memorial: Victoria Memorial
    }
*/

let arr2 = []; // [Tajmahal, Virupaksha Temple, Victoria Memorial ]
let mp = {};

for (let i = 0; i < arr.length; i++) {
  let words = arr[i].split(" ");
  i;
  let finalString = "";
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i].toLowerCase(); // amthe
    if (currentWord !== "an" && currentWord !== "a" && currentWord !== "the") {
      finalString += words[i] + " ";
    }
  }
  let articleLessString = finalString.trim();
  mp[articleLessString] = arr[i];
  arr2.push(articleLessString);
}
console.log(mp);

//[Tajmahal, Virupaksha Temple, Victoria Memorial ] // before sorting

// [Tajmahal, Victoria Memorial, Virupaksha Temple ] // sorted array

// `The tajmahal` => `tajmahal`

// mp = {`tajmahal` :  `The tajmahal`}
// console.log(mp)
// console.log(arr2)

arr2.sort(); // bubble sort

// ['Tajmahal', 'Victoria Memorial', 'Virupaksha Temple']
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = mp[arr2[i]]; // "An Victoria Memorial"
}
console.log(arr2);

// let x = {
//     A: "N",
//     B: "O",
//     C: "P",
//     D: "Q",
//     E: "R",
//     F: "S",
// }

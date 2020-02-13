// 20Jan2020 Montag
// ARRAY can store multiple things inside

// <array name> = [ <value 1>,  <value 2>, ........ ]
let arrStr = ["hi", "text", " text"];
console.log(arrStr);
let arrInt;

///
arrInt = []; // 2nd way
console.log(arrInt);
///

////
arrInt[0] = 22;
arrInt[1] = 22;
console.log(arrInt); // [ 'Hadi', 'Ali' ]
/////

/// Array(num) // to create arry with num slots
let arrString = new Array(4);
let arrStr2 = Array("Hadi", "Ali");
console.log(arrStr2); // [ 'Hadi', 'Ali' ]

//

//Array.of() creating array
let strArr = Array.of(3);
console.log(strArr); // RESULT IS [ 3 ]
///

//Accessing using square brackets
arrInt[2] = 33;
arrInt[3] = 53;

arrInt.push(663);
arrInt.push(222);

arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);
/* RESULT IS [
                    322,  22,  22, 33,
                    53, 663, 222
                ] */

/// Finding Items:
//Array.indexOf(<item>)
var firstNameArr = ["Ali", "Olga", "Hadi"];
console.log(firstNameArr.indexOf("Hadi")); // RESULT IS 2

//////
let funArr = ["😎", "💪🏻", "😊"];
console.log(funArr);
//////

////
let arrStingName = [];
for (let i = 0; i <= 10; i++) {
  // i =  1
  arrStingName[i] = `Hadi ${i}`; // arr[1] = "Hadi 1" until "Hadi 10"
}
console.log(arrStingName); // "Hadi 1" until "Hadi 10
///////

//Removing items :
// Array.pop() // Removing the lastItem
// Array.shift() // Removing the firstItem
let funArr2 = ["😎", "💪🏻", "😊"];
funArr2.pop();

funArr2.shift();

console.log(funArr2);

////////

const lastName = ["Ali", "Hadi", "Mat", "Babi"];

lastName[3] = "Nass";
lastName[4] = "Danny";
console.log(lastName);
////////

//////// different between let,var & const
let x = 0; // declaring variable and assign the value of it //
x = 2 + 2; // declaring new value
console.log(x); // Result is 4

var y = 0;
y = 3 + 2;
console.log(y); // Result is 5

/*const z = 0; // declaring variable but not able to change the value of it after semicolon
z = 4 + 4;
console.log(z);
///////////////////////////////// Result crashed */

const q = 0;
console.log(q);

//
let names = ["Hadi", "Ali", "Buddy", "Nancy"];
let name = "jam is everywhere";
console.log(names.length); // index of array is 4
console.log(name.length); // jam have 17 characters
//

// Array.slice() and array.splice
console.log(names.slice(3)); // Nancy
console.log(names.splice(0, 2)); // Hadi , Ali

//Array.split()
let stringToArray = name.split(" "); // ("  ") is space string
console.log(stringToArray); // result  'jam', 'is', 'everywhere'

// Array.join()
const arrayString = ["jam", "is", "everywhere"];
let stringToArrayy = arrayString.join(" ");
console.log(stringToArrayy);

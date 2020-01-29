// REVISION FROM 06.01.2020 Monday

let str = "this is long text";
console.log(str.slice(3)); // 3

let str1 = "Hi";
let str2 = "Hadi";
console.log(`${str1} ${str2}`);

console.log(str1.toUpperCase());
console.log(str2.toLowerCase());

console.log(str.includes("java"));

let x = true;
true ? console.log("cool") : console.log("nope");

//08.01.2020//  const is forever fixed
const dr = 2;
//dr = 3; // not good to reassign a value to const

//local Global
console.log(global);
var global = "Hi i'm global";
function sum() {
  let local = "Hi i am local";
  console.log(global);
  console.log(local);
}
sum();

// Conditional assigment with the ternary operator
let kid = 2;
console.log(kid < 16 ? "Party ON" : "Home ONLY"); // U will use this many time in REACT
console.log(x ? "Hey thats nice" : "Oh nooooo");

// '\' , \", \n
console.log("Hi i am \n Hadi");

// .trim()
let str4 = " Hadi ";
console.log(str4.trim());

function print(str) {
  console.log(str);
}
print("Hadi");

// Numbers
let z = 10;
let w = 4;
console.log(z % w);
//using % with result remaining 2 as answer

// Integers vs. Floats
let int1 = 11;
let int2 = 1.5;
console.log(int1 + " " + int2);

// isNan
console.log(!isNaN(int1) ? "yeah it is a string" : "Nope sorry");

// converting strings into Number: `parseInt()`, `parseFloat()`
let strInt = "2";
let strInt2 = "2";
let result = strInt + strInt2;
let newNum = parseInt(strInt, 10);
console.log(newNum);
console.log(result);

let integer = "1005"; // Parse is convert string to a number!
let realNum = parseInt(integer);
console.log(realNum);

let float = "10.05";
let realFloat = parseInt(float);
console.log(realFloat);

// Modulo %
let lastNum = 4 % 2; //result is 0 because 4 iseven number
console.log(lastNum);

let lastNumm = 5 % 2; //result is 1 because 5 is odd number
console.log(lastNum);

//  * + -

let q = 3;
let s = 4;
let sum1 = q + s;
let div = q / s;
let mul = q * s;
console.log(sum1, div, mul);

// Exponentatiation ** the power of
let power = 9 ** 9;
console.log(power); // 387420489

// Math.floor() go down reverse
let float1 = 1.1;
let realIni = Math.floor(float1);
console.log(realIni); // 1

// Math.ceil()  go up
let realIni2 = Math.ceil(float1);
console.log(realIni2); // 2

// Math.max() give the max amount
console.log(Math.max(800, 1, 33339.5, 4, 66, 700));
console.log(Math.max(x, z, q, s, 101));

console.log(Math.trunc(13.37));

//math.min()
console.log(Math.min(4, 5, 88, 0.2, 200, 4));

//09JAN2020 , THURSDAY
let x, y, z;
x = 4;
y = 5;
z = x + y;
console.log(z);

console.log(Math.max(33, 44, 55, 66, 77, z)); // Math.max

function display(str) {
  console.log(str);
}
display("Hi this is new function"); //

let strInt = "23456";
let strInt2 = "78910";
let result = strInt + strInt2;
console.log(result); // 2345678910 result is string

console.log(parseInt(strInt) + parseInt(strInt2)); // 102366 result of addition is the number

//2. Declare is same is create or make Let
let speedCheck = 40;
let speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "You’re driving below the speed limit, Oma"
    : "too FAST!"
); //  must REVISE AGAIN
/////////////////////////////////////////// new LESSON DOWN Here : 09Jan2020

// Addition
let s = 10;
x + y * s;

console.log(((x + y) / (z + 2.3)) * 29 + x);

//String + Boolean (0 is false / 1 is true in Js)
r = false;
d = 5;
console.log(r + d); // r = 0 , d = 5 =>

//String + String

let str2 = "Hi    ";
let str3 = " I am Hadi";
console.log(str2 + str3);

///typeof (Objects , function , console.....) to check the Variable what we used
console.log(typeof str2); //to know what type of Variable String or Num
console.log(typeof x);
console.log(typeof console.log);
console.log(typeof Math.floor);
console.log(typeof null);
//console.log(m); // m is not defined!!!!!!!
console.log(typeof d);

// (0.1 * 0.2)

let floatNum = 0.1;
let floatNum1 = 0.2;
let num = 3;
console.log((floatNum * floatNum1).toFixed(6)); // 0.020000 the (6) is the how many decimal number after it

let result1 = floatNum * floatNum1; // second method to do
let lastResult = result1.toFixed(num);
console.log(lastResult);

/////////////////////////////////////////// new LESSON DOWN Here : 09Jan2020

// parseInt will change string to number
let intString = "10 Hi Hadi";
console.log(parseInt(intString)); // 10

let floatString = "10.1234543 hi this hadi";
console.log(parseFloat(floatString)); // 10.1234543

// && - either this or that but both is good
// || - this is vertical bar (press AltGr + <>)

let var1 = true;
let var2 = false;

console.log(var1 && var2 ? "cool" : "Not Cool"); // Not cool

let var10 = 1 > 4;
console.log(var10); // false

let var3 = true;
let var4 = true;
let var5 = false;

console.log(var3 || var4 || var5 ? "cool" : "not cool"); // cool

// = Assigning

var ohNo;
console.log(ohNo); // undefined

console.log(ohNo); // undefined

ohNo = y;
console.log(y); // 5
console.log(ohNo); // 5

// == (we use == to check is the number equal to other number)- Most USING FOR PASSWORD

console.log(1 == 1 ? "yeah it is" : "nope is not"); // yeah it is

console.log(x == 1 ? "yeah it is" : "nope is not"); // nope is not

//  === ( to check the type and value )

let xx = "1";
ohNo = 1;
console.log(xx === ohNo ? "yeah it is" : "nope is not"); //

// Truthy and falsy values : false, undefined, null, 0 , ...........

console.log(true ? "Yes" : "Noooooo"); // true

console.log(100 ? "Yes" : "Noooooo"); // true

console.log("Ash" ? "Yes" : "Noooooo"); // true

console.log(display ? "Yes" : "Noooooo"); // true

console.log(false ? "Yes" : "Noooooo"); // false

console.log(undefined ? "Yes" : "Noooooo"); // false

console.log(null ? "Yes" : "Noooooo"); // false

console.log("" ? "Yes" : "Noooooo"); // false

console.log("317" ? "Yes" : "Noooooo"); // true

console.log("" ? "Yes" : "Noooooo"); // false

// isNaN

console.log(isNaN(NaN)); // true

console.log(isNaN(true)); // false

console.log(isNaN(null)); // false

// Math.random will use many time

console.log(Math.random() * 100 + 1); // 13.9551270.......

console.log(Math.random()); // 0.598182996........

// Math.random() used with Math.floor() can be used to return random integers.

console.log(Math.floor(Math.random() * 100) + 1); // 67

// Math.round
console.log(Math.round(1.6)); // 2

// Math.trunc

console.log(Math.trunc(4.5)); // 4



//1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
let num1 = "100";
let strVal = "Ashraf";
console.log(num1 + " " + strVal);

//2. Check if the  following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
let numOdd = 30 % 2;
console.log(numOdd == 0 ? " is even" : " is odd");

let numOdd2 = 30;
let numOdd3 = numOdd2 % 2;
console.log(numOdd3);
console.log(numOdd == 0 ? `${numOdd2} is even` : `${numOdd2} is odd`);

//9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let str10 = "javascript";

let str20 = str10[0];
console.log(str20); // just j appear

let str30 = str10[9]; // can use also str10[str10.length - 1];
console.log(str30); // just t appear

let str40 = str10.substring(1, str10.length - 1);

console.log(str30 + str40 + str20); // tavascripj

// Create a variable with the value of “123”. Convert it to a number.
let integer = "123"; // Parse is convert string to a number!
let realNum = parseInt(integer);
console.log(realNum);

let float = "130.7";
let realFloat = parseFloat(float);
console.log(realFloat);

//1.Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

let isDog = true;
console.log(isDog ? " pat pat" : " find me a dog to patt!"); // pat pat

//2.
let speedCheck = 80;
let speedLimit = 50;
console.log(
  speedLimit < speedCheck
    ? "you’re going too fast!"
    : "You’re driving below the speed limit, Oma!"
); //  must REVISE AGAIN

//3.
let age = 12;
console.log(age < 16 ? "serve juice" : "serve beer"); // MUST REVISE AGAIN

//4
let isStudent = false;
console.log(isStudent ? "Ticket 5euro" : "Ticket 12euro");

//5
let okMarie = "Apple";
print(okMarie === "cake" ? "Let them eat cake" : "Oh, brother"); // print is not define!

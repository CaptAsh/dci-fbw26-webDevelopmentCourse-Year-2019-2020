// EXERCISE MONDAY 13,JAN.2020



// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let totalTest = 85 * 6;
let total5 = 75 + 70 + 85 + 90 + 100;
let sixthTest = totalTest - total5;
console.log(`The sixth test result is ${sixthTest}`); // RESULT 90

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.

let firstAverage = 80 * 9;
let secondAverage = 78 * 8;
let last = firstAverage - secondAverage;
console.log(`James needs a minimum of ${last}% to get an 80% average`); //RESULT 96

//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print TRUE if either of them are in the range.

let int1 = 4;
let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log("true"); // true
}

//Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.

let int3 = 66;
if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log("true"); // true
}

/*3. Declare the variables a, b and c, and give them number values. 
Check which one out of the three variables has the largest value and print it to the console. 
Then change the values of the variables to see if your conditional still works.*/

let a, b, c;

a = 11;
b = 44;
c = 22;
console.log(Math.max(a, b, c));

/*4. Create a new string adding “Py” in front of a given string. 
If the given string begins with “Py” then print the original string. */

let str = "Python";
if (str.substring(0, 2) === "Py") {
  console.log(str);
}

/*5.  Calculate the sum of the two integers. 
If the sum is in the range 50 to 80, print 65, otherwise print 80  */
let int4 = 4;
let int5 = 50;
let sumInt = int4 + int5;
if (sumInt >= 50 && sumInt <= 80) {
  console.log(65);
} else {
  console.log(80);
}

/*6.Check whether the sum of two integers is 8, or whether their difference is 8. 
If one of these is the case, print true.*/
let int55 = 3;
let int66 = 5;
let numDiff = Math.abs(int55 - int66);
let numSum = int55 + int66;
console.log(numDiff); // 2
if (numSum == 8 || numDiff == 8) {
  console.log(true); // true
}

/* 7.Check whether either one of two integers is 15, or if their sum is 15. 
If one of these is the case, print true. */

let int7 = 5;
let int8 = 10;
let intSum = int7 + int8;
if (int7 == 15 || int8 == 15 || intSum == 15) {
  console.log(true); // true
}

/* 
8.Check whether one of two integers is a multiple of 7 or 11. If so, print true.
*/

let number1 = 10;
let number2 = 11;
if (
  number1 % 7 == 0 ||
  number2 % 7 == 0 ||
  number1 % 11 == 0 ||
  number2 % 11 == 0
) {
  console.log(true); // check again !!!!!
}

/*9.Calculate the sum of the two given integers. 
If the two values are the same, then print triple their sum.*/

let int22 = 3;
let int21 = 3;
let numTrip = (int22 + int21) * 3;
if (int22 === int21) {
  console.log(numTrip); // check again !!!!!
}

/*10. Calculate the difference between a specified number and 19. 
Print double the difference if the specified number is greater than 19.*/

let num1 = 100;
let numDifff = Math.abs(num1 - 19);
let numDo = numDiff * 2;
if (num1 > 19) {
  console.log(numDo); // check again !!!!
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ANOTHER EXERCISES AT 2.50 PM

/*
  -Make a variable for firstName and age and give each variable values 
  -Create an if/else statement to check whether the person’s age is less than 13. 
  -If so, print “firstName is a child”.

  -If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
  -If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
  -If none of these conditions apply, print “firstName is a adult”.
*/

let firstName = "Ash";
let age = "w"; // change the age to have different RESULT

if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age >= 13 && age <= 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age <= 30) {
  console.log(`${firstName} is a young adult`);
} else {
  console.log("is not a num"); // must put this to avoid broken application!
}

let firstName1 = "Ash";
let age1 = 21; // change the age to have different RESULT

if (age1 < 13) {
  console.log(`${firstName1} is a child`);
} else if (age1 < 20) {
  console.log(`${firstName1} is a teenager`);
} else if (age1 < 30) {
  console.log(`${firstName1} is a young adult`);
} else {
  console.log("is not a num"); // must put this to avoid broken application!
}

/////////////////OTHER EXERCISES ALSO//////////////////////////////////////////////////////////////////////////////////

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

1. Store Mark’s and John’s mass and height in variables.
2. Calculate both their BMIs and store their BMIs in variables.*/

let massMark = 60.6;
let heightMark = 1.6;
let massJohn = 60.9;
let heightJohn = 1.73;

let bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

// 3.Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreCookies = bmiMark > bmiJohn; // true / false

console.log(markMoreCookies);

/* 4. Print a string to the console containing the variable from 
step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).*/
let resultBmi = bmiMark > bmiJohn;
console.log(
 /* `"Is Mark’s BMI higher than John’s ? Why yes, it’s ${resultBmi}, it is"`
);*/ 



// 5. Create an if statement which prints the name and BMI of the person with the highest BMI
//muss do again







 ///////////////////SOLUTION FROM HADI //////////////////////////////////////////


 /* Make a variable for firstName and age and give each variable values. 
 Create an if/else statement to check whether the person’s age is less than 13.
  If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, 
  print “firstName is a teenager”. 
  If the person’s age is equal to 20 and less than 30, 
  then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”. */


 const firstName = "Ali";

const age = 22;

if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age < 30) {
  console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
  console.log(`${firstName} is an adult`);
} else {
  console.log("Oi, put in a valid numeric age!");
}

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI */

//Q1 Store Mark's and John's mass and height in variables.

const markHeight = 1.65;
const markMass = 85;

const johnHeight = 1.9;
const johnMass = 120;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / (markHeight * markHeight);

const JohnBMI = johnMass / (johnHeight * johnHeight);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreCookies = markBMI > JohnBMI;

console.log(markMoreCookies); // to test

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

if (markMoreCookies) {
  console.log(`Is Mark's BMI higher than John's`);
} else {
  console.log(
    ` John enjoy GYM time, but Mark? Mark enjoy more having cookies and milk .`
  );
}

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markMoreCookies) {
  console.log(`Mark ${markBMI}`);
} else {
  console.log(`John ${JohnBMI}`);
}

///////////////////////////////////////////////////7
// EXERCISES
//27JAN2020


/*
1. Multiply - Function Declaration
Create a function that multiples a number by another number.

2. Multiply - Function Declarations as Values
Rework the syntax of the above function so that the function declaration is stored as a value.

3. Multiply - Arrow Function
Rework the syntax of the function declaration so that is uses the arrow function shorthand.

4. Declarations
Create functions (using all three declarations) to check the remainder of division given two numbers. 

*/

// 1. Multiply - Function Declaration//////
function multiplyTwoNumbers(a, b) {
    let result = a * b;
    console.log(result);
};
 
multiplyTwoNumbers(2, 3); // 6
 

console.log("...............end...............")



// 2. Multiply - Function Declarations as Values///////

const multiply2 = function( a,b){
    console.log(a * b);
};

multiply2( 3 ,3); // 9


// other way here down
const result = function(a, b) {
const message = `The result is: `;
    return `${message} ${a * b}`;
  };
  console.log(result(3, 8)); // 24



  console.log("...............end...............")


// 3. Multiply - Arrow Function///////

const multiply3 =( a,b) =>  a * b;


console.log(multiply3(4 ,3)); // 12 

/////// other way here down

const multiplyArrow = (a, b) =>
`The result is: ` + a * b;
console.log(multiplyArrow(10, 30)); // 300



console.log("...............end...............")

// 4. Declarations
//Create functions (using all three declarations) to check the remainder of division given two numbers. 

function div(a,b){     // old way
    console.log( a % b);
}
const div1 = function (a,b){  // 2nd way
    console.log( a % b);
};

const div2 = (a,b) => a % b; // new way

div1 (4,2); // 0
div2 (7,4); // 3
div (3,5); //



/*
 1. Print Exponential Values
Write a function that accepts two numbers and validate that they are numbers.
After that, the function should print y exponential values starting from x.
For example if we have function(3, 5)#
The function should print 3 9 27 81 243. 
Prints 5 exponential values of 3.
function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2. */


function printValue (x,y){
if (typeof x  == "number" && typeof y == "number") {
    //console.log(true);
    let result = 1 ;
    let values = "";  // empty string to print the result

   for(let i = 0; i<y; i++){
       result *= x;
       values += `${result} `;
    }   
   
   return values;
} else {
    return "One of your vars is not a number";
}
}
console.log(printValue(2,8)); // 2 4 8 16 32 64 128 256 




/* 
2. Fruits
Create a function named printFavoriteFruit. 
Declare a variable outside of the function and store your favorite fruit as a value. 
Reassign the variable within the function and print “My favorite fruit is: x”.*/ 

let fruit = "Apple";
function printFavoriteFruit(str) {

fruit = "Banana";
console.log(`My favorite fruit is : ${fruit}`);

}
printFavoriteFruit();


/*
3. Multiply a Number by Itself
Create a function named 
exponent that takes two numbers as parameters. 
The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. 
Is this possible? Why/Why not? Comment your answer in the index.js file. */

function exponent(starterNum, exponent){   // why use same function name with parameter
let result = 0;
let multiply= starterNum * starterNum;  
for(let i = 0; i < exponent; i ++){
    result += multiply;
}
return result;
}
console.log(exponent(2,4)); //    16
//27JAN2020 , MONDAY
// EXERCISES AND REVISION



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
    console.log(a * b);6
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

console.log("...............end...............")



//LESSON 27JAN2O20 MONTAG


 // Spread syntax ...

 let array = [1,3,45,6];
 let copyArray = [...array];
 console.log(copyArray);        // [ 1, 3, 45, 6 ]

 console.log("...............end...............")

//

function sum (...args){
    let array = args;
    console.log(array);
        
}
sum (3,4,4,5,6,7,7,88,98,9);


console.log("...............end...............")


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax :

function sum(x, y, z, q) {
    return x + y + z + q;
  }
  const numbers = [7,88,98,9];
  
  console.log(sum(...numbers)); // 202
       


console.log("...............end...............")


// HADI SOLUTION DOWN HERE :

function sum (...args){
    let array = args;
    let result = 0;

for (let i = 0; i<array.length; i ++){
   result += array[i];
}
return `the sum is ${result}`;
   
}
console.log(sum(3,4,4,4,5,6,7,7,88,98,9)); // the sum is 235
console.log(sum(7,88,98,9));              //  the sum is 202


console.log("...............end...............")



// create a function howManyArgs which returns the total

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(3,4,56,7,8,9,9,3); // 8 parameter
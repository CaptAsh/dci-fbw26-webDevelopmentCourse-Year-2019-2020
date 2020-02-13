// 03FEB2020 Montag
//LESSON




// functions inside functions

function main(num,num2){       // outer function
    function second (n){      // inner function is private for outer function
       return n * n;  // 3 * 3 = 9
    }
return second(num) + second(num2);
}          //  9   +    16

console.log(main(3,4));  // 25

console.log(".........end...........");



// Nested scopes : Acessing outer global variables

const outerFunction = (x,y) =>{
let big = true;                  // big is global variable for this function
console.log(big + "outerFunction");  // true

const innerFunction = num => {
big = false;
console.log(big + "innerFunction"); //false
return num + 10;  //
} 

return innerFunction(x) + innerFunction(y);   //  (3 + 10) + (4 + 10) = 27

};
console.log(outerFunction(3,4)); // 27

console.log(".........end...........");

///////////////////////////////////////////


// closure 
 //  a closure gives you access to an outer function’s scope from an inner function.


var number = 10;

function fun(){
    
    return number + number;
}
console.log(fun());   // 20
console.log(number);  // 10

console.log(".........end...........");


// invoking == calling  down here :

const add = (() =>{

    let  counter = 0;
    return () => {
        counter++;
        return counter;
};
})();  // () self invoking

add(); // 1
add(); // 2 
add(); // 3

console.log(add()); // 4
console.log(add()); // 5


console.log(".........end...........");
//////////////////////////////////////////////



// self invoking anonymous function (SIAF)


(function display (){

    console.log("Hi");  // Hi
   
})(); // self invoking

//display();


console.log(".........end...........");
///////////////////////////////////////////////////


// Immediately Invoked Function Expression (IIFE Or iffy)
//immediately-invoked Function Expression
// two ways + passing parameter


const sum = ((x ,y) => {
return x + y;

})(4, 5);  // this is iffy
console.log(sum);  // 9

console.log(".........end...........");   
///////////////////

// trim()
let str = " Hi ";
console.log(str.trim());

console.log(".........end...........");   




// trimEnd()
console.log(str.trimEnd());

console.log(".........end...........");   




// trimStart()
console.log(str.trimStart());

console.log(".........end...........");



// startsWith()
let text = "Hi we will have fun now";
console.log(text.startsWith("we"));        // false

console.log(".........end...........");





// endswith()
console.log(text.endsWith("we", 5));       // true

console.log(".........end...........");




// charCodeAt()
let chr = "a"; // UTF-16 
console.log(chr.charCodeAt(0)- 96 );   // 1

console.log(".........end...........");

 

// codePointAt
const icons = '😄';

console.log(icons.codePointAt(0));


console.log(".........end..........."); // 128516
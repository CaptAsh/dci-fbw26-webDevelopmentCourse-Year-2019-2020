/* exercise 22Jan2020


1. Amplify the Multiples of 4. Create a function that takes an integer and 
returns an array of integers ascending from 1 to the given number, where:

For each number in the array that can be evenly divided by 4, 
that number is amplified by 10 (i.e. return 10 times the number).

If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters)

Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]*/



console.log("...........down here HADI’s solution..............")


 ////HADI SOLUTION :

/*
// const amp = num => { // this is Arrow function 
function amp (num){
let result  = [];
let ampBy10 = 0;
for (let i = 0; i <= num; i++)
if (i % 4 == 0){
ampByTen = i * 10;
result.push(ampByTen);
} else {
    result.push(i)
}
}
return result;

}
console.log(amp(4)); */

console.log("...............end...............")


///// MY SOLUTION :
let ampArr=[];      // empty array
function amp(){
    for (let i = 1; i <= 4; i++) {
        if(i < 4){
            ampArr.push(i);
        }else if(i=4){
            ampArr.push(i*10)
        }
    }
}
amp()
console.log(ampArr); // [ 1, 2, 3, 40 ]

console.log("...............end...............")



 /* 2. One is not like the others... 
 Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */


function unique(arr){
let currentValue = 0;
let currentArray = [];
let remainderArray = [];
for (let i = 0; i < arr.length; i ++){
    if( currentArray.length === 0 || currentArray[0] === arr [i] ){
     
        currentArray.push(arr[i]);
        currentValue ++;

    } else if (currentArray[0] !== arr[i]){
      remainder.push(arr[i])
    }

    }
    if ( currentValue === 1){
        return currentArray[0];

    } else {
return remainderArray[0];

    

}
let numArray = [1,1,2,1,3, 1]; // error here
console.log(unique(numArray));  

const array =  [0, 0, 0.77, 0, 0];
const unique1 = array.filter( x => array.indexOf(x));
console.log(unique1); // 0.77

const array2 =  [3, 3, 3, 7, 3, 3];
const unique2 = array2.filter( x => array2.indexOf(x));
console.log(unique2); // 7

const array3 = [0, 1, 1, 1, 1, 1, 1, 1];
const unique3 = array3.filter( x => array3.indexOf(x));
console.log(unique3); // 




/* 
// ++ just for refreshing  here
let p = 0;
++p
let c = p;
console.log(c); */

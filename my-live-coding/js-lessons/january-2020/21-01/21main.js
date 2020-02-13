// 21Jan2020, TUESDAY
// lesson




 // our best friend  // str is parameter
function display (str) {
    console.log(str);
}
display("Hadi");

// Array.isArray(arr) // to check

const names = ["Ali", "Hadi" , "Olga", "Nancy"];
let x = 1;
console.log(Array.isArray(names));

 ////////////////////////////////////




// Array.includes()
console.log(names.includes("Hadi")); // to show that this is there or not
console.log(names.indexOf("Hadi")); // to show the index num

console.log("...............end...............")

/// Array.reverse()
let rev = names.reverse()
console.log(rev); // [ 'Nancy', 'Olga', 'Hadi', 'Ali' ]

console.log("...............end...............")

//Array.concat()

let arr1 = [1,2,3];
let arr2 = [4,3,6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal); // [ 1, 2, 3, 4, 3, 6 ]
 

console.log("...............end...............")
////////////////////////////


///Array.filter () // creates a new array // => means function in ES6

let result1 = names.filter(name => name.length == 4 ); 
                         //name is function        

console.log(result1); // [ 'Hadi', 'Olga' ]                       

//////// still Array.filter for various/multiple result
let result11 = names.filter(name => name.length == 4 || name.length == 3);
    console.log(result11); // [ 'Ali', 'Hadi', 'Olga' ]
//////

console.log("...............end...............")



/// Array.find() // return the value of the first element
let result2 = names.find(name => name[0] == "A");
let result22 = names.find(name => name[0] == "A" && name[1] == "g");
console.log(result2); // Ali
console.log(result22); // undefined

console.log("...............end...............")


 //// Array.map() // creates a new array // PLEASE UNDERSTAND THIS BASIC !!!!!

 const intArray = [2,3,5,6,8];
 let result3 = intArray.map(x => x + 1);
 console.log(result3); // [ 3, 4, 6, 7, 9 ]





 console.log("...............under here start FUNCTION..............")




 ///////////////// FUNCTION///////////////////// 
 /// PARAMETER is  variable have value inside the function ////
 //very very importang should be remember

function sum(x,y){
return x + y;

}
let fun = sum(2,4); // function call
console.log(fun); // 6




/////////////////////////////////////////////
console.log("...............end...............")



function div (x,y){
return x/y;

}
function age (x){
if ( x == 30) {
return "You are cool";
} else {
    return "You are bad"
}

}
console.log(age(30)); // You are cool

//////////////////////////////////////////////
console.log("...............end...............")




const numbers = [1,2,3,4,5,6,10,45,66];
const numbers2 = [3,5, 14,442,53,664,5,6,10,45,66];

function arrBig (array){
let result = array.filter(p => p >= 5 ) ;
return result;
}

console.log(arrBig(numbers));
console.log(arrBig(numbers2));


/////////////////////////////////
/*console.log("...............end...............")

function fourArrChar(array){
let result = [];
for ( let i = 0; i < array; i++){
  if (array[i].length == 4){
      result.push(array[i]);
  }
}
    return  result;
}

const names2 = ["Ali", "Hadi" , "Olga", "Nancy"];
console.log(fourArrChar(names2)); */



///////////////////////////////////////////
console.log("...............end...............")

/* 

function Ochr(array){
let result = [];
for(let i = 0, i < array.lingth; i++)
if (array[i][0]) == "0"{
result.push(array[i]);
}
}
return result;
}

const names2 = ["Ali", "Hadi" , "Olga", "Nancy"];
console.log(fourArrChar(names2));
console.log(Ochr(names2));                              */

//////////////////////////////////

const monthNames = ["January", "Feb", "Mac", "April","Mai","June"];

function nameOfThatMonth(num){
let result = ""
switch (num){

case 1:  
result =  monthNames[0];
break;

case 2:
result = monthNames[1];
break;

case 3:
result = monthNames[2];
break;

case 4:
result = monthNames[3];
break;

case 5:
result = monthNames[4];
break;

case 6:
result =  monthNames[5];
break;

case 7:
result = monthNames[6];
break;
}
return result;
}
console.log(nameOfThatMonth(100));
console.log(nameOfThatMonth(2));
console.log(nameOfThatMonth(1));


////////////////////////////
console.log("...............end...............")

/////////////////

///////// this will use everyday

function nameOfThatMonthEasyVersion (num){
    let result = "";
    let newNum = num +1; // what is -1 ???

    if(num >= 1 && num <= 12 ){
     result = monthNames [newNum];
     
    } else {
result = "Sorry is not a a month"

    }
      return result;   
    }
    console.log(nameOfThatMonthEasyVersion(1));

    //////////////////////////////////////////
    console.log("...............end...............")



///////////////////////////

// Q : Reverse the string ["Ali", "Mike", "John"]

// THIS IS EASY WAYS
// function + loop method

 let array = ["Ali", "Mike", "John"];
 
 function reverseStr(str) {
   let result = [];
  for (i = 0; i < array.length; i++) {
                                             //push inside the result
result.push(str[i]
         .split("")
         .reverse()
         .join("") );
   }
     return result;
}
console.log(array); 
console.log(reverseStr(array));
////////////////////////////




 console.log("..............second method down here...............")


 //////////////using Array.map////////////////////


let namess = ["Ali", "Mike", "John"];

function reverseString(array) {
  let result = array.map(str =>
    str
      .split("")
      .reverse()
      .join("")
  );
  return result;
}
console.log(namess);
console.log(reverseString(namess)); 


/////////////////

console.log(".............HADI  method down here...............")

 /* 

 function reverseNamesss(num){
let newArray = [];
let strToArr = "";
let str = "";
let revStr = "";

for( let i = 0; i < array.length; i ++){
    str = arr[i]; // H a d i
    strToArr.reverse();
    revStr = strToArr.join("");
    newArray.push(revStr);
}
return newArray;
}
console.log( revStr(namess));
 */



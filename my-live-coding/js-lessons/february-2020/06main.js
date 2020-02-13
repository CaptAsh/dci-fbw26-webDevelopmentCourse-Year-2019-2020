// LESSON 06FEB2020 Donerstag 

// revision

function newUser(FName,LName,age,hope){ // outer function
let result = {
firstName :FName, //   firstName is Object Key have value FName
lastName : LName,
old :      age,
funThingsToDo: hope,
printOut : function(){  // inner function as method

return `Hey ${this.firstName}, you are very old ${this.old}, i like to ${this.funThingsToDo}`;  // return inner function as method

}

};
return result;  //      object.method();    // return  inner function call
 //  or use this ---return result.printOut ---

}
//this is function call

let x = newUser("Ali", "Olga", 40, ["hi", "hi"], true, {dance:"two"},); // this is hardcore Js
console.log(x.printOut()); // can use array, string, object,number inside here  // Hey Ali, you are very old 40

console.log(x.old); // 40 
console.log(x.funThingsToDo); // [ 'hi', 'hi' ]

console.log(".........end...........");


// IMPORTANT TO REMEMBER:
// closure = function inside function.
// method = function that inside the object.
// object keys = can be property( string, array, boolean,number , so on).








console.log(".........end...........");

/* Teacher teaching-test TIMO:
//
//1.find and .findIndex

 [3,4,5].indexOf(4) // to access index // result 1 because 4 at index 1.
 [3,4,5].findIndex(e => e === 4) // result 1 because 4 at index 1.




 [3,4,5][0] // result 3 // use if you know what the number you looking
 
 
 
 [3,4,5].find(e=> e === 4) // result 4
 [3,4,5].find (num => num > 3) // result is 4


// - shift()  removing first index  in array */

let arr1 = [3,4,5];
arr1.shift();
console.log(arr1); //  [ 4, 5 ]

console.log(".........end...........");


// - unshift() adding first index in array 

let arr2 = [3,4,5];
arr2.unshift(1,2);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

console.log(".........end...........");

// pop() removing last element in array
let arr3 = [3,4,5];
arr3.pop();
console.log(arr3); // [ 3, 4 ]

console.log(".........end...........");


// push() addind last element in array
let arr4 = [3,4,5];
arr4.push(6);
console.log(arr4);

console.log(".........end...........");

 // change the entire array/ reverse the order
 
 // reverse()
 let arr5 = [3,4,5];
 arr5.reverse();
 console.log(arr5); // [ 5, 4, 3 ]

 // Iteration over arrays - section 1:

 //.forEach() - just loop the array
 // callback arguments: value, index, array

 ["bird","dog", "cat"].forEach(animal => console.log("my pet is :" , animal)); 
 // my pet is : bird
 //my pet is : dog
 //my pet is : cat



 // .map() -returns new array
// callback arguments: value, index, array

console.log(arr5.map(e => e + 1)); // original like this [ 5, 4, 3 ] result is this [ 6, 5, 4 ]

console.log(".........end...........");
/* Teacher teaching-test TIMO:

/* .filter() -returns new array3: "Ali", age: 22
let arr6 = [3,4,5,6];
console.log(arr6.filter(e => e < 4)); // [3]

arr6.filter((value, index)) => {console.log(value , "is at index", index); return true;}) must review again */ 



// Iterating over arrays - section 2:
//accumulator, currentvalue, value, index

// reduce(callback, initialValue)
arr7 = [3,4,5,6,7,8,9];
console.log(arr7.reduce((result , current) => result + current , 0 )); // 0 is initial value   // result 42


arr7.reduce((result , current) => result.concat([current]) ,[]);
console.log(arr7); // result  [3,4,5,6,7,8,9]

arr7.reduce((result , current) => { console.log("sum so far :" , result); return result + current;}, 0 )
 
/* result :
sum so far : 0
sum so far : 3
sum so far : 7
sum so far : 12
sum so far : 18
sum so far : 25
sum so far : 33
*/
console.log(".........end...........")
;
// exercises
/*.find() and .filter()


1. Which is the first animal with more than three letters? */ 

const animals = ["cat", "bird", "dog", "worm"];

console.log(animals.find(animal => animal.length > 3)); // bird    // find will show just one

console.log(".........end...........")

// 2. find all animals with more than three letters! 

console.log(animals.filter(animal => animal.length > 3)); // ['bird', 'worm' ] // filter will show more than one


console.log(".........end...........")


// REVISION
//

let arr = [
    {1: "Ali", age: 22}, 
    {2: "Abu", age: 22}, 
    { 1:"olga", 
        sum: function(){
            
            return "Hi";
    }

} 
 

 
];

console.log(arr[2].sum());      // how to call function style 1
console.log(arr[2]["sum"]());    // how to call function  style 2

console.log(".........end...........")
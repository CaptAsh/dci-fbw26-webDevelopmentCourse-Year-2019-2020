//23JAN2020 , THURSDAY
//lesson

// var, let , const

var x = 0; // x is global because of var
let y = "3";
y = 3;
const q =  12;


/* increment
a++;  // a = a + 1    also same   as a += 1   (same operator)
a++;

// decrement
a-- // a = a -1  also same as    a -= 1       (same operator) */

/*let strr = "Hi";
strr += " how are you";
console.log(strr);*/


console.log("...............end...............")


// function <name> (<parameter>) {..........} to do something special that you want 
///(parameter) variable only use inside the function



function sum(x){
    let z = x + y;
    return z;
    
    }
    console.log(sum(2,3)); // console log is use to debug our code
    sum (10,3); 
    
    console.log("...............end...............")
    
    
    // variable in function
    
    function fun(){
    const num = 10;
    const num2 = 20;
    console.log("Hi");
    return `Hi the sum is ${num + num2} \n I\'m \"`;
    }
    
    console.log(fun()); // function call // 30

    console.log("...............end...............")



let string = "tHis is a long text";
console.log(string[0]);
console.log(string.substring(0,4));

console.log("...............end...............")


//toUpperCase / toLocaleLowerCase //please review this again!


let newStr = string[0].toUpperCase() + string.substring(1).toLocaleLowerCase();
let newStr2 = string.substring(0,2).toUpperCase() + string.substring(2).toLocaleLowerCase();
console.log(newStr);   // This is a long text
                 
console.log(newStr2);  // THis is a long text

console.log("...............end...............")


// array is is object

const arr = [1,2,3,4,5];
console.log(typeof arr); // object

console.log("...............end...............")


// Tertinary Operator (?) 

let blue = true;
console.log(blue ? `Nice i like ${x} ${arr}` : `Noooooo`);


        console.log("...............end...............")


// === (this type of )
// function 


/*
if ( 1 < 10){
    arr.push(1);{

    } else if ( 1 == 20){


    } else {
      arr.push(2);  
      a++;
    }
let color = "Black";
switch(color){
case "Pink":
arr.push(1);
break;
case "Black":
  console.log("Hi")  
  break;
  default:
  a++
  console.log("this is not okay");


} */


//const <function name> = (<PARAMETER>) => {........}


// function in function
 const div = () => {
const you = ()=> {
    let x = 3*344;
    return x;
    }
    
    return you();

}
console.log(div());

console.log("...............end...............")


// ARRAY


const names = ["Ali", "Olga" , "Nancy"];

// Array.includes() to check if true or false
console.log(names.includes("Ali")); // true 

console.log("...............end...............")


// Array.indexof (<item>) // to know index position
console.log(names.indexOf("Ali"));

//REMOVING ITEMS :
// Array.pop() // removing last item
// Array.shift() // removing first item

names.push("Zara");
names.unshift ("XX");
names.shift();          //removing firstItem
names.pop();           // removing lastItem
console.log(names);    // 0 indexOF ALi

console.log("...............end...............")



// Array.split()
const arr1 = ["Hi", "This", "is"];
const arr2 = ["Me", "writing", "you"];

//Array.concat
const arrTotal = arr1.concat(arr2);
arrTotal.push("You");
console.log(arrTotal.join(" "));



console.log("...............end...............")


// Array.filter() //creates a new array

let newArr = names.filter(name => name.length == 3 || name.length == 4 ); // length is the character's amount like Ali have 3 characters
console.log(newArr); // result "Ali" and 3 is the character's amount of Ali

// Array.find() returns the value of the first element very truthy first result!
const numbers = [1,2,3,4,55,67];
let arrCall = numbers.find(num => num == 55 );  // == & === are comparing dont use = here because it's mean assigning
console.log(arrCall); // result 55


// reverse()

const str3 = "JavaScript";
let newRevStr = str3.split("").reverse().join("");
console.log(newRevStr);
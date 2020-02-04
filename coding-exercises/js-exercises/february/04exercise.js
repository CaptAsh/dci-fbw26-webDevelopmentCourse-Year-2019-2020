//exercises from slack 1039am  04FEB2020 DIENSTAG

// 1. 10:39am
// Object Person. Create an object named person. 
// Loop through the object and print both the property and value of the object.

 const personn = {
        name : "Ali",
        age : 30,
        birthYear : 1950,
           
                
            }

            for(let properties in personn){
                console.log(`personn.${properties} : ${personn[properties]}`)


            };   /*person.name : Ali
                   person.age : 30
                   person.birthYear : 1950 */ 


                   console.log(".........end...........");


/*2. 11:06am
Get Values. 
Create a function that returns an array of all values of an object’s properties.

getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})

Expected output:
["tea", "coffee", "milk"] */ 

const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  }

const getValues = (object) =>{
    return Object.values(object)
}

console.log(getValues(getObjectValues)); // [ 'tea', 'coffee', 'milk' ]



console.log(".........end...........");



/* 3.  Add A Method. 
Create an object and add a method to 
that object which prints the values of the objects in a string.
Example
let person = {
  firstName: "Ali",
  job: "painter",
  age: 20, 
  city: Berlin
}
Example of Expected Output “Ali is a 20 year old  in Berlin”. */

let person = {
    firstName: "Ali",
    job: "painter",
    age: 20, 
    city: "Berlin"
  }
person.printOut = () => {

    return `Hi ${person.firstName} is ${person.age} year old and live in ${person.city}`;
} 
console.log(person.printOut()); // 


/* 01:15pm
 4.List Properties.
 Create a function that returns an array of properties 
of a javascript object.

Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"]

*/

let student = {
    name: "Mike", 
    class: "4A" ,
    course:"English"
  }

  const getArray = (object) =>{
    return Object.getOwnPropertyNames(object)
};
console.log(getArray(student));  //  [ 'name', 'class', 'course' ]


/// other way 

const studentt = {
    name: "Mike", 
    class: "4A" ,
    course:"English"
  }

console.log(Object.getOwnPropertyNames(studentt)); //  [ 'name', 'class', 'course' ]



console.log("........ solution down...........");


// 01:37pm
// 5.             countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2
// online solution can found here https://www.sitepoint.com/community/t/counting-frequency-of-character/216026 

const countLetterss = {
    name: "Mike", 
    class: "4A" ,
    course:"English"
  }

  function arraySplitting(text){
    let count = {};
    text.split('').forEach(function(x) {
     count[x] = count[x] ? count[x] + 1 : 1;
    });

    return count;
    
   }
   console.log(arraySplitting("goodmorningberlin2020!?@"));  
   
   
   /* {
    m: 1,
    o: 1,
    r: 2,
    n: 3,
    i: 2,
    g: 1,
    ' ': 1,
    b: 1,
    e: 1,
    l: 1,
    '!': 1,
    '?': 1,
    '@': 1
  } */


  



  // also work

function getOccurrences(name) {
    return name.split("").reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  }
  console.log(getOccurrences("tree")); // { t: 1, r: 1, e: 2 }
  



  console.log("........hadi solution down here...........");



function arrSpliting(str) {
  let arr = str.split("");
  let countObject = {};
  function characterCount(word, character) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === character) {
        count++;
      }
    }
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    countObject[currentChar] = characterCount(str, currentChar);
  }
  return countObject;
}
//console.log(arrSpliting("هادي"));

function countLetters(str) {
  let arr = str.split("");
  console.log(arr);
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
  }
  return result;
}
console.log(countLetters("ABC")); // { A: 1, B: 1, C: 1 }


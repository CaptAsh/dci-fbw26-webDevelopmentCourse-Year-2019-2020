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
//12FEB2020, Mittwoch
// NEW LESSON

 
// Destructuring objects as function parameters
function fun(num, { name }) {
    console.log(num);
    let firstName = { name };
    console.log(firstName);
  }
  fun(22, { name: "Ali" });
  const userData = {
    firstName: "Hadi",
    lastName: "Nsreeny",
    get fullName() {
      // this is getter method
      console.log(`${this.firstName} ${this.lastName}`);
    },
    set fullName(str) {
      // this is setter method
      let arr = str.split(" ");
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  };
  
  // getter
  userData.fullName;
  // userData.firstName = 'Ali';
  // userData.lastName = 'Xxx';
  
  // setter
  userData.fullName = "Ali xxx";

//////////////////////////////////////////////////77





// constructor()

function Person(name,age,activities){ // must use capital letter like P
this.name = name;
this.age =age;
this.activities = activities;
}

let ali = new Person("Ali", 22, ["dance" , "sing"]); 
console.log(ali);                    // Person { name: 'Ali', age: 22, activities: [ 'dance', 'sing' ] }

const ojb = new Date();  
console.log(ojb);                // 2020-02-12T08:32:05.492Z

const test = new Array();
console.log(test);              // []


/////// SMALL EXERCISE  /////////////////////////////////

function Human(firstName,lastName) {
	this.firstName = firstName;
	this.lastName  = lastName;
	this.print = function(){
  console.log(`${this.firstName} ${this.lastName}`);                    //  Ali Olga

    }
};

let myName = new Human("Ali", "Olga");
myName.print();            
console.log(`${myName.firstName} ${myName.lastName}`);                     //  Ali Olga


///////////////////////////////////////////////////////
console.log("::::::::::::::end::::::::::::");

// class 
/* 

- We use class to create one or more objects, we use it instance in you application but it will be like a  
for a newer objects if you will.

- The class will have instances properly and can have instances method, ideally we use the
 properties in the method to achieve a task.

- The class will have also a constructor, this bad boy will run only ones when the object being created, 
we use constructor function to setup the object
 class declaration creates a new class with a name that you give, you would  use prototype-based inheritance.*/


class Animals {
constructor(_kind, _hometown){  // setting up my constructor
this.kind = _kind;
this.hometown = _hometown;

}
display (){  // instances probably declare under the constructor

console.log(`It is very cute ${this.kind} ,and lives in  ${this.hometown}`);

}

}
let casper = new Animals("dog", "berlin");
casper.display();                                // It is very cute dog ,and lives in  berlin

console.log("::::::::::::::end::::::::::::");

let sofi = new Animals("Fish", "NY");
console.log(sofi.display());                     //  It is very cute Fish ,and lives in  NY



console.log("::::::::::::::end::::::::::::");

// other way to write constructor

class Color{
constructor(){
this.name  = "placeholder";
this.age  = 0;
this.birthday = 0;

}


}
const red = new Color();
red.name = "ORANGE"
red.age = 200;
console.log(red);                // Color { name: 'ORANGE', age: 200, birthday: 0 }

console.log("::::::::::::::end::::::::::::");


////////////////////////////////////////////////////////////////////////////


// extends and super()
// extends --> inheriting the methods from the original class which being callled
class Person1 {
    constructor(_name, _age){
this.name = _name;
this.age = _age;

    }

display(){

    console.log(`Hey ${this.name}, i'm ${this.age}`)
}

}

class Kid extends Person1 {
constructor(_name, _age, _height){
   super(_name, _age);
  this.height = _height
}

show(){
return `${this.name} is a ${this.age} years old, i am child class `;

}
}
let zain = new Kid("Ali", 30);
zain.display();
console.log(zain.show());




zain.increment = function (){

    console.log("cool");
};
console.log(zain.increment);


console.log("::::::::::::::end::::::::::::");

// REVISION
let names = ["Ali", "Nancy", "olga", "Hadi"];

//Array.find - will get just one truthy result

findName= names.find(name =>name.length ==4)
console.log(findName);
                                      // olga
console.log("::::::::::::::end::::::::::::");

// Array.filter() - will get all truthy result 

let arr = ["Ali", "Nancy", "olga", "Hadi"];
const result = arr.filter(name => name.length > 3);
console.log(result);           
                           // [ 'Nancy', 'olga', 'Hadi' ]
console.log("::::::::::::::end::::::::::::");


console.log("::::::::::::::end::::::::::::");
// Array.map()
names.map(x => console.log(x));

/*
Ali
Nancy
olga
Hadi

*/
console.log("::::::::::::::end::::::::::::");


// Array.reduce()


let numbers = [2,4,6,8,9];

result1 = numbers.reduce((acc, cur) => acc + cur) / numbers.length
console.log(result1); // 5.8

console.log("::::::::::::::end::::::::::::");

// Array.sort() - just organise the original array

let letters = ["a", "c", "b", "d"];

letters.sort();
console.log(letters);   // [ 'a', 'b', 'c', 'd' ]






// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
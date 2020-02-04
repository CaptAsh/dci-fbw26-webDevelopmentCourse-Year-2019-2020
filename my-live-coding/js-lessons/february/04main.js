// lesson 04FEB2020





console.log(".........end...........");


// Objects
// keys, properties : value

const o = {
    1: "Hadi", // Keys no. 1 have value Hadi
    2: "Ali",
    3: "Olga"
}


console.log(o);

console.log(".........end...........");


///////////////


const obj = {
name: "Nancy",
lastName : "Ali",
age : 44,
add: "yyy str"
}

console.log(obj);

// old school
/*let aliName = "Ali",
let aliAdd = "yyy str"      */

console.log(".........end...........");

/////////////////////


// const <namespace> = {<key 1> : <value 1> , <key 2>: <value 2>, ...}

const object = {
color : "Red",
size : "big",
year : 1990,
array: [1,3,4,5,67]

};


console.log(object);
//////////////
console.log(".........end...........");


//Accessing properties with bracket notation
 
const car = {}; //      empty object because you really don't know what will happened
console.log(car);
car["name"] = "Ford";
console.log(car);
car["year"] = "2020";
console.log(car);


console.log(".........end...........");


// Accessing properties with dot notation
car.age = 22;            // often to modify properties
car.age = 44;

console.log(car.name);  
console.log(car["name"]);
console.log(car);


console.log(".........end...........");

// two ways to write empty Object 

let user1 = new Object();     // "object constructor" syntax
let user2 = {};               // "object literal" syntax

console.log(".........end...........");


// cool for in

for(let properties in car){
console.log(`car.${properties} : ${car[properties]}`);

}

/*
RESULT:
car.name : Ford
car.year : 2020
car.age : 44 
*/


console.log(".........end...........");

/////////////////


const person = {
name : "Zain",
age : 20,
birthYear : 2000



};

// Object.keys   // will bring back the key in array
console.log(Object.keys(person));    // [ 'name', 'age', 'birthYear' ]




// Object.values
console.log(Object.values(person)); // [ 'Zain', 20, 2000 ]



console.log(".........end...........");



// Object.entries()

for(let [key,value] of Object.entries(person)){        // for   of 

console.log(`${key} : ${value} `);
}
                                                  /* name : Zain 
                                                      age : 20 
                                                birthYear : 2000 */
console.log(".........end...........");


// Methods

const personn = {
    name : "Zain",
    age : 20,
    birthYear : 2000,
    print : function (){
    
        console.log(`this user ${personn.name} is born in ${personn.birthYear}`); //this user Zain his born in 2000
    },

    old : () => {
     return 2020 - personn.birthYear;
    }
    
    
    };
personn.print();
console.log(personn.old()) // 20

console.log(".........end...........");
/////////////////////////////////////////////////////////////////

// Object.assign

const obj1 = {1: 2, 2: 300};  // source  
const obj2 = {1: 4, 3: 3224}; // target

const totalObj = Object.assign({4:55},{5:60},{name:"Nancy"}, obj1,obj2);
console.log(totalObj);               // { '1': 4, '2': 300, '3': 3224, '4': 55, '5': 60, name: 'Nancy' }



console.log(".........end...........");

/////////////////////////////////////////////////////////

// Object.defineProperty()

Object.defineProperty(person, "birthDay",{
value : 20,
writable : false // use this to secure the property

});

// person.birthDay = 30;
console.log(person.birthDay);   // 20

console.log(".........end...........");


/////////////////////////////////////////////////7




//Object.defineProperties()
Object.defineProperties(person, {
p1: {
value: 33,
writable : true
},

p2: {
value: {},    // 
writable : true
},

p3: {}       // undefined because empty value

});
console.log(person.p1);  // 33
console.log(person.p2);  // {}
console.log(person.p3);  // undefined


console.log(Object.keys(person));  //  [ 'name', 'age', 'birthYear' ]


console.log(".........end...........");
////////////////////////////////////////////////////////
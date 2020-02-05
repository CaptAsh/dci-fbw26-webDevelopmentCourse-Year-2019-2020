// 05FEB2020 MITTWOCH

// REVISION

//Object literal context

const o = {
    name :"Ali",
    age : 22,
    add : "yy str"
}


//1- Dot Notation            object.property
o.name;
o.age = 33;

//2- Bracket Notation              object["property"]
o["add"] = "see str";

console.log(".........end...........");


// Object.keys
console.log(Object.keys(o));   //  [ 'name', 'age', 'add' ]


console.log(".........end...........");


// Object.values
console.log(Object.values(o)); // [ 'Ali', 33, 'see str' ]

console.log(".........end...........");


// Method

o.print = function(){
console.log(`Hi ${o.name} you are very old ${o.age}`); // Hi Ali you are very old 33

}
o.print();

console.log(".........end...........");


/* This

function userData(userName, userAge, userAdd){
const obj = {
 name : userName,
 age : userAge,
 add : userAdd,


 obj.outPut = function(){      // not allowed to ES6 here with this method
console.log("hihihihihi");
}

};

return obj;
}
userData("Olag", 40, "see str");   */

console.log(".........end...........");

/////////////////////////////////////////


// Object.prototype.hasOwnProperty()

const person = {

    height : 177,
    age : 34,
    city : "Berlin"
};
console.log(person.hasOwnProperty("sss")); // false
console.log(person.hasOwnProperty("city"));  // true
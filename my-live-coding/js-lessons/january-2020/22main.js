// 22Jan2020 Mittwoch


 // new style -  Arrow Function Expression :
const sum = (x,y) => {
    return x +y;

};
sum(5 ,4);

////////////////////////

//  Function Expressions:    

const summ = function (x,y){
    return x +y ;

};
summ(5 ,4);

/////////////////////////////////

console.log("...............end...............")

// 
const names = ["Ali", "Hadi" , "Olga", "Nancy"];
const newArr =  names.map((name ,index) => name  [0] == "O");  // the first name is the PARAMETER FROM names
console.log(newArr);


console.log("...............end...............")

// Array.map(value, index => {})

names.forEach((name , index) => console.log(name + " index num =" + index));

console.log("...............end...............")

// old school

for (let i = 0; i < names.length; i ++ ){
    console.log(names[i] + " index num =" + i);
}

console.log("...............end...............")



// Array.reduce()
// const reducer = (acc , cur) => acc + value;   // accumulator is my box  and  currentValue is

const numArr = [1,3,4,6,7];
const reducer = (acc , cur ) => acc + cur; // acc = 100 cur = 1 // starting number for acc is 0 by default
console.log(numArr.reduce(reducer , 100)); // 100 is starting num for acc

console.log("...............end...............")



// Call Stack
function first (callback){

    return callback;
} 
function  callback (callTwo){
    let x = 9;
    return callTwo;
}
function callTwo(){
    let we = true;
    return "Hi";

}
console.log(first(callback(callTwo())));


console.log("...............end...............")


// our best friend

function display (str){
    console.log(str);
}

const print = str  => console.log(str);
print("Hadi");

console.log("...............end...............")




//function <name> (parameter){ .....}
// https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99


function yellow (val,val2 ){
    const x = 100;
    const y = 200;
    console.log(y / x + val + val2);
}
yellow(2, 3 ); // this is FUNCTION CALL

console.log("...............end...............")
 // another example here :

const AliPets = ["Dyson, Kitty"];

const pink = (name,  array, age = 10,) => { // 10 is value for age if the user did not give age
console.log(`Hi ${name}, you are very young ${age} , you have a nice pets ${array}`);
}
pink ("Ali" ,AliPets, 20);
pink ("Abu" ,"Miaw", 21);

console.log("...............end...............")


const greeting = (nam , add , age, pla, ) => {

    age += 20;
    nam += ",";
    pla +=  "DE"
    add += ".";
    // let result = (`Hey ${nam} it is very nice to live in ${add} you are getting old to fast ${age}, 
    // in your old ${pla}`);  also can you this 
    //return result ;

    return `Hey ${nam} it is very nice to live in ${add} you are getting old to fast ${age}, in your old ${pla}`;
}
console.log(greeting ("Ali", "yy str." , 10, "Berlin"));


console.log("...............end...............")

const add = () => {
    let x = 1120 * 3;
    console.log(x);

}
add(); // function call
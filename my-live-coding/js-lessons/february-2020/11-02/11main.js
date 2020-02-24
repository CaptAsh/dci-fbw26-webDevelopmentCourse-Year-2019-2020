// 11FEB2020, DIENSTAG

//NEW LESSON
 

console.log("::::::::::::::end::::::::::::");

// Nesting arrays
// Nesting and accessing arrays within each other


 const arr = [
[2,3,4],
[533, 53],
[345,56,6]

];
console.log(arr[1][1]);  //  53
console.log(arr[2][1]);  //  56

console.log("::::::::::::::end::::::::::::");

for(let i = 0; i<arr.length; i++){
  
for(let j = 0; j<arr[i].length;j++){

console.log(arr[i][j]);  //  

} 

}

/* output
2
3
4
533
53
345
56
6 */






console.log("::::::::::::::end::::::::::::");


let arrayNew = [];
for (let i = 0; i<=5; i ++){

    for(let j = 0; j<=2; j++){

arrayNew.push([i,j]); // pushing an array

    }
}

arr.forEach(array => array.forEach(Element => console.log(Element))); 


/* output
2
3
4
533
53
345
56
6

*/


console.log("::::::::::::::end::::::::::::");


console.log(arrayNew); // 

/* expected output 

[
  [ 0, 0 ], [ 0, 1 ], [ 0, 2 ],
  [ 1, 0 ], [ 1, 1 ], [ 1, 2 ],
  [ 2, 0 ], [ 2, 1 ], [ 2, 2 ],
  [ 3, 0 ], [ 3, 1 ], [ 3, 2 ],
  [ 4, 0 ], [ 4, 1 ], [ 4, 2 ],
  [ 5, 0 ], [ 5, 1 ], [ 5, 2 ]
]

*/


////////////////////////////////////////
console.log("::::::::::::::end::::::::::::");

let names = ["ali", "olga" ,"nancy"];
names.forEach(name => console.log(name)); //just an explanation

 /* output
 ali
olga
nancy
 */


console.log("::::::::::::::end::::::::::::");

names.map(name => console.log(name));  // /just an explanation

/*output

 ali
olga
nancy

 */

console.log("::::::::::::::end::::::::::::");


 ///////////////////////////////////

let family = [["ali", 22 ,"teacher"],["olga", 40 ,"chef"]];

for( let i = 0; i < family.length; i ++){
    for( let j = 0; j < family[i].length; j++){
console.log(family[i][j]);

/* output


ali
22
teacher
olga
40
chef

*/

    }

}

console.log("::::::::::::::end::::::::::::");


// forEach
family.forEach(arr => arr.forEach(element => console.log(element)));



/* output


ali
22
teacher
olga
40
chef

*/
console.log("::::::::::::::end::::::::::::");


// for of
 
for(let innerArray of family){
    for( let element of innerArray){

        console.log(element);   
     }


}

/* output

ali
22
teacher
olga
40
chef

*/
console.log("::::::::::::::end::::::::::::");
//////////////////////////////////////////////////





// Nesting objects
// Nesting and accessing objects in objects

const tShirt = {

color : "red",
size  : ["xs", "s","m", "l", "xl"],
countries: {
name: ["china", "germany"],
capital : ["beijing", "berlin"],
obj : {

one: 3344,
two : 5654,
printOut : function (){

console.log(this.one) // refer to obj

}

},

display : function(){
    console.log(this.name); // refer to countries
    
}

},


fabric : "cotton",
method : function(){

console.log(this.color) // refer to tShirt


}

};



// this is school way

console.log(tShirt.size[2]);               // m
console.log(tShirt.countries.capital[1]); // berlin
console.log(tShirt.countries.name[1]);   // germany
console.log(tShirt.countries.obj.two);  // 5654

console.log("::::::::::::::end::::::::::::");


tShirt.method();                   //  red
tShirt.countries.display();       //   [ 'china', 'germany' ]
tShirt.countries.obj.printOut(); //    3344


console.log(":::::::::::newShortWay::::::::::::");


let newShortWay = tShirt.countries;
newShortWay.display();              //  [ 'china', 'germany' ]

console.log("::::Nesting and accessing arrays in objects::::::::::::");


// Nesting and accessing arrays in objects

 let car = ["ford", "pink", 2020, "engine", "model"];


let [carName, carColor, carYear, ...rest] = car ;

console.log(carName);         // ford
console.log(rest);           // [ 'engine', 'model' ]
console.log(car);           //  [ 'ford', 'pink', 2020, 'engine', 'model' ]


console.log("::::::Nesting and accessing arrays in objects:::::::::::");



// Nesting and iterating over objects in arrays

const object = {
firstName : "Alii",
old : "22",
country : "germany"

};
({firstName, old, country} = object);      // new way
console.log(firstName);                   // output is Alii

console.log(object.firstName);          // normal way  // output is Alii



// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

let car = ["Ford", "pink", 2020, "enj", "xs"];
// let carName = car[0];
// let carColor = car[1];
let [carName, carColor, carYear, ...rest] = car;
console.log(carName);
console.log(rest);
console.log(car);
// Nesting and iterating over objects in arrays
const object = {
  firstName: "Ali",
  old: 22,
  country: "Germany"
};

// Extracting values from objects: Object destructuring assignment

({ firstName, old, country } = object);

// tomorrow topic ({ firstName, old, country } = obj);
console.log(firstName);

//console.log(object.firstName);
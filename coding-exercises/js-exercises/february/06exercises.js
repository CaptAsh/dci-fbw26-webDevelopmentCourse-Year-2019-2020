/*  exercises 06feb2020 mittwoch


Switch Keys and Values. Create a function to get a copy of an object. 
/  The copy must switch the keys and values.

Example:
let person = {
  name: "John", 
  job: "teacher"
}
Expected Output:
{"John": name, "teacher": job}  */
console.log(".........end...........");


let person = {
    name: "Ali", 
    job: "teacher",
}

function keysToValue(obj) {
const keysValuesPair = Object.entries(obj)
console.log(keysValuesPair);               // [ [ 'name', 'Ali' ], [ 'job', 'teacher' ] ]

let reversArr = [];
for( let i = 0; i < keysValuesPair.length; i++ ) {

reversArr.push(keysValuesPair[i].reverse());


}
console.log(reversArr);                    // [ [ 'Ali', 'name' ], [ 'teacher', 'job' ] ]
return Object.fromEntries(reversArr);
}

console.log(keysToValue(person));           // { Ali: 'name', teacher: 'job' }






console.log(".........end...........");
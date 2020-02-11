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

names.map(name => console.log(name)); // /just an explanation

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




// Nesting objects
// Nesting and accessing objects in objects

// Nesting and accessing arrays in objects

// Nesting and iterating over objects in arrays

// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

// Extracting values from objects: Object destructuring assignment

// EXERCISES 20JAN2020
//ARRAY

console.log("::::::::::::::create object::::::::::::::::")

/* 1. Declare a variable named “euroCities” and assign an array to the variable e.g. 
[“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. 
Declare another variable and assign the second item of the array as a value.*/

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let euroCity = euroCities[1]; // Declare another variable and assign the second item of the array as a value.

// 2. Change the first item in the array to “Berlin”.
euroCities[0] = "Berlin";
console.log(euroCities); //  result [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

console.log("::::::::::::::end:::::::::::::::");

//// 3. Print the length of the array “euroCities”.
console.log(euroCities.length); // result is 5

console.log("::::::::::::::end:::::::::::::::");

/// 4. Remove the last item of the array “euroCities”.
euroCities.pop();
console.log(euroCities); // result  Berlin', 'London', 'Valletta', 'Prague'


console.log("::::::::::::::end:::::::::::::::");

/// 5. Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities); // result is Berlin', 'London', 'Valletta', 'Prague', 'Rome'

console.log("::::::::::::::end:::::::::::::::");

//// 6.Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["Dubai", "Manila", "Bangkok", "Taiwan", "Mumbai"];
//                   0           1       2            3           4    this is Js think


//7. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let newArray = asianCities.splice(1, 3);
console.log(newArray); // 'Manila', 'Bangkok', 'Taiwan'

console.log("::::::::::::::end:::::::::::::::");


///////////more exercises on 1422Hours //////////////

/*1. sumOfNumbers. 
Create a program that adds up the numbers in an array (of at least 3 numbers). 
Bonus: Print to screen both the sum and the product of these numbers.*/

let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i <= intArr.length; i++) {
  result += intArr[i]; // 2
  product *= intArr[i];
}

console.log(
  `The sum for your Array is ${result}, The product for your Array is ${product}`
);
console.log("::::::::::::::end:::::::::::::::");


/* 2.Hello Friend
 Create an array filled with your friends’ and family’s names. 
Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
Bonus: Print the indexes of each item in the array. 
Expected output example: Mike is at index 1 of my friends array.*/

const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(`Hello ${names2[i]}`);
  console.log(`Hello ${names2[i]}, and he is index ${i} of Names of array`);
}
console.log("::::::::::::::end:::::::::::::::");

 // other solution 
let friends = ["Marie", "Carlos", "Nancy", "Amin", "Ali"];
for (i = 0; i < friends.length; i++) {
  console.log(
    `${friends[i]} is at index ${friends.indexOf(friends[i])} of my friend's array.`
  );
}

console.log("::::::::::::::end:::::::::::::::");


/* 3. City Names. 
Create an array of city names. 
Loop through the array and add the city names to a string. 
Example of expected output: “Berlin, Paris, Prague, Rome”. */

const citiesNames = ["Berlin", "Paris", "Prague", "Rome"];
console.log(citiesNames.join(" , "));


console.log("::::::::::::::end:::::::::::::::");


// 4. Odds and Evens. 
// Create a program that changes a given array by adding 1 to each odd integer
// and subtracting 1 from each even integer. Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

// hadi solution:

let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    int++;
    newNumArr.push(int);
  } else {
    int--;
    newNumArr.push(int);
  }
}
console.log(numArr);

console.log("::::::::::::::end:::::::::::::::");

// other solution 

let givenNumbers = [6, 9, 10, 20];
for (i = 0; i < givenNumbers.length; i++) {
  //
  if (givenNumbers[i] % 2 == 0) {
    givenNumbers[i] = givenNumbers[i] - 1;
  } else {
    givenNumbers[i] = givenNumbers[i] + 1;
  }
}
console.log(givenNumbers);

console.log("::::::::::::::end:::::::::::::::");


/*5. Capitalize. 

Create a program that capitalize the first letter of each element in an array of names.
 Examples:

[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]*/

const arrNames = ["sara", "ali", "nancy"];
for (let i = 0; i < arrNames.length; i++) {
  console.log(arrNames[i][0]); // just for testing
  arrNames[i] =
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase(); // THIS IMPORTANT MUST UNDERSTAND!!!!!
}
console.log(arrNames); // [ 'Sara', 'Ali', 'Nancy' ]



console.log("::::::::::::::end:::::::::::::::");




//EXERCISES 21JAN2020 , TUESDAY

console.log("::::::::::::::SPLIT::::::::::::::")

/*Reverse the string: “JavaScript”.

1.Make an array of your siblings’ names or your favorite movie characters’ names.
2.Make an array of your parents’ names.
3.Combine these two arrays.
4.Add your pets’ names.
5.Reverse the order of the array.
6.Access one of your parents’ names.
7.Update the name of one of your parents.*/



//Reverse the string: “JavaScript”.

const str1  = "JavaScript";
let stringToArray = str1.split("");    // split method turns a String into an array of strings, by separating the string at each instance of a specified separator string.
console.log(stringToArray);

/*

[
  'J', 'a', 'v', 'a',
  'S', 'c', 'r', 'i',
  'p', 't'
]

*/

console.log("::::::::::::::SPLIT::::::::::::::")


console.log("..............REVERSE............")

let reverseArr = stringToArray.reverse();   // reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
console.log(reverseArr);

/*
[
  't', 'p', 'i', 'r',
  'c', 'S', 'a', 'v',
  'a', 'J'
]
*/
console.log("..............REVERSE............")

console.log("...............JOIN...............") 


let revStr = stringToArray.join("");          //  joins all elements of an array into a string!
console.log(revStr);                  // output  tpircSavaJ 

/////////////////////////////
console.log("...............JOIN...............")



console.log("..............END..............")


//1. Make an array of your siblings’ names or your favorite movie characters’ names.

const names = ["Ali", "Hadi" , "Olga", "Nancy", "Mike"];


// 2.Make an array of your parents’ names.
const parent = ["Taj", "Musnaini"];





// 3. combine this two arrays using concat() // concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

const bffArray = names.concat(parent); // 
console.log(bffArray);  // [ 'Ali', 'Hadi', 'Olga', 'Nancy', 'Mike', 'Taj', 'Musnaini' ]

console.log("...............END.............")


// 4.Add your pets’ names. using push() - push() method adds one or more elements to the end of an array and returns the new length of the array.

bffArray.push("Kitty");
bffArray.push("Taylor");
console.log(bffArray);



/*
[
  'Ali',      'Hadi',
  'Olga',     'Nancy',
  'Mike',     'Taj',
  'Musnaini', 'Kitty',
  'Taylor'
]


*/
console.log("...............END.............")


// 5.Reverse the order of the array.

bffArray.reverse();
console.log(bffArray);

/*
[
  'Taylor',   'Kitty',
  'Musnaini', 'Taj',
  'Mike',     'Nancy',
  'Olga',     'Hadi',
  'Ali'
]




*/


// 6.Access one of your parents’ names. using find() - find() method returns the value of the first element in the provided array that satisfies the provided testing function.
console.log(bffArray.find(value => value  == "Taj")); // this for test 


// 7.Update the name of one of your parents.*/

let dad = bffArray[3];
dad =  "Katy"; // so Katy replace Taj
bffArray[3] = dad;
console.log(bffArray);


/*
[
  'Taylor',   'Kitty',
  'Musnaini', 'Katy',
  'Mike',     'Nancy',
  'Olga',     'Hadi',
  'Ali'
]
*/

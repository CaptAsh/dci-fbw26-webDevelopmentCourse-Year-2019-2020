//EXERCISES 21JAN2020 DIENSTAG




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
let stringToArray = str1.split("");                // split
console.log(stringToArray);


console.log("...............end...............")

stringToArray.reverse();                            // reverse

let revStr = stringToArray.join("");                // join
console.log(revStr);

/////////////////////////////
console.log("...............end...............")

//1.Make an array of your siblings’ names or your favorite movie characters’ names.

const names = ["Ali", "Hadi" , "Olga", "Nancy", "Mike"];


// 2.Make an array of your parents’ names.
const parent = ["Taj", "Musnaini"];





// 3. combine this two arrays.

const bffArray = names.concat(parent);
console.log(bffArray);


// 4.Add your pets’ names.

bffArray.push("Kitty");
bffArray.push("Taylor");
console.log(bffArray);




// 5.Reverse the order of the array.

bffArray.reverse();
console.log(bffArray);




// 6.Access one of your parents’ names.
console.log(bffArray.find(value => value  == "Taj")); // this for test 

let dad = bffArray[3];



// 7.Update the name of one of your parents.*/

dad =  "Katy"; // so Katy replace Taj
bffArray[3] = dad;
console.log(bffArray);



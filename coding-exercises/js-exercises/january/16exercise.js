//16.Jan.2020
//EXERCISES

// 1. Addition. Write a program to add up the numbers 1 to 20. // must ask again!!!
let result = 0;
for (let q = 1; q <= 20; q++) {
  result += q;
}
console.log(result);

console.log("........No. 1............");



// 2. There are i bottles of beer on the wall. Write a program that will output
// “There is one bottle of beer on the wall.”
//“There are two bottles of beer on the wall” up until there are five bottles.

let text = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle ${text}`);
  } else {
    console.log(`There are ${i} bottle ${text}`);
  }
}
console.log("...............No. 2..............");

// The odd/even reporter. Write a program that will iterate from 0 to 20.
// For each iteration, it will check if the current number is even or odd,
// and report that to the screen (e.g. “2 is even”).

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 3 == 0) {
    console.log(`${i} is odd`);
  }
}

for (let a = 0; a <= 20; a++) {
  if (a % 2 == 0) {
    console.log(`${a} is even`);
  } else if (a % 2 == 1) {
    console.log(`${a} is odd`);
  }
}
console.log("Thank");

console.log("..............No. 3...............");

let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYYY \n"; // box = box + YYYY\n  // \n is a newline character
}
console.log(box);

console.log("..............No. 3...............");

///////////////////////////// LOOP  EXERCISE in CLASS /////////////////// must repeat moreeee!!!!!!!

// 1, 2, 4, 8... 128
for (let i = 1; i <= 128; ) {
  console.log(i);
  i += i;
}

// 0, 2, 4... 10
for (let i = 0; i <= 10; ) {
  console.log(i);
  i += 2;
} //

// 3, 6, 9 ... 15
for (let i = 3; i <= 15; ) {
  console.log(i);
  i += 3;
} //

// 9, 8, 7... 0
for (let i = 9; i >= 0; ) {
  console.log(i);
  i--;
} //

// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(i);
  }
} //

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let counter = 0;
for (let i = 0; i <= 4; ) {
  console.log(i);
  if (i == 4 && counter < 2) {
    i = 0;
    counter++;
  } else {
    i++;
  }
}
///////////////////////////////////////  must repeat more!!!!!!!!!!!!!!!!!!!!

// Stair //

/* 
T
TT
TTT
TTTT
TTTTT
TTTTTT
*/

///// solution from Hadi
let Tbox = "";
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (i == j) {
      break;
    } else {
      Tbox += "T";
      console.log(Tbox);
    }
  }
}

console.log("...............end........................");

/////// solution from Mauricio

for (i = 0; i <= 6; i++) {
  console.log("T".repeat(i));
}

console.log("...............end........................");

/// solution from Claudinei

let myString = "TTTT";
for (let i = 0; i <= myString.length; i++) {
  console.log(myString.substr(0, i));
}

console.log("...............end........................");

/////////////////////////////////////////////////////////////////
/* 
@@@@@@
@@@@
@@@
@@
@
*/
//hadi solution :

let Tbox2 = "@@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(Tbox2.slice(i));
}

console.log("...............end........................");
//hadi solution
//// claudinei solution:

let myStringg = "AAAA";
for (let i = myStringg.length; i > 0; i--) {
  console.log(myStringg.substr(0, i));
}

console.log("...............end........................");

let firstName = "Hadi";
let firstName1 = "Ali";
let firstName2 = "Olga";
let arrVar = [firstName, firstName1, firstName2];
let arr = ["Hadi", "Ali", "Olga", "Nancy"];
console.log(arr[2]);
let arrInt = [1, 2, 3, 4, 5, 6];
console.log(arrInt[3]);

let arrNum = ["First", "2nd", "3rd", "4th"];
//console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}
let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; // arrStr[0] = 2 +0
  console.log(arrSt); //0
}

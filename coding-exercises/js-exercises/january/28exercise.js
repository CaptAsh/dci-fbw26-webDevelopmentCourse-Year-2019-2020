// EXERCISES from GITHUB fbw-26 live-coding 28-01 
// 28JAN2020 DIENSTAG
 

console.log("........no.1......hadi solution..............")

//  1. Create a function that looks inside a givin string if it has the word (JavaScript) if so print 
// "I know it's crazy 😉"


// hadi solution // 




function checkStr(string) {
  let strToArray = string.split(" ");
  if (strToArray.includes("JavaScript")) {
    console.log("I know it's crazy 😉");
  }
}
checkStr("Hi my name is HADI");
checkStr("I like JavaScript");


console.log("........no.1......my solution..............");

// my solution


const string = str => {
    if (str.includes("JavaScript")) {
      console.log(`I know it's crazy 😉`);
    }
  };
  //call the function here 
  string("JavaScript is easy to learn but hard to master!");



  


//2. Create a function that calculates the user age. e.g. 2000 -> 20.
console.log("........no.2......hadi...............")


function age(num) {
  let year = new Date().getFullYear();
  let userAge = year - num;
  return num < year + 1 && num > 1900
    ? `${userAge} years old`
    : `Please enter a valid year`;
}
console.log("age");
console.log(age(1940));
console.log(age(2200));


console.log("........no.1......my solution..............")


function calculateAge(birthYear){

let currentYear = new Date().getFullYear();

return currentYear - birthYear;
}

console.log(calculateAge(2000) + " years old."); // 20




//3. Create a function that accepts a text from user and check if the user has entered a month name, 
// if so print out that month and in which season it is.

console.log("........no.2......hadi solution...............")

function monthCheck(string) {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];

  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;
  let currentSeason = monthToLook => {
    let seasonName = "";
    if (
      monthToLook == months[0] ||
      monthToLook == months[1] ||
      monthToLook == months[2]
    ) {
      seasonName = seasons[0];
    } else if (
      monthToLook == months[3] ||
      monthToLook == months[4] ||
      monthToLook == months[5]
    ) {
      seasonName = seasons[1];
    } else if (
      monthToLook == months[6] ||
      monthToLook == months[7] ||
      monthToLook == months[8]
    ) {
      seasonName = seasons[2];
    } else if (
      monthToLook == months[9] ||
      monthToLook == months[10] ||
      monthToLook == months[11]
    ) {
      seasonName = seasons[3];
    } else {
      seasonName = "Sorry something went wong";
    }
    return seasonName;
  };
  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      let currentWord = strToArray[i];
      result += `You have entered ${currentWord}, which is in ${currentSeason(
        currentWord
      )}. `;
      counter++; // what is this ???
    }
  }
  if (counter == 0) {
    result = `Sorry, I didn't find any months in your text.`;
  }
  return result;
}
console.log("monthCheck");

console.log(monthCheck("hi is jun july"));
console.log(monthCheck("Hi hi is"));



console.log(".........no.3.....my solution..............");

const seasonOfMonth = text => {
    let textArr = text.split(" ");
    let monthsCapCAse = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let winter = ["January", "February"];
    let listofMonths = [];
    let result = "";
    for (let i = 0; i <= monthsCapCAse.length; i++) {
      if (textArr.includes(monthsCapCAse[i])) {
        listofMonths.push(monthsCapCAse[i]);
        console.log(listofMonths);
        if (listofMonths.includes("January")) {
          result = `The month ${listofMonths} is in Winter.`;
        }
        if (listofMonths.includes("February")) {
          result = `The month ${listofMonths} is in Winter.`;
        }
        if (listofMonths.includes("March")) {
          result = `The month ${listofMonths} is in Spring.`;
        }
        if (listofMonths.includes("April")) {
          result = `The month ${listofMonths} is in Spring.`;
        }
        if (listofMonths.includes("May")) {
          result = `The month ${listofMonths} is in Spring.`;
        }
        if (listofMonths.includes("June")) {
          result = `The month ${listofMonths} is in Summer.`;
        }
        if (listofMonths.includes("July")) {
          result = `The month ${listofMonths} is in Summer.`;
        }
        if (listofMonths.includes("July")) {
          result = `The month ${listofMonths} is in Summer.`;
        }
        if (listofMonths.includes("August")) {
          result = `The month ${listofMonths} is in Summer.`;
        }
        if (listofMonths.includes("September")) {
          result = `The month ${listofMonths} is in Autumn.`;
        }
        if (listofMonths.includes("October")) {
          result = `The month ${listofMonths} is in Autumn.`;
        }
        if (listofMonths.includes("November")) {
          result = `The month ${listofMonths} is in Autumn.`;
        }
        if (listofMonths.includes("December")) {
          result = `The month ${listofMonths} is in Winter.`;
        }
      }
    }
    return result;
  };
  let inputSeason = "In January the weather is cold";
  console.log(seasonOfMonth(inputSeason));





/*/ easy way maybe :

function nameOfThatMonthEasyWay (num){
    let result = "";
    let newNum = num -1;   // 

    if(num >= 1 && num <= 12 ){
     result = monthNames[newNum];
     
    } else {
result = "Sorry is not a a month"

    }
      return result;   
    }
    console.log(nameOfThatMonthEasyWay(10)); // Okt */


   

   
//4. Create a function that takes a string and a word, 
// and then returns true or false depending on whether the word 
//starts with the initial string.dictionary("bu", "button") ➞ true
//dictionary("tri", "triplet") ➞ true


console.log(".......no.4...hadi solution...............");

function strWordCheck(str, word) {
  const indexEnd = str.length;
  const lowerCaseStr = str.toLowerCase();
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord.substring(lowerCaseStr, indexEnd) === str) {
    return true;
  } else {
    return false;
  }
}
console.log("strWordCheck");
console.log(strWordCheck("hicc", "hiccough"));
console.log(strWordCheck("spices", "German food uses spices"));
console.log(strWordCheck("hello", "Hello, World"));



console.log(".......no.4...my solution...............");


function dictionary(str, word) {
  let firstChars = word.slice(0, str.length);
  if (firstChars.includes(str)) {
    console.log("true");
  } else {
    console.log("false");
  }
};

dictionary("bu", "button"); // true

    
    
  

//5. Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

/*//////////////////////////
const twofer = who => {
    return `Two for me and one for ${who}`;
  };
//////////////////////////////////*/

console.log("...........no.5...hadi solution...............");


const twofer = (who = "you") => {
  return `Two for me and one for ${who}`;
};
console.log("twofer");
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"





console.log("...........no.6...my solution...............");


/*const twofer = (who= 'you') => {
    if (who == undefined) { // modify this
      return `Two for me and one for you`;
    } else {
      return `Two for me and one for ${who}`;
    }
  };
  console.log(twofer("Ali")); // -> "Two for me and one for Ali"
  console.log(twofer()); // -> "Two for me and one for you"  */

  
  
  


  /* 6. 

  Complete the function below so that it still calculates the power of a 
  number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
  Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4),
   If you call it with just 2, it should return 4 (2 to the power of 2). */
  
/*   ///////////////////////////////////////
const exponent = (num, exp) => {
    let result = 1;
  
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
  
    return result;
  };
  
  console.log(exponent(3, 3)); // -> 27
  console.log(exponent(3)); // -> 9

////////////////////////////////////////   */

console.log("...........no.6...hadi solution...............");

const exponent = (num, exp = 2) => {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9


console.log("...........no.6...my...............")


/* const exponent = (num, exp =  2) => {
    let result = 1;
    if (typeof exp === "undefined") {
      exp = 2;
    } else {
      exp;
    }
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
    return result;
  };
  console.log(exponent(3, 3)); // ->  27
  console.log(exponent(3)); // ->     9  */




/////////////////////////////


  // 7.

  // Create a function will calculate a student degrees for 6 subjects,
  //if the average was less than 70 will print (F)
  // Over 70 and less than 80 (C)
  // Over than 80 and less than 85 (B)
  // Over than 85 and less than 90 (A)
  // And over 90 print (A+)


  console.log("............no.7..hadi.2nd solution..............")

/* const studentDe = (...args) =>{

let result = "";
let sum = 0;
let average = 0;  

console.log(args.length + "length");
/* 
for( let i = 0; i < args.length; i ++){
sum += args[i];
}
console.log(sum);   */

sum = args.reduce((acc,cur) => acc + cur);  // args.length
average = Math.floor ( sum / args.length);


if (average < 70){
    result = `this student has F mark and the average is ${average}`;
} else if ( average >= 70 && average <= 80){
    result = `this student has C mark the average is ${average}`;

} else if ( average > 90)
     result = `this student has A+ mark the average is ${average}`;
} else {
  result = `Sorry something went wrong`;
}

return result;
};
console.log(studentDe(33, 4,55, 66, 78, 34, 2)); */




console.log("............no.7..hadi...1st solution............")

  function average(...args) {
    let notesResult = Math.floor(
      args.reduce((acc, cur) => acc + cur) / args.length
    );
    let result = "";
    if (notesResult > 90) {
      result = `${notesResult} percent is an A+`;
    } else if (notesResult >= 85 && notesResult <= 90) {
      result = `${notesResult} percent is an A`;
    } else if (notesResult >= 80 && notesResult <= 84) {
      result = `${notesResult} percent is a B`;
    } else if (notesResult >= 70 && notesResult <= 79) {
      result = `${notesResult} percent is a C`;
    } else if (notesResult < 70) {
      result = `${notesResult} percent is an F`;
    } else {
      result = `Sorry something went wrong`;
    }
    return result;
  }
  console.log("average");
  console.log(average(99, 44, 44, 80, 80, 98, 89));


  console.log("............no.7..my...............")


  function student(...agrs) {

    let result = 0;
    for (let i = 0; i < agrs.length; i++) {
      if (agrs < 70) {
        return "F";
      } else if (agrs > 70 && agrs < 80) {
        return "C";
      } else if (agrs > 80 && agrs < 85) {
        return "B";
      } else if (agrs > 85 && agrs < 90) {
        return "A";
      } else if (agrs > 90) {
        return "A+";
      } else {
        return "failed";
      }
    }
  };
  console.log(student(70)); // failed



  console.log("..............no.8...hadi...............")


  /* 8. 

    - Create a function that accepts the (user name, age, address and unlimited number
   of activities the user enjoy doing)

  - print all the user input adding the greeting part and more text turning that input into a
   readable text.

  - If one of his activities was dance ￼or party print "you are cool".*/
















  function user(name, age, address, ...activities) {
    let userDatas = activities;
    let greetings = `Hello dear ${name}, you are ${age} and live in ${address}.`;
    if (userDatas.includes("party" )||userDatas.includes("dance")) {
      console.log(greetings + ` you are cool`);
    } else {
      console.log(`${greetings} enjoy the ${activities}`);
    }
  }
  user("Wolfgang",35,"Berlin", "kayaking", "dance");

  




// exercises from SLACK 28jan2020 Tuesday:
// But i do it on 29Jan2020 Mittwoch:



console.log("........exercises from slack..........no.1...hadi..............")

/* 1. Count Occurrences.
 - Create a function that accepts two arguments: a string and a letter.

 - The function should count the number of occurrences of that letter in the string.
i.e. countOccurrences(“this is a string”, “i”) ➞ 3 */


function countOccurrences(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}
console.log("countOccurrences");
console.log(countOccurrences("this is a string", "i"));


console.log(".........no.2...my..............")

const letterString = (letter, string) => {
  let convertStr = string.split("");
  let convertlett = letter.split("");
  let suite = 0;

  for (let i = 0; i <= convertStr.length; i++) {
    convertStr[i] == convertlett ? (suite += 1) : null;
  }
  return suite;
};
let letterTo = "i";
let stringTo = "this is a string";
console.log(letterString(letterTo, stringTo)); // 3


console.log("..............no.2...end...............")


/*
   2.Create a function which calculates how old a dog is in doggie years.
The function should accept one argument that is the puppy’s age in human years.
Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!” */

const dogAge = age => {
  let dogVsHumanAge = age * 7;
  console.log(`Your dog is ${dogVsHumanAge} years old in dog years!`);  // Your dog is 28 years old in dog years!
};
dogAge(4); 


console.log(".....no.3...hadi...............")

/* 3. 

A Lifetime Supply...
 Create a function to calculate how much you’ll actually be getting for a 
lifetime supply of your favorite snack. 

- The function should accept two arguments: age and amount per day. 
- The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
Bonus Accept floating point values for amount per day and round the result.
i.e.
calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.” */



function calcLifetimeSupply(age, amount, snack) {
  const maxAge = 100;
  const supplyCalc = Math.ceil((maxAge - age) * 365 * amount);
  // Bonus: round the result of any floating values here
  return `You will need ${supplyCalc} pieces of that ${snack} that you like, (assuming you live until the ripe old age of ${maxAge}. Happy snacking!`;
}

console.log(calcLifetimeSupply(32, 3.58, "chocolate"));







console.log(".....no.3...my.............")



const calcSupply = (SnackAge, snacks) => {
  let maxAge = 80;
  let numberOfSnacks = (maxAge - SnackAge) * 365 * snacks;
  return `You will need ${numberOfSnacks} bars of chocolate (${snacks} a day) to last you til the age of ${maxAge}.`;
};
console.log(calcSupply(25, 2));



console.log("......no.4...hadi.............")



/* 4.
--------------------
Pie. 
Create a function that determines whether or not it’s possible to split a pie fairly given 
these three parameters:

-Total number of slices.
-Number of recipients.
-How many slices each person gets.

Examples:
equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
equalSlices(8, 3, 2) ➞ true
equalSlices(8, 3, 3) ➞ false
equalSlices(24, 12, 2) ➞ true

----------------*/



function isEqualPieSlices(totalSlices, numOfRecipients, slicesPerPerson) {
  const neededSlices = numOfRecipients * slicesPerPerson;
  return totalSlices >= neededSlices;
}
console.log("isEqualPieSlices");
console.log(isEqualPieSlices(4, 2, 3));
console.log(isEqualPieSlices(4, 2, 2));
console.log(isEqualPieSlices(4, 3, 1));


console.log("......no.4...my............")


const equalSlices = (totalSlices, numOfrecipients, slicesPerPerson) => {
  let slicePerRecipient = Math.floor(totalSlices / numOfrecipients);
  // console.log(slicePerRecipient); // 2
  let beTrue = slicePerRecipient / slicesPerPerson == 1 ? true : false;
  return beTrue;
};

console.log(equalSlices(11, 5, 3)); // false       // 5 people x 3 slices each = 15 slices > 11 slices
console.log(equalSlices(8, 3, 2));  // true
console.log(equalSlices(8, 3, 3));  // false
console.log(equalSlices(24, 12, 2)); // true
  
console.log("........no.5.. hadi solution...........")





/* 5. 
----------------
XO
 Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and 
 returns either true or false.

 Notes:
-Return a boolean value (true or false).
-The string can contain any character.
-When neither an x nor an o is in the string, return true.

Examples:
XO(“ooxx”) ➞ true
XO(“xooxx”) ➞ false
XO(“ooxXm”) ➞ true (case insensitive)
XO(“zpzpzpp”) ➞ true (returns true if no x and o)
XO(“zzoo”) ➞ false


---------------- */ 

function XO(str) {
  const lowerCaseStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (lowerCaseStr[i] === "x") {
      countX++;
    } else if (lowerCaseStr[i] === "o") {
      countO++;
    }
  }
  if (countX === 0 && countO === 0) {
    return `${true}: there is no instance of either "x" or "o"`;
  } else if (countX === countO) {
    return `${true}: we have the same number of "x" and "o"s`;
  } else if (countX !== countO) {
    return `${false}: panic stations, we do not have the same number of "x" and "o"s`;
  }
}
console.log("XO");
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));


console.log(".......no.6..hadi solution..............")


/*6.

Validate Email. Create a function that takes a string,
 checks if it’s a valid email address, 
and then accordingly returns either true or false.

- The string must contain an “@” character.
- The string must contain a “.” character.
- The “@” must have at least one character in front of it.
e.g. “john@example.com” is valid while “@example.com” is invalid.

The “.” and the “@” must be in the appropriate places.
e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid. */


function validate(email) {
  let atSymbolPos;
  let dotPos;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymbolPos = i;
    }
    if (email[i] === ".") {
      dotPos = i;
    }
  }
  if (atSymbolPos > 0 && dotPos > atSymbolPos) {
    return `${email} is valid.`;
  } else {
    return `${email} is invalid.`;
  }
}

console.log(validate("contact@hadi-nsreeny.com"));
console.log(validate("@hadi-nsreeny.com"));
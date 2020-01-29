// EXERCISES from GITHUB fbw-26 live-coding 28-01 
// 28JAN2020 DIENSTAG
 

console.log("........no.1......end...............")

//  1. Create a function that looks inside a givin string if it has the word (JavaScript) if so print 
// "I know it's crazy 😉"

const string = str => {
    if (str.includes("JavaScript")) {
      console.log(`I know it's crazy 😉`);
    }
  };
  //call the function here 
  string("JavaScript is easy to learn but hard to master!");



  console.log("........no.2......end...............")


//2. Create a function that calculates the user age e.g. 2000 -> 20.


function calculateAge(birthYear){

let currentYear = new Date().getFullYear();

return currentYear - birthYear;
}

console.log(calculateAge(2000) + " years old."); // 20


console.log(".........no.3.....end...............")




//3. Create a function that accepts a text from user and check if the user has entered a month name, 
// if so print out that month and in which season it is.

// long version :

const monthNames = ["January", "Feb", "Mac", "April","Mai","June", "July", "Aug","Sept","Okt","Nov","Dis"];

/*
function nameOfThatMonth(num){
let result = "";
switch (num){

case 1:  
result =  monthNames[0];
break;

case 2:
result = monthNames[1];
break;

case 3:
result = monthNames[2];
break;

case 4:
result = monthNames[3];
break;

case 5:
result = monthNames[4];
break;

case 6:
result =  monthNames[5];
break;

case 7:
result = monthNames[6];
break;

case 8:
result = monthNames[7];
break;

case 9:
result = monthNames[8];
break;

case 10:
result = monthNames[9];
break;

case 11:
result = monthNames[10];
break;

case 12:
result = monthNames[11];
break;

case 12:
result = monthNames[12];
break;


}
return result;
};
console.log(nameOfThatMonth(5));  // Mai
console.log(nameOfThatMonth(1));  // Jan*/





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


console.log("...............end...............")


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


    console.log("........no.4......end...............")



//4. Create a function that takes a string and a word, 
// and then returns true or false depending on whether the word starts with the initial string.

// do again!!
const tribu = (string, word) => {
    let stringArr = string.split();
    let stringArrFirst = stringArr[0];
    let wordFirst = word.substr(0, 3);
    let wordFirstArr = wordFirst.split(" ");
    if (
      stringArrFirst[0] == wordFirstArr[0][0] &&
      stringArrFirst[1] == wordFirstArr[0][1] &&
      stringArrFirst[2] == wordFirstArr[0][2]
    ) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };
  let inputTribuString = "Reb";
  let inputTribuWord = "Rebecca";
  console.log(tribu(inputTribuString, inputTribuWord));


    
    
    
    

    
  
  console.log("........no.5......end...............")


/* 
5.
dictionary("bu", "button") ➞ true
dictionary("tri", "triplet") ➞ true
*/

function dictionary(str, word) {
    let firstChars = word.slice(0, str.length);
    if (firstChars.includes(str)) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

dictionary("bu", "button"); // true



console.log("...........no.6...end...............")

//6. Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

/*//////////////////////////
const twofer = who => {
    return `Two for me and one for ${who}`;
  };
//////////////////////////////////*/

const twofer = (who= 'you') => {
    if (who == undefined) { // modify this
      return `Two for me and one for you`;
    } else {
      return `Two for me and one for ${who}`;
    }
  };
  console.log(twofer("Ali")); // -> "Two for me and one for Ali"
  console.log(twofer()); // -> "Two for me and one for you"  

  
  
  console.log("...........no.7...end...............")



  /* 7. 
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

const exponent = (num, exp =  2) => {
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
  console.log(exponent(3)); // ->     9 


console.log("............no.8..end...............")

/////////////////////////////


  // 8. Create a function will calculate a student degrees for 6 subjects,
  //if the average was less than 70 will print (F)
  // Over 70 and less than 80 (C)
  // Over than 80 and less than 85 (B)
  // Over than 85 and less than 90 (A)
  // And over 90 print (A+)


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



  console.log("..............no.9...end...............")


  /*9. 

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

  




// exercises from slack 28jan2020


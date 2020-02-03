// EXERCISE 23JAN2020 // code challange must understand !!!



/*
1. c4n y0u r34d th15? Create a function that takes a string as an 
argument and returns a coded (h4ck3r 5p34k) version of the string.
 NB: for your program to work properly, the function should replace 
 all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
Examples:
hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3 */



const hacking = (str) => {
    let hackedArr = [];
    let x = 0;
    let toSmall = str.toLowerCase();
    let letters = toSmall.split("");
    for (let i = 0; i < letters.length; i++ ){

if ( letters[i] == "a"){ 
    letters[i] = 4;
    hackedArr.push(letters[i]);


} else if (letters[i] == "e"){
    letters[i] = 3;
    hackedArr.push(letters[i]);

} else if (letters[i] == "i"){
    letters[i] = 1;
    hackedArr.push(letters[i]);

    } else if (letters[i] == "o"){
        letters[i] = 0;
        hackedArr.push(letters[i]);

        } else if (letters[i] == "s"){
            letters[i] = 5;
            hackedArr.push(letters[i]);

        } else{
           hackedArr.push(letters[i]) ;
        }

}
    
let result = hackedArr.join("");

    return result;
};
let codeStr = "hi i am nice aaa"; // function call
console.log(hacking(codeStr));                         

console.log("...............end...............")

/* 2.

Is it Symmetrical? Create a function that takes a number as an argument and returns true or false
depending on whether the number is symmetrical or not.
 NB(Nota Bene: used to mark something as particularly important): 
 A number is symmetrical when it is the same as its reverse.
Examples:
isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true   

*/ 


function isSymmetrical (num){

let numToStr = num.toString();
let result = numToStr.split("").reverse().join("");
if (numToStr == result){
    return true;
    
}else {
    return false;
}

}
console.log(isSymmetrical(33233)); // true
console.log(isSymmetrical(1234556)); // false
console.log(isSymmetrical(1));   // true


console.log("...............end...............")


/* 3.
snake_case ➞ camelCase 
Create a function toCamelCase() that takes a 
single string in snake_case and converts it into camelCase.

Examples:
toCamelCase(“hello_world”) ➞ “helloWorld”
toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun” */

const toCamelCase = str => {
let splitStr = str.split("_");
let camelArray = [];

for(let i=0; i < splitStr.length; i++){


let firstChr , restStr;

if(splitStr[i] == splitStr[0]) {
 camelArray.push(splitStr[0]);
 continue; // continue;  will continue the loop just one round /  but break; will go out from loop

} else {
  firstChr = splitStr[i].slice(0, 1);
restStr    = splitStr[i].slice(1, splitStr[i].length);
}
let newWord = firstChr.toUpperCase() + restStr;
camelArray.push(newWord);

}
let result = camelArray.join("");
return result;
};

console.log(toCamelCase("snack_snake_halo"));


console.log("...............end...............")




/* 4. ADVANCE EXERCISE // must do again!!!!!

Pig Latin Translation.
 Create a function that takes a string of words and moves the first letter of each 
 word to the end of it, then adds ‘ay’ to the end of the word. 
 
 This is a basic form of “Pig Latin”.

Move the first letter of each word to the end of the word.
Add “ay” to the end of the word.


Words starting with a vowel (A, E, I, O, U) append “way” to the end instead. */


console.log(".............HADI SOLUTION HERE.............")


function pigLatin (str) {
let translation = [];
const vowels = ["a", "e", "i", "o", "u"]; // 
let lowerCase = str.toLowerCase(); // make a string to lower case
let splitStr = str.split(" ");  // split upon empty space 
console.log(splitStr + " -This is split array -"); // print : Banana,the,is 


for ( let i = 0 ; i < splitStr.length; i++){ // i = 0  //2nd Char = 1           //splitStr = higo  //2nd = that
let firstChr = splitStr[i][0];  // take the first character from first index !  //  h              // t
let remainder = splitStr[i].slice(1,splitStr[i].length);                        // igo             // hat
                        // starting Char 1 until end // 


if (vowels.includes(firstChr)){
    const firstChrVal = ( i ? firstChr : firstChr.toUpperCase()) + remainder + "way";
    translation.push(firstChrVal);
}    else {

if(i == 0){   
let firstCharRem = remainder[0];
let wordRemainder = remainder.slice(1, remainder.length);
remainder = firstCharRem.toUpperCase() + wordRemainder;
}

const newString = remainder + firstChr + "ay";
translation.push(newString);
console.log(translation); // [ 'AnanaBay', 'hetay' ]
 //1st Index      // igo     +     h    +  ay
// 2nd Index     //  hat     +      z   + ay



}
}
   let result = translation.join(" ");
    return result;

}
const strPig = "Banana the is";
console.log(pigLatin(strPig)); // AnanaBay hetay isway




console.log("...............end...............")




/*

const vowels = ["a", "e", "i", "o", "u"]; // array

function pigTranslate(str) {
  return str.split(" ").map(pigWord).join(" ");

}           function pigWord(word) {
            for(var i = 0; i < word.length; i++) {
              if(vowels.indexOf(word[i]) !== -1) 
              break;
              if(word.slice(i, i+2) === 'qu') i += 1;
            }
            return word.slice(i) + word.slice(0, i) + 'ay';
          };
          console.log(pigTranslate("cats are great pets"));








///////////////////
console.log("...............end...............")


// Extra Practice

/*Preserve proper capitalization as in the examples below.
Examples:

pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away
 allsmay iecepay ofway iepay.”

pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay 
excitingway aletay.”




function pigLatin(world) {
    world = world.toLowerCase();
    console.log(world);
  };
  console.log(pigLatin("Cats are great pets"));
  console.log(pigLatin("Tom got a small piece of pie")); */
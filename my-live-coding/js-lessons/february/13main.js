// 13FEB020 , THURSDAY
//LESSONS


// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)

// `try { ... } catch (e) { ... }`
let userAge = 25;
if (userAge == 25) { //if the user age is5print "HAPPY DAY"and as you see it's not printing!
  console.log("something else");
}
console.log("Hi");
let userName = "";

// try --> to test a block of code
// catch --> to handle the error
// throw --> to create a custom errors
try {
  console.log("Hi his is trying phase");
cool();
  if (userName == "") throw " Sorry something went wrong ";
 
  console.log("2nd phase");   // if there was an error this part will never run
} catch (err) {
  console.log("this error is" + err);
} finally {
  userName = "xxx";
  console.log("this will always run 😂");
}

console.log("::::::::::::::end::::::::::::");


// How to run function many times in Js: 

function display() {
    console.log("Hi this is a cool function");
  }
  
  for (let i = 0; i < 8; i++) {
    display();
  }
  
  console.log("::::::::::::::end::::::::::::");



  ///////////////////////////////////////////



  (function manyTimeCalledFunction(num) {
    display();
    if (num > 1) manyTimeCalledFunction(num - 1);
  })(8);
  
console.log("::::::::::::::end::::::::::::");

//////////////////////////////////////////////

  function print() {
    console.log("Hi i am Js");
  }
  
  const timerDisplay = setTimeout(
    () => console.log("Cool thats you have waited me"),
    1000
  );
  const timerPrint = setTimeout(print, 5000);
  clearTimeout(timerDisplay);

  console.log("::::::::::::::end::::::::::::");
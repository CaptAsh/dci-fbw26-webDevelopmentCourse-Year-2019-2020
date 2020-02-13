// 14JAN2020 , TUESDAY
// NEW LESSON

// switch (<expression>){...}

const color = "hhhhe"; // change this to have different RESULT
switch (color) {
  case "Pink":
    console.log("cool");
    break;

  case "Black":
    console.log("Nice");
    break;

  case "White":
    console.log("soooo nice");
    break;

  default:
    console.log("Nooooooooo is crazy");
}

const month = 10; // CHANGE THIS FOR THE DIFFERENT RESULT

switch (month) {
  case 1:
    console.log("Jan");
    break;

  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("Mar");
    break;

  case 4:
    console.log("Apr");
    break;

  case 5:
    console.log("Mai");
    break;

  case 6:
    console.log("Jun");
    break;

  case 7:
    console.log("Juli");
    break;

  case 8:
    console.log("Aug");
    break;

  case 9:
    console.log("Sep");
    break;

  case 10:
    console.log("Oct");
    break;

  default:
    console.log("Nooooooooo is crazy");
}

const x = 33;

switch (x) {
  case 1999.33:
    console.log("fine");
    break;

  case -28282828:
    console.log("super");
    break;

  case 33:
    console.log("here my number");
    break;

  default:
    console.log("Nooooooooo is crazy");
}

// switch vs. `else if `  //  use switch case if you have concrete answer // use if else if u don't have answer
const num = 3;
if (num <= 10 || num >= 0) {
  console.log("it is num in the range of 0-10");
  if (num == 1) {
    console.log(num);
  }

  if (num == 2) {
    console.log(num);
  }

  if (num == 3) {
    console.log(num);
  }
} else {
  console.log(" it's new num");
}

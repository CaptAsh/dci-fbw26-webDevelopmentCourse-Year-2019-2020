


console.log("........no.1......end...............")

/* 1.Create a function that looks inside a givin string if it has the word (JavaScript) 
if so print "I know it's crazy 😉". */


function checkStr(string) {
    let strToArray = string.split(" ");
    if (strToArray.includes("JavaScript")) {
      console.log("I know it's crazy 😉");
    }
  }
  checkStr("Hi my name is HADI");
  checkStr("I like JavaScript");
  


  console.log("........no.2......end...............")


  // 2. Create a function that calculates the user age e.g. 2000 -> 20.

  function age(num) {
    let year = new Date().getFullYear();
    let userAge = year - num;
    return num < 2020 && num > 1900
      ? `${userAge} years old`
      : `Please enter a valid year`;
  }
  console.log("age");
  console.log(age(1940));
  console.log(age(2200));




  // 3. Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
  
  
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
        counter++;
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




  //4. Create a function that takes a string and a word, and then returns true or 
  // false depending on whether the word starts with the initial string.
  // dictionary("bu", "button") ➞ true
  // dictionary("tri", "triplet") ➞ true
  
  
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
  

  // 5. Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
  
  const twofer = (who = "you") => {s
    return `Two for me and one for ${who}`;
  };
  console.log("twofer");
  console.log(twofer("Ali")); // -> "Two for me and one for Ali"
  console.log(twofer()); // -> "Two for me and one for you"





  // 6. Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
  // Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).
  
  const exponent = (num, exp = 2) => {
    let result = 1;
  
    for (let i = 0; i < exp; i++) {
      result *= num;
    }
  
    return result;
  };
  
  console.log(exponent(3, 3)); // -> 27
  console.log(exponent(3)); // -> 9
  
  // Create a function will calculate a student degrees for 6 subjects,
  //if the average was less than 70 will print (F)
  // Over 70 and less than 80 (C)
  // Over than 80 and less than 85 (B)
  // Over than 85 and less than 90 (A)
  // And over 90 print (A+)



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
  

  // 8. Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
  // * print all the user input adding the greeting part and more text turning that input into a readable text.
  // * If one of his activities was dance ￼or party print "you are cool".
  
  function userData(userName, age, address, ...args) {
    let result = `Hey ${userName}, really nice to live in ${address}, hope you are having fin in your ${age} `;
    if (args.includes("dance") || args.includes("party")) {
      result += "You are cool";
    }
    return result;
  }
  console.log("userData");
  console.log(userData("Ali", 30, "xx Str", "dance", "party"));
  console.log(userData("Olga", 50, "xx Str", "party"));
  console.log(userData("Nancy", 10, "xx Str", "swimming"));



  // FROM SLACK //
  
  // 1.
  
  //XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
  // Notes:
  // Return a boolean value (true or false).
  // The string can contain any character.
  // When neither an x nor an o is in the string, return true.
  // Examples:
  // XO(“ooxx”) ➞ true
  // XO(“xooxx”) ➞ false
  // XO(“ooxXm”) ➞ true (case insensitive)
  // XO(“zpzpzpp”) ➞ true (returns true if no x and o)
  // XO(“zzoo”) ➞ false
  
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
  
  // 2. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
  // i.e. countOccurrences(“this is a string”, “i”) ➞ 3
  
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
  
  // 3. Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
  // i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”
  
  function calcDogYears(humanYears) {
    const doggoYears = humanYears * 7;
    return `Your doggo is ${doggoYears} years old in dog years and is also the best doggy`;
  }
  console.log("calcDogYears");
  console.log(calcDogYears(9));
  
  // 4. A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favour snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
  // i.e.
  // calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”
  
  function calcLifetimeSupply(age, amount, snack) {
    const maxAge = 100;
    const supplyCalc = Math.ceil((maxAge - age) * 365 * amount);
    // Bonus: round the result of any floating values here
    return `You will need ${supplyCalc} pieces of that ${snack} that you like, (assuming you live until the ripe old age of ${maxAge}. Happy snacking!`;
  }
  
  console.log(calcLifetimeSupply(32, 3.58, "chocolate"));
  
  //5.  Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
  // Total number of slices.
  // Number of recipients.
  // How many slices each person gets.
  // Examples:
  // equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
  // equalSlices(8, 3, 2) ➞ true
  // equalSlices(8, 3, 3) ➞ false
  // equalSlices(24, 12, 2) ➞ true
  
  function isEqualPieSlices(totalSlices, numOfRecipients, slicesPerPerson) {
    const neededSlices = numOfRecipients * slicesPerPerson;
    return totalSlices >= neededSlices;
  }
  console.log("isEqualPieSlices");
  console.log(isEqualPieSlices(4, 2, 3));
  console.log(isEqualPieSlices(4, 2, 2));
  console.log(isEqualPieSlices(4, 3, 1));
  
  // 6. Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
  // The string must contain an “@” character.
  // The string must contain a “.” character.
  // The “@” must have at least one character in front of it.
  // e.g. “john@example.com” is valid while “@example.com” is invalid.
  // The “.” and the “@” must be in the appropriate places.
  // e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.
  
  
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
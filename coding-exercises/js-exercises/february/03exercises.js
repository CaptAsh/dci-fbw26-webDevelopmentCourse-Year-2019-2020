// exercises
//03feb2020


console.log(".........end...........");
//1. 
// Write a function add that uses a closure that performs addition on arguments in two separate function calls.

// example add (2)(3)

function add (a){
    return function (b){
return a + b 

    }
}
console.log(add(2)(3)); //  2 + 3 = 5 

console.log(".........end...........");
///////////////////////


// use Arrow function method for closure :

const add1 = a =>{
    return b => {
        return a + b;
    }
}
console.log(add1(2)(3)) //  2 + 3 = 5


console.log(".........end...........");




// 2. Write a function multiplier that uses a closure to perform multiplication. 
// However, the outer function should be stored in a variable which is then called.


// normal way
function multiplier(num){   // outer function
   return function (num2){  // inner function
 
    return num * num2 ;
   }

}
const times = multiplier(2);

console.log(times(5));


console.log(".........end...........");


///// ES6 way

function multiplier1(num2){  // outer function
return num3 => num3 * num2; // inner function no.2 pass to num3  inner function
                                          //  no. 5 pass to num2 outer function 
} 
const times2 = multiplier1(2); // no.2 pass to num3 function
console.log(times(5));  // 10
console.log(times(6));   // 12
console.log(times(7));    // 14


console.log(".........end...........");

////////////////


//// self invoking anonymous function (SIAF) 

var all = 3;

// (()=> {              ES 6 STYLE
(function (){
var all = "Hi";
console.log(all); // Hi

})();
console.log(all);  // 3

console.log(".........end...........");



//from slack 1.01 pm

 /*3. 

 Write a function that accepts several parameters and calculates the 
 number of money that will have been saved as pension until a person retires.

The function should be self invoked and should have the following parameters:
-The current age of the person // e.g. 40
-The retirement age of the person // e.g. 60
-The monthly wage the person earns // e.g. 1000
-The percentage (as integer) that the person saves each month // e.g. 10%

If the person has already retired then the message ‘You’re already retired!’ should be printed. 

If not, then the program should calculate how many years remain until the person retires, 
the monthly income and take a specific percent of this income every month as saved money.


Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. 
How much money will she have saved until she retires?
Output: $30000
 */

console.log(".........my solution...........");
 
// ES 6 way :

((age, retireAge, monthlyWage, savingPercent ) =>{
       
        if (age < retireAge) {
            const yearsToWork = retireAge - age;
            const monthsToWork = yearsToWork * 12;
            const totalEarnings = monthsToWork * monthlyWage;
            const totalSavings = (totalEarnings / 100) * savingPercent;
            console.log(totalSavings);    // 30000
          } else {
            console.log("You're already retired!");
          }
        })(40, 65, 2000, 5);   


    console.log(".........end...........");


// other way :

    (function pension(age, retireAge, monthlyWage, savingPercent) {
        if (age < retireAge) {
          const yearsToWork = retireAge - age;
          const monthsToWork = yearsToWork * 12;
          const totalEarnings = monthsToWork * monthlyWage;
          const totalSavings = (totalEarnings / 100) * savingPercent;
          console.log(totalSavings);   // 30000
        } else {
          console.log("You're already retired!");
        }
      })(40, 65, 2000, 5);  



  console.log(".........hadi solution down..........");

// hadi solution



((currentAge, retireAge, monthlyWage, savingPercent ) =>{

if ( currentAge >= retireAge){
console.log( "Yo're already retired")
}else {

    let yearsToSave = retireAge - currentAge;
    console.log(yearsToSave + " years to go"); // 35 years to go

    let monthsToSave = yearsToSave * 12;
    console.log(yearsToSave + " months to go"); // 35 month to go
  
    let amountSavedByMonth = (monthlyWage * savingPercent) / 100 ;
    let totalSave = amountSavedByMonth * monthsToSave;
    console.log(`you will get very old ${35}  and you will have ${totalSave} in your bank`);
}

})(30,65,1000,5);
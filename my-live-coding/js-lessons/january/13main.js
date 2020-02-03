//13Jan2020 Montag

let old, nice, crazy;
old = true;
nice = false;
crazy = !3 <= 3;
console.log(nice !== crazy); // ! means IS NOT

//Boolean inversion with !
console.log(crazy ? "Yeah" : "Nope");

// givenName || firstName || "ABC";

console.log("Abc");
let givenName, firstName;
firstName = "Hadi";
console.log(givenName || 2 || firstName); //  || means OR // the first TRUE CONDITION will be print // RESULT IS 2
console.log("Abc" || firstName); // RESULT IS Abc

//income 500euro per Week
//how much nancy make a year?

const nancySalary = 500 * 52;
console.log(`Nancy salary ${nancySalary} Euro in one year`);

// work hours last two week are 8,6,5,9,8,2,1, 8.5,7,4
// what is nancy average hour
let nancyHour = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAverage = nancyHour / 10;
console.log(
  `Nancy work last two weeks is ${nancyHour}, average is ${nancyAverage}`
);

// if(<boolean>) {...}

let dd = 9;
console.log(true ? "Yeah cool" : "Nope");

if (true || (1 < 55 && false)) {
  console.log("yeah it is false");
  console.log("yeah ");
}

let a, b, c;

a = true;
b = false;
c = true;

if (a == b && c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}

let aa, bb, cc;

aa = 1 === 4;
bb = 20 < 100;
cc = true;

if (aa == bb && cc) {
  console.log("Niceeeee");
} else {
  console.log("Not coolllll");
}

let aaa, bbb, ccc;

aaa = 1 === 4;
bbb = 20 < 100;
ccc = true;

let counter = 0;
let logIn = false;

if (aaa == bbb && ccc) {
  console.log("Niceeeee");
  counter = 2;
  logIn = true;
} else {
  console.log("Not coolllll");
  counter = 3;
  logIn = false;
}
console.log(logIn, counter); // false 3

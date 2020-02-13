/*LESSON
16Jan2020

// Loops While (loops through a block of code while a specified condition is true)
//will not go inside loops untill condition is truthy!

let x = 1;
while (x <= 10) {
  console.log("Hadi");
  x++;

  // x = x + x  //
}
// 1.
let y = 1;
let result = 0; // value is doesn't matter
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 = ${result} `);
  y++; // this must write
}
// 2.
let count = 10;
while (count >= 0) {
  console.log(`this num is ${count}`);
  count--;
}

//3. Loops do (will go inside loop one time eventhough the conditon faulty/truthy )
let a = 2;
do {
  console.log(a);
  a++;
} while (a <= 100); // result 100
// loops do
let b = 101;
do {
  console.log(a);
  b++;
} while (b <= 100); // result 101

//4. still doing loops do

let zara = 100;
do {
  console.log(`there is ${zara}on the line`);
  zara++;
} while (zara >= 0); */

//5. loops for (declaring; condition ;decrement/increment)

for (let i = 0; i <= 10; ) {
  console.log(i);
  i += 2;

  for (let i = 0; i <= 10; ) {
    console.log(i);
    i += 2;
  }

  //  example 1
  for (let index = 100; index <= 1000; ) {
    console.log(index);
    index += 100;
  }
  //example 2
  for (let v = 100; v <= 1000; v += 100) {
    console.log(v);
  }

  // for if ( use if to check condition) ( use break to exit that loop)

  for (let i = 0; i <= 100; i++) {
    if (i == 30) {
      break;
    }
    console.log(i); // result 0 until 29
  }

  //

  for (let w = 0; w <= 10; w++) {
    if (w % 2 == 0 && w == 8) {
      console.log(w); // result is 8
    }
  }

  //

  for (let c = 0; c <= 10; c++) {
    if (c % 2 == 0 && c == 8) {
      break;
    }
    console.log(c); // result 0 until 7
  }
}

//
let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("That is it");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}
//
let result2 = 0;
for (let i = 0; i < 10; i++) {
  result2 = i * 3;
  console.log(`${i} * 3 = ${result2}`);
}
//

/*let result3 = 0;
for (let q = 1; q < 10; q++) {
  // q = 3
  for (let j = 1; j <= 10; j++) {
    // j = 1
    result3 = q * j;
    console.log(`q${q} *j${j} = ${result3}`);
  }
  // j = 1
  result3 = q * j;
  console.log(`q${q} *j${j} = ${result3}`);
}*/

//
let str = " This is  a long text";
for (let i = 0; i < str.length; i++) {
  console.log(`The ${i} letter is ${str[i]}`);
}

// YYYY
// YYYY // this is code challenge

let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYYY \n"; // box = box + YYYY\n  // \n is a newline character
}
console.log(box);

// array

let firstName = "Hadi";
let firstName2 = "Ali";
let firstName3 = "Olga";
let array = ["Hadi, Ali, Olga, Nancy"];
console.log(array[2]);

let arrInt = [1, 2, 3, 4, 5, 6, 7];
console.log(arrInt[3]); // 4

let arrNum = ["first", "2nd", "3rd", "4th"];
//console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]} `);
}

let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; /// arrSt[0] = 2 + 0
  console.log(arrSt);
}

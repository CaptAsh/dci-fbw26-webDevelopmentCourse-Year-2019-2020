// EXERCISE 09.Jan 2019

// 1. Minimum and maximum
// a. Lowest Number
//Print out the lowest number between -1 and 4.

console.log(Math.min(-1, 0, 1, 2, 3, 4)); // -1

//b. Highest Number
//Print out the highest number between -1 and 4.

console.log(Math.max(-1, 0, 1, 2, 3, 4)); // 4

//2. Rounding
//a. Round up
//Round up the following numbers: 3321, 326.76, -9.78, 43.342.

console.log(
  Math.ceil(3321),
  Math.ceil(326.76),
  Math.ceil(76788.7),
  Math.ceil(-9.78)
);

//b. Round down
//Round down the following numbers: 3321, 326.76, 76788.7, -9.78,//

console.log(
  Math.floor(3321),
  Math.floor(326.76),
  Math.floor(76788.7),
  Math.floor(-9.78)
);

//3. Dice Roll!
// Create a program that prints a random integer from 1 - 6.

console.log(Math.floor(Math.random() * 6) + 1); // 1-6

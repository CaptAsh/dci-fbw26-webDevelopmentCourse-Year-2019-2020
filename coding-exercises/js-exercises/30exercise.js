// exercise from slack 30jan2020 DOnnerstag

/* 
Write a function will give the alphabetical order for a passed character
 i.e.  A ->     1
       B ->    2m   */


alphabet = str => {
  upperStr = str.toUpperCase();
  console.log(upperStr.charCodeAt(0) - 64);
};
alphaTry("A");
alphaTry("z");
alphaTry("c");

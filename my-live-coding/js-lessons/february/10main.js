/*10FEB2020 / MONTAG
COPY FROM LECTURER
HOME OFFICE
LESSON*/

console.log("::::::::::::::end1::::::::::::");


// Compound object

const objects = [
    {
      name: "Ali",
      lastName: "see"
    },
    {
      name: "Olga",
      lastName: "xs",
      printOut: function() {
        console.log("Hi");
      }
    },
    {
      name: "Nancy",
      lastName: "Ali"
    }
  ];
  // dot.
  objects[1].printOut();                          // Hi


  console.log("::::::::::::::end2::::::::::::");
  
  // 2nd way to call bracket []
  objects[1]["printOut"]();                         // Hi

  console.log("::::::::::::::end3::::::::::::");


  // Clones vs. References



  
  
  
  // Primitive  (Simple values are always clones)
  // String, Number, Boolean
  let str = "How are you";
  let newStr = str;    // cloning
  
  str = "something else";
  console.log(newStr);             //How are you
  console.log(str);                //something else

  console.log("::::::::::::::end3::::::::::::");

  let num = 222;
  let newNum = num;
  console.log(newNum);  // 222

  console.log("::::::::::::::end::::::::::::");


  ////////////////////////////////////////////
  // Compound
  // Object, Array, Function

  const names = ["Ali", "Olga", "Nancy", "Zain"];
  let newArr = names;    // cloning
  console.log(newArr);  //                  [ 'Ali', 'Olga', 'Nancy', 'Zain' ]

  console.log("::::::::::::::end::::::::::::");
  
  newArr[1] = "New";
  console.log(names); //                  [ 'Ali', 'New', 'Nancy', 'Zain' ]

  console.log("::::::::::::::end::::::::::::");

///////////////////////////////////


  const car = {
    name: "Ford",
    year: "2020",
    color: "Red"
  };
  
  const newObject = car;
  newObject.name = "BMW";
  console.log(car.name);  //         BMW



console.log("::::::::::::::end spread op::::::::::::");

  
  
  // Objects are references by default: Array and object literals
  


  // Shallow copy using    ... (spread operator)
  let namesArr = ["Ali", "Hadi"];
  let newNamesArr = [...namesArr];
  newNamesArr[0] = "Nancy";
  console.log(newNamesArr);    // [ 'Nancy', 'Hadi' ]
  console.log(namesArr);       //  [ 'Ali', 'Hadi' ]

  
  console.log("::::::::::::::end spread op::::::::::::");


  // Shallow copy using .concat()
  let newNames2 = [].concat(namesArr);  // why empty array.concat? merge with what?

  // Shallow copy using .slice()
  let newNames3 = namesArr.slice(0);
  console.log(newNames3);            //  [ 'Ali', 'Hadi' ] // must ask more!!

  console.log("::::::::::::::end::::::::::::");


  // Shallow copy using .assign()
  const newObject2 = Object.assign(car);
  console.log(newObject2);                 // { name: 'BMW', year: '2020', color: 'Red' }

  console.log("::::::::::::::end::::::::::::");


// Shallow copy using ... (spread operator)
  const newObject3 = { ...car };
  console.log(newObject3);                // { name: 'BMW', year: '2020', color: 'Red' }


  console.log("::::::::::::::end shallow copy::::::::::::");

  console.log("::::::::::::::here start RECURSION:::::::::::");


  //  Recursion(the repeated application of a recursive procedure or definition)
  // in one word it's a way to create a function that calls itself and being able to stop
  // calling itself when it done the job, otherwise it will be infinity loop.
  // the stack call when its ended js able to unwind the stack and return the result!

  
  const factorial = function(num) {
    // console.log(num);
    if (num == 1) {
      return 1;
    }                               // no else here ??? heheh
    return num * factorial(num - 1);
        // 5   *           5   - 1 = 5 * (5-1) =  20   // 
  };
  console.log(factorial(5));               // 120 why  i got 120 ?? 
  
  console.log(":::::::end RECURSION:::::::::::");
  

  
////////////////////////////////////////////////////////////



console.log(":::::::Deep copy using RECURSION:::::::::::");

  // Deep copy using recursion 🤨

  function deepCopy(obj) {
    if (typeof obj == "object") {
      return Object.keys(obj)
        .map(key => ({ [key]: deepCopy(obj[key]) }))
        .reduce((acc, cur) => Object.assign(acc, cur), {});
    } else if (typeof obj == "array") {
      return obj.map(deepCopy);
    }
    return obj;
  }
  const newObj = { 1: "hi", 2: "how are you", fun: () => console.log("Hi") };
  const superNewObj = deepCopy(newObj);
  console.log(superNewObj);
  // cool console 😎
  console.log();
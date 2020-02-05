// exercises from slack 05FEB2020 MITTWOCH



console.log(".........       end...........");

/* 1. Merge. 

Create a function that takes two objects as its 
parameters and merges them together into a new object.

Example;
let first = {firstName: "John"}
let last = {lastName: "Smith"}
Expected output:
{firstName: "John", lastName: "Smith"}


const assigningg = (obj1, obj2)=>{
let newObject = {};    
newObject = Object.assign(obj1, obj2);
result = newObject;
return result;
}

let newObject1 = {firstName: "John"};
let newObject2 = {lastName :" Smith"};
console.log(assigningg(newObject1, newObject2)); // { firstName: 'John', lastName: ' Smith' } */


////////////////////////////////

console.log("........       hadi down here..........");


const fun = (x,o) =>{
    return Object.assign(x,o);
};

console.log(fun ({firstName: "John"},{lastName :" Smith"})); // { firstName: 'John', lastName: ' Smith' }

console.log("........     hadi down here..........");
//////////////////////////////////////


// spread operator {...parameter}

const funn = (y,w) =>{
 
    return Object.assign(y,w);
};
const fun2 = (y,w)=> {  
return {...y,...w};       ///////////// use this to copy object , array ,

};

console.log(funn ({firstName: "Olga", age:30},{lastName :" Ali"})); // { firstName: 'Olga', lastName: ' Ali' }

////////////////////////////////


console.log(".........  MY ZODIAC DOWN HERE...........");


2. //


function zodiac(name,day,month,year){
const user = {
    userName  : name,
    birthDay  : day,
    birthMonth : month,
    birthYear  : year,
    print      : function () {


            let zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 
                        'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 
                        'Scorpio', 'Sagittarius', 'Capricorn'];

            let zodiacDay = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];


            let zodiacEmptyObject = {};
            
            for (let i = 0; i <= zodiacMonths.length; i++) {
                zodiacEmptyObject = zodiacEmptyObject + [i];
            if( )
            
             
        }         
      
        user.print();   // object.method 
           
        }

        return result;
        
    }   


    console.log(zodiac("Ali", "04", "January", "2000"));









/*let zodiacEmptyObject = {};

let date = dateArray = [19,18,20,19,20,20,22,22,22,22,21,21, 31];

let zodiacMonths = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 
                   'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
       
                   for (let i = 0; i <= zodiacMonths.length; i++) {
                    zodiacEmptyObject = zodiacEmptyObject + [i];
                    
        } */



/*let zodiacMonths = {
    'capricorn':'1',
    'aquarius':'2',
    'pisces':'3',
    'aries':'4',
    'taurus':'5',
    'gemini':'6',
    'cancer':'7',
    'leo':'8',
    'virgo':'9',
    'libra':'10',
    'scorpio':'11',
    'sagittarius':'12',
    'ophiuchus' : '13' */












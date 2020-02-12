//12FEB2020 , MITWOCH
//EXERCISESFRPM SLACK , 1052AM


console.log("::::::::::::::end::::::::::::");

/* 1 .Person Class
Create a class called Person which accepts the name of a person as a string, and his/her age as a number. 
The Person class should have a method called describe which
 returns a string with the following syntax: “name, age years old”. 
 So, for example, 
 if John is 19 years old, then the function describe of
 his object will return “John, 19 years old”.*/



 class Person {
    constructor(_name, _age){  // setting up my constructor
    this.name = _name;
    this.age = _age;
    
    }
    display (){                     // instances probably declare under the constructor
    
    console.log(`${this.name} , ${this.age} years old`);
    
    }
    
    }
    let newName = new Person("Ali", "25");
    newName.display();                           //  Ali , 25 years old
    
    console.log("::::::::::::::end::::::::::::");

/* 2.  TV Class
Create a TV class with properties like brand, channel and volume.

-Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
-Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.

-Add a method to set the channel randomly. Let’s say the TV has only 50 channels.

-Add a method to reset TV so it goes back to channel 1 and volume 50.

It’s useful to write a status, 
that returns info about the TV status like: “Panasonic at channel 8, volume 75”. */


class Tv {
    constructor(_brand){  // setting up my constructor
    this.brand = "samsung";
    this.channel = 1;
    this.volume = 50;
    
    }


randomChan() {
    const channelMax = 50;
    const random = (this.channel = Math.floor(Math.random() * channelMax));
    console.log(random);
  }


resetTV() {
  this.channel;
  this.volume;
}


    display (){  // instances probably declare under the constructor
    
    console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    
    }
    
    }
    let newMachine = new Tv("", 8, 75);
    newMachine.display();                   



    console.log("::::::::::::::end::::::::::::");
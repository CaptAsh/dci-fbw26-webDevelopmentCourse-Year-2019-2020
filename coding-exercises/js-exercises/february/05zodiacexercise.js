//05feb2020 Mittwoch
//solution for Zodiac Challenge
console.log(".........hadi 1s. solution down here..........");

// easy one to understand:

function zodiac1(name, day, month, year) {
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {
        let singNames = [
          "Capricorn",
          "Aquarius",
          "Pisces",
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn"
        ];
        let userBDay = parseInt(this.birthDay);
        let month = parseInt(this.birthMonth);
        let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
        let yourZodiacName =
          userBDay > endsAt[month] ? singNames[month] : singNames[month - 1];
        return `Hey ${this.userName}, your zodiac sing is ${yourZodiacName}`;
      }
    };
    return result.yourZodiac();
  }
  console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");




  console.log(".........hadi 2nd solution down here..........");



// 2nd solution:

function zodiac(name, day, month, year) {
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {
        data = [
          { signName: "Not real day!", from: "0000" },
          { signName: "Capricorn", from: "0101" },
          { signName: "Aquarius", from: "0121" },
          { signName: "Pisces", from: "0220" },
          { signName: "Aries", from: "0321" },
          { signName: "Taurus", from: "0421" },
          { signName: "Gemini", from: "0521" },
          { signName: "Cancer", from: "0622" },
          { signName: "Leo", from: "0723" },
          { signName: "Virgo", from: "0824" },
          { signName: "Libra", from: "0924" },
          { signName: "Scorpio", from: "1024" },
          { signName: "Sagittarius", from: "1123" },
          { signName: "Capricorn", from: "1222" },
          { signName: "Not real day!", from: "1232" },
          { signName: "empty", from: "0000" }
        ];
        let monthDay = this.birthMonth + this.birthDay;
        console.log(monthDay);
        let i = 0;
        while (monthDay >= data[i].from && i < data.length - 1) {
          i++;
        }
        let yourZodiacName = data[i - 1].signName;
        return `Hey ${this.userName} your zodiac sign is ${yourZodiacName}`;
      }
    };
    return result.yourZodiac();
  }
  console.log(zodiac("Hadi", "01", "09", "1989"));





  console.log(".........my solution........");


/*function zodiac1(name, day, month, year) {        // outer function
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {                     // inner function
        let singNames = [
          "Capricorn",
          "Aquarius",
          "Pisces",
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn"
        ];
   
        let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  
        if (endsAt[result.birthMonth] < result.birthMonth) {
          return singNames[result.birthMonth];
    } else {
        return singNames[result.birthMonth - 1];
  }
}
}

 return `Hey ${this.userName}, your zodiac sing is ${yourZodiac}`;
      
    
};

return result;   // object.method


let x = zodiac1("Hadi", "01", "09", "1989" + " 2nd way");
console.log(x.yourZodiac);



 // console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way"); */
  


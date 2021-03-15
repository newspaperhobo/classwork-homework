//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 
//1 Code Answer

let dogQuestion = "But what if I like dogs more than cats?";
console.log(dogQuestion.length);

//1 Result Answer: 39


//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer

let noms = "Samosas";
console.log(noms.length);

//2 Result Answer: 7


//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer

let boba = "I have no interest in Boba"
console.log(boba.replace("no", "lots of"));

//3 Result Answer



//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer

let backstreet = "Tell me whyyyy!                 "
console.log(backstreet.trim())

//4 Result Answer


//5
// Convert 1400 into a string.
//5 Code Answer:

let num1 = 400;
let num1str = num1.toString();
console.log(typeof num1str)

//5 Result Answer:

//6
//Convert the boolean true and false into integers
//6 Code Answer:

let T = Number(true);
console.log(T);
let F = Number(false);
console.log(F);

//6 Result Answer: 1, 0

//7
// Convert the string "02130" into an integer
//7 Code Answer:

let jp = "02130";
let jpNum = Number(jp);
console.log(jpNum);

//7 Result Answer: 2130



//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:

let moonlight = "Fighting Evil by Moonlight";
let moonlightSearch = moonlight.indexOf("Moonlight");
console.log(moonlightSearch);

//8 Result Answer:



//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:

let love = "I love ";
let food = "Pepe's pizza "
let drink = "and birch beer!"

let sentence = love.concat(food, drink);
console.log(sentence);

//9 Result Answer:



//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//10 Code Answer:

//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?)

//11 Code Answer:

let smallestNumber = Math.min(85, -3, 5, 93.2, -42.4);
console.log(smallestNumber);

//11 Result Answer: -42.4


//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
let randomRange1to10 = Math.floor(Math.random() * 10) + 1;
console.log(randomRange1to10);

//12 Result Answer:


//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
let randomRange14to21 = Math.floor(Math.random() * (21 - 14 + 1) + 14);
console.log(randomRange14to21);

//13 Result Answer:


//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:
let today = new Date();
// console.log(today);
let month =  "0" + (today.getMonth() + 1);
// console.log(month);
let day = today.getDate().toString();
// console.log(day);
let year = today.getFullYear().toString();
// console.log(year);
let currentDate = `${month}/${day}/${year}`;
console.log(currentDate);

//14 Result Answer:


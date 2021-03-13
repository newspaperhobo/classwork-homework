//place answer below each challenge. Be sure to test your results in the  colsole.

//Hint, you can find examples on the slides!

//Example: Convert the integer 321 into a string
//Example answer: 
// let x  = 321;
// let y = x.toString();
// console.log(y)
//Example result:“321”

// -------------------------------------------------------------
//1: Convert 10 into a string
//1 Answer:

let x = 10;
// console.log(x)
let y = x.toString();
console.log(y)

//1 Result: "10"


//2: Convert 1400 into a string
//2 Answer:

let largeNumber = 1400;
let largeNumberStr = largeNumber.toString();
console.log(largeNumberStr);

//2 Result: "1400"


//3: Convert 103456 into a string
//3 Answer:
let largestNumber = 103456;
let largestNumberStr = largestNumber.toString();
console.log(largestNumberStr);

//3 Result: "103456"

//4: Convert the boolean true and false into integers
//4 Answer:
let T = true;
let numberT = Number(T);
console.log(numberT)

//4 Result: 1

//5: Convert new Date into integers
//5 Answer:
let date = new Date();
let dateNum = Number(date);
console.log (dateNum);

//5 Result: 1615650687618

//6: Convert the string "02130" into an integer
//6 Answer:
// let jp = Number("02130");
let jp = parseInt("2130");
console.log(jp);

//6 Result: 2130

//7: Use "03 1010" string as a value in a variable in an attempt to convert into an integer. Be sure to include the quotations.
//7 Answer:

let str = Number("03 1010");
console.log(str);

//7 Result: NaN


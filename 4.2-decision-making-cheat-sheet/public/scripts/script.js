//COMPARISON OPERATORS
console.log(`


COMPARISON OPERATORS`) 

// greater than: > 
// greater than or equal to: >= 
// less than: <
// less than or equal to: <= 
// equal to: == 
// strict equal to: === 
// not equal to: != 
// strict not equal to: !== 

// Use the variables below for the comparison operators activities. 
let answer;
let x = 2;
let y = 5;
let z = "5";

console.log(`
x = ${x} and is a ${typeof x}
y = ${y} and is a ${typeof y}
z = ${z} and is a ${typeof z}
`);

// DIRECTIONS: Uncomment out the paired answer = (); AND the console.log() lines of code one at a time below. Each time you uncomment one pair out, make the code in the parentheses defining the "answer" variable reflect the question in the console.log underneath it.

//EXAMPLE:
// answer = (x < y);
// console.log(`Is x less than y? | ${answer}`); // true

// answer = (x > y);
// console.log(`Is x greater than y? | ${answer}`); // false

// answer = (y >= z);
// console.log(`Is y greater than or equal to z? | ${answer}`); // true

// answer = (x < y);
// console.log(`Is x less than y? | ${answer}`); // true

// answer = (y <= x);
// console.log(`Is y less than or equal to x? | ${answer}`); // false

// answer = (y = z);
// console.log(`Is y equal to z? | ${answer}`); // true

// answer = (y === z);
// console.log(`Is y strictly equal to z? | ${answer}`); // false

// answer = (z != x);
// console.log(`Is z not equal to x?  | ${answer}`); // true

// answer = (y != z);
// console.log(`Is y not equal to z?  | ${answer}`); // false

// answer = (y !== z);
// console.log(`Is y strictly not equal to z?  | ${answer}`); // true





//CONDITIONAL STATEMENTS
console.log(`


CONDITIONAL STATEMENTS`)

// IF STATEMENTS
// Conditional statements always start with the keyword: if

// Next comes the statement that needs evaluated, often used with a comparison operator: if (variable1 > variable 2)

// Then comes a set of curley brackets: if (variable1 > variable 2) {}

//Inside the curly brackets is the block of code that you want to be executed if the statement evaluates to TRUE. There can be multiple lines of code, each ending with a semicolon. Each statement is written on it's own indented line:

// IF STATEMENT SYNTAX:
// if (statement === TRUE) {
//     First line of code to be executed;
//     Second line of code to be executed;
//     Third line of code to be executed;
//     ...
// };

// Use the variables below for the comparison operators activities.
let varX = 10;
let varY = "ten";
let varZ = "10";
let varB = 55;

// DIRECTIONS: Uncomment out the following 6 lines of code to view it in your console.
console.log(`
varX = ${varX} and is a ${typeof varX}
varY = ${varY} and is a ${typeof varY}
varZ = ${varZ} and is a ${typeof varZ}
varB = ${varB} and is a ${typeof varB}
`);

// DIRECTIONS: Write an if statement that will print the following message in a console.log if the conditional statement is true: `The conditional statement is TRUE, so it executed this code.` 
    // You can decide on the expression to use in statement, but use the variables provided above along with a comparison operator to make the statement evaluate to TRUE.   





// DIRECTIONS: Write an if statement to check if varY exists. Print the following message with a console.log if varY exists: `varY exists, and it is: ${varY}`
if (varY) {
    console.log(`varY exists, and it is: ${varY}`)
};



// IF ELSE STATEMENT SYNTAX:
// if (statement === TRUE) {
//      code to be executed;
//      ...
// } else {
//      code to be executed;
//      ...
//};


// DIRECTIONS: Write an if else statement that will print the following message in a console.log if the if conditional statement is true: `The first conditional statement is TRUE, so it executed this code.` 
    // If the first condtional is FALSE, the following message should be printed in a console.log: `The first statement was FALSE, so this statement printed through the ELSE statement.`
    // First, write a statement that will get the first message to print in the console and check that it prints as expected. 
    // Then, change the statement so that it evaluates to FALSE, so the second message will print. 

// if (varX == varZ) {
//     console.log(`The first statement is TRUE, so it executed this code.`)
// }
// else {
//  console.log(`The first statement was FALSE, so this statement printed through the ELSE statement.`)
// }



// ELSE IF STATEMENT SYNTAX:
// if (statement === TRUE) {
//      code to be executed;
//      ...
// } else if (statement === TRUE) {
//      code to be executed;
//      ...
// } else {
//      code to be executed;
//      ...
//};
// * Note that you can have as many else if statements as you want. 

// DIRECTIONS: Write a statement that includes an IF, ELSE IF, and ELSE statement. If the first statement evaluates to TRUE, the code should print the following message in a console.log: `The first conditional statement is true, so it executed this code.`
    // If the first condtional is FALSE, but the second conditional is TRUE, the following message should be printed in an ELSE IF statement: `The first statement was FALSE, but the second statement, in the ELSE IF statement was TRUE, so this message printed.` 
        // If both the IF and the ELSE IF statements evaluate to FALSE, the following message should be printed in a console.log: `The first statement was FALSE, the ELSE IF statement was also FALSE, so this statement printed through the ELSE statement.`
            // Rewrite your statements to get the first message to print, then rewrite to get the second message to print, then rewrite to get the last message to print. 

// if (varX === varZ){
//     console.log(`The first conditional statement is true, so it executed this code.`)
// } else if (varX === varZ) {
//     console.log(`The first statement was FALSE, but the second statement, in the ELSE IF statement was TRUE, so this message printed.`)
// } else {
//     console.log(`The first statement was FALSE, the ELSE IF statement was also FALSE, so this statement printed through the ELSE statement.`)
// }





// ARITHMETIC OPERATORS
console.log(`


ARITHMETIC OPERATORS`)

// You can do math with numbers, strings that contain numbers, and variables whose values are numbers or a number within a string. 
    // The only time arithmetic can't be performed properly on a number contained in a string, like "5" is for addition because JavaScript concatenates it instead of adding. 

// addition: + 
// subtraction: - 
// multiplication: * 
// exponentiation: ** (raises the left operand to the power of the right operand) 
// division: /
// modulus: % (returns the remainder of the left operand divided by the right operand 5 % 2 = 1; 10 % 4 = 2;)
// increment: ++ (increases the number by 1)
// decrement: -- (decreases the number by 1)

    // Just like in algebra, the PEMDAS order of operations applies in JavaScript:
    // parentheses | exponents | multiplication/division | addition/subtraction 


let mathX = 10;
let mathY = "5";
let mathZ = 2;
let mathAnswer;

// DIRECTIONS: Uncomment out the following 5 lines of code.
console.log(`
mathX = ${mathX} and is a ${typeof mathX}
mathY = ${mathY} and is a ${typeof mathY}
mathZ = ${mathZ} and is a ${typeof mathZ}
`);

// DIRECTIONS: Uncomment out the paired mathAnswer = (); AND the console.log() lines of code one at a time below. Each time you uncomment one pair out, make the code in the parentheses defining the "mathAnswer" variable reflect the arithmetic statement in the console.log underneath it.

// EXAMPLE:
// mathAnswer = (13 + 3);
// console.log(`13 added to 3 = ${mathAnswer}`); 

// mathAnswer = (mathx + 15);
// console.log(`mathX added to 15 = ${mathAnswer}`); // 25

// mathAnswer = (mathY - mathZ);
// console.log(`mathY minus mathZ = ${mathAnswer}`); // 3

// mathAnswer = (mathY * 100);
// console.log(`multiply mathY by 100 = ${mathAnswer}`); // 500

// mathAnswer = (mathZ ** 7);
// console.log(`mathZ raised to the power of 7 = ${mathAnswer}`); // 128

// mathAnswer = (25 / mathY);
// console.log(`25 divided by mathY = ${mathAnswer}`); // 5

// mathAnswer = (mathY % mathZ);
// console.log(`the remainder of mathY divided by mathZ = ${mathAnswer}`); // 1

// mathAnswer = (++mathY);
// console.log(`mathY incremented once = ${mathAnswer}`); // 6

// mathAnswer = (--mathX);
// console.log(`mathX decremented once = ${mathAnswer}`); // 9





//TYPE COERCION 
console.log(`


TYPE COERCION`) 
// JavaScript will coerce variables by changing their data type in some instances. For example, when adding a number that's contained in a string and an integer whose data type is number, JS will coerce the number to a string, and concatenate it.

const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

// DIRECTIONS: console.log the variable "sum" along with its data type below to see type coercion in action: `The variable sum is: ${sum} and it's a: ${typeof sum}`

// console.log(`The variable sum is: ${sum} and it's a: ${typeof sum}`)


// JavaScript variables can be converted to another data type in two ways:
//  - automatically by JavaScript (like example above)
//  - by programmer using a built-in JavaScript function, also called a method (examples below)





//String() METHOD 
console.log(`


String() METHOD`) 

// String() method - a built-in JavaScript method that changes the given value to a string

let myAge = 42;
//DIRECTIONS: uncomment out the next line of code to see the variable myAge and its data type in the console:
// console.log(`myAge is: ${myAge} and it's a: ${typeof myAge}`);

// DIRECTIONS: reassign the variable myAge to be a string using the String() method.

// myAge= String(myAge)

// DIRECTIONS: console.log the variable "myAge" along with its data type below to see type coercion in action: `The variable myAge is: ${myAge} and it's a: ${typeof myAge}`

// console.log(`The variable myAge is: ${myAge} and it's a: ${typeof myAge}`)


// Note, just using String(variableName) doesn't permanently change the data type to a string unless you use the method when assigning/reassigning a variable.
// DIRECTIONS: uncomment out the following 3 lines code to see this idea in action

// let yourAge = 55;
// String(yourAge);
// console.log(`The variable yourAge is: ${yourAge} and it's a: ${typeof yourAge}`);

// In order to permanently change the data type of yourAge, you would have to reassign the variable:
// yourAge = String(yourAge);





//.toString() METHOD 
console.log(`


.toString() METHOD`) 
// You can also use the .toString() string method to convert variables to strings. Note, this method behaves the same as the Number() method in that you have to save the variable for the conversion to stick beyond the initial return value.  

let theirAge = 27;
//DIRECTIONS: uncomment out the next line of code to see the variable theirAge and its data type in the console:
// console.log(`theirAge is: ${theirAge} and it's a: ${typeof theirAge}`);


// DIRECTIONS: reassign the variable theirAge to be a string using the .toString() method.
// theirAge = theirAge.toString()

// DIRECTIONS: console.log the variable "theirAge" along with its datatype below to see type coercion in action: `The variable theirAge is: ${theirAge} and it's a: ${typeof theirAge}`
// console.log(`theirAge is: ${theirAge} and it's a: ${typeof theirAge}`);





//Number() METHOD 
console.log(`


.Number() METHOD`) 
// The Number() method can be used to turn a number saved in a string into a number data type. This is especially useful when used with the prompt() method because that is always going to return a string, even when the user inputs a number.

// DIRECTIONS: create a variable called userAge that holds the value of a user's entry to the prompt: "What is your age?".
let userAge = prompt("What is your age?")


// DIRECTIONS: console.log the variable "userAge" along with its datatype below to see the data type before coercion: `The userAge is: ${userAge} and the data type is: ${typeof userAge}`
// console.log(`The userAge is: ${userAge} and the data type is: ${typeof userAge}`);


// DIRECTIONS: Reassign userAge to be the number data type by using the Number() method
userAge = Number(userAge);


// DIRECTIONS: console.log the variable "userAge" along with its datatype below to see type coercion in action: `The userAge is: ${userAge} and the data type is: ${typeof userAge}`
console.log(`The userAge is: ${userAge} and the data type is: ${typeof userAge}`);

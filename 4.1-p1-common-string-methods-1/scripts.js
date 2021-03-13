// alert("Hey, this works!")

// 1
// Prompt user to enter their favorite candy and store it in a variable named `myFavoriteCandy`.

// let myFavoriteCandy = prompt("What is your favorite candy?");


// 2
// Get the length of `myFavoriteCandy` and print to the console.

// console.log(myFavoriteCandy.length);


// 3
// Get the character at index 0 of `myFavoriteCandy`. 
// What are two ways you can get the character at index 0? Write both ways.

// console.log(myFavoriteCandy.charAt(0));
// console.log(myFavoriteCandy[0]);


// 4
// Transform the string stored in `myFavoriteCandy` to all lowercase. Print to the console.

// console.log(myFavoriteCandy.toLowerCase());


// 5
// Get the index of the character 'u'. Print result to the console. What will be returned if there is no 'u' in the string stored in `myFavoriteCandy`? // -1 (remember quotes around strings or returns undefined)

// console.log(myFavoriteCandy.indexOf("u"));


// 6 - Challenge 
// Prompt user to enter two numbers and print the result of the two numbers multiplied together into the console. Use string interpolation to print a nicely formatted ouput to the user.
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

// num1 = Number(num1);
// num2 = Number(num2);

let answer = (num1 * num2);

// console.log(`The answer is ${answer}`)

document.getElementById("answer").innerHTML = `The answer is ${answer}`

// 7 - Challenge
// What if a user enters a value that is *not* a number in step 6? 
// How can you validate the user input to make sure only a number can be entered? 
// Note: This problem is not within scope of this unit. You will need to use Google!

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter another number");
// num1 = Number(num1);
// num2 = Number(num2);

// if (isNaN(num1, num2)) {
//    alert("Please type numbers into both fields");
// }  else {
//     alert("Thank you!");
// }

// // if (isNaN(num2)) {
// //    alert("Please type a number");
// // } else {
// //    alert("Thank you!")
// // }

// let answer = (num1 * num2);
// // console.log(answer);

// // console.log(`The answer is ${answer}`)

// let finalAnswer= `The answer is ${answer}`;
// let badAnswer = `You've reached a black hole, toss the whole equation away!`;

// if (isNaN(answer)) {
//     document.getElementById("answer").innerHTML = badAnswer;
// } else {
//     document.getElementById("answer").innerHTML = finalAnswer;
// }

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter another number");

// if (isNaN(num1, num2)) {
//    alert("Please type numbers into both fields");
// }  else {
//     alert("Thank you!");
// }

// num1 = Number(num1);
// num2 = Number(num2);

// let answer = (num1 * num2);

// let finalAnswer= `The answer is ${answer}`;
// let badAnswer = `You've reached a black hole, toss the whole equation away!`;

// if (isNaN(answer)) {
//     document.getElementById("answer").innerHTML = badAnswer;
// } else {
//     document.getElementById("answer").innerHTML = finalAnswer;
// }
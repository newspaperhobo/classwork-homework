// alert("hello, world!")

/* This exercise is to help you get comfortable with loops.

To begin, create an `index.html` page and link it with a `scripts.js` file. Inside the html page, update the title of the document to "Loop Practice" and add a large heading to the body with a similar name.

Inside your JavaScript file, write code for the following: */

// 1. Make a loop that counts from 0 to 10.  It should print out "The number is" and each integer, from 0 to 10, in the console. 

// for (let i = 0; i <= 10; i++) {
//     console.log(`The number is ${i}`);
// }


// 2.  Make a loop that counts from 5 to 15 in the console, in multiples of 3. It should print out the number "is a multiple of 3."
for (let i = 5; i <= 15; i++) {
    if (i % 3 == 0) {
        console.log(`${i} is a multiple of 3`);
    }
}
// 3. Make a loop that counts by two, from 40 to 60.  Alert the result, adding line breaks between lines (add the string "\n" in between each value).
// for (let i = 40; i <=60; i += 2) {
//    alert(`${i} \n`)
// }


// 4. Make a loop that counts backwards from 100 to 0, and prints out in the console.
// for (let i = 100; i >=0; i--) {
//     console.log(i);
// }

// 5. Write a function that takes in two integers parameters and returns the multiplication of those two values. Print the value to the console.
// const MultiplyTwoNumbers = (num1, num2) => {
//  return num1 * num2
// }
// console.log(MultiplyTwoNumbers(8, 9));

// 6. Write a function that takes in a string parameter and returns true if the string contains 'a', otherwise the function returns false.
// const findLetterA = (str) => {
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] === "a") {
//             return true
//         }
//     }
//     return false
// }

// console.log(findLetterA("Rare Pupper"));
// console.log(findLetterA("Nothing"));


// 7. Write a function that takes in a string parameter and returns the first character and the last character.

// const getFirstAndLastCharacter = (str) => {
//     for (let i = 0; i <= str.length; i++) { 
//         if (i === 0 || i === (str.length - 1)) {
//         return str[0] + str[str.length - 1]
//     }
// }}

// console.log(getFirstAndLastCharacter("cats"))

// 8. Write a function that takes in a number and prints the multiplication table of that number (multiply the number by 0 - 10).

// const multiplicationTable = (num) => {
//     for (i = 0; i <= 10;  i++) {
//       console.log(num * i)
//     }
// }

// multiplicationTable(3);


// 1. Write a function that takes in a number and prints out each number till n (the number inputted). Stop the loop when the index is 5.

// const printNumber = n => {  
//    for (let i = 0; i < 5; i++) {
//         console.log(n++)
//    }
// }

// printNumber(55);

// 2. Write some code that console.log's the message "Do I have to repeat myself?" 1000 times. Use a loop but make sure not to get stuck in an infinite loop!

// const repeat1000Times = () => {
//     for (let i = 0; i < 1000; i++){
//         console.log("Do I have to repeat myself?")
//     }
// }

// repeat1000Times();

// 3. Write a function called numOfChar that takes a string and returns the number of characters of the string.

// const numOfChar = str => {
//     return str.length
// }

// console.log(numOfChar("hello"));

// 4. Write a function called count that takes a parameter n which is a whole number greater than or equal to 1.  When executed, count should console.log the whole numbers from 1 to n.

// const count = n >=1 => {
//     let count = 1;
//     for (let i = 0; i < n; i++) {
//         console.log(count++)
//     }
// }

// count(20);

// 5. Write a function that takes in a string and prints out each letter on a new line. If the string is empty or is a number, leave the loop.

// const printStringLetters = str => {
//     for (let char of str) {
//         if (char === 0 || char === "") {
//             break
//         } else {console.log(char)}
//     } 
// }

// printStringLetters("hello")

// 6. Write a function called countEven that takes a parameter n which is a whole number greater than or equal to 2.  When executed, countEven should console.log the even numbers from 2 to n.

// const countEven = n => {
//     for (let i = 2; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     } 
// }

// countEven(23);

// ::::::BONUS::::
// 7. Write a function called toCase that takes a string and returns that string to both lowercase and uppercase.
// const toCase = str => {
//     for (char of str) {
//         console.log(`${str.toUpperCase()} ${str.toLowerCase()}`);
//     }
// }

// toCase("hello")



// 8. Write a function called countOdd that takes a parameter n which is an odd whole number greater than or equal to 1.  When executed, countOdd should console.log the odd numbers from 1 to n.

// const countOdd = n => {
//     for (i = 1; i <= n; i+=2) {
//         console.log(i);
//     }
// }

// countOdd(25)

/* 9. A pangram is a string that contains every letter of the alphabet. Write a function that takes in a string parameter and returns true if the string is a pangram, otherwise return false. Ignore case, i.e., 'T' is the same as 't'. Also note that some edge cases are not accounted for, such as a pangram with extra letters will true true. Here are some test cases:

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
// Returns true
console.log(isPangram('The quick brown fox jumps over the lazy dogsssssss'))
// Returns true
console.log(isPangram('I am not a pangram'))
// Returns false
console.log(isPangram('We promptly judged antique ivory buckles for the next prize'))
// Returns true
console.log(isPangram('We promptly judged antique ivory buckles for the prize'))
// Returns false */
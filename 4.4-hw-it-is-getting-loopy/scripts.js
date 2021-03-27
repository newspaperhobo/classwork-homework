// alert("hello!")
// 1. Write a function called sum which takes a whole number n as a parameter which will add up all the whole numbers between 1 and the value of n.  The sum should be returned by the function.

// const sum = n => {
//     let sum = 0
//     for (i = 1; i <= n; i++) {
//         sum += i
//     } return console.log(sum)
// }
// sum(1)

// 2.Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// const getSyllables = str => {
//     str = str.toLowerCase();
//     let count = 0;
//     for (i = 0; i < str.length; i++) {
//     if (i % 2 != 0) {
//             count++
//         } 
//     } console.log(count)
// }
// getSyllables("Lalalalalalala");

// find out what the first letter is, compare it to the next letter,  

// 3. Write a function called addTo that accepts a number as a parameter and adds all whole numbers smaller or equal than the parameter. The result is to be returned.

// const addTo = n => {
//     let sum = 0
//     for (i = 1; i <= n; i++) {
//         console.log(sum += i)
//     } return sum
// }

// addTo(1)

// 4. Write a function that takes a string input and console logs each letter.

// const printString = str => {
//     for (let char of str) {
//         console.log(char);
//     } 
// }

// printString("this is a string");

// 5. Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// const findCase = str => {
//     if (str === str.toUpperCase()) {
//         console.log("upper")
//     } else if (str === str.toLowerCase()) {
//         console.log("lower")
//     } else {
//         console.log("mixed")
//     }
// }

// findCase("UpPeR");

// 6. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

// const guessMyNumber = () => {
//     let num = Number(prompt("Pick a number, any number, can you guess the secret number?"));
//     let secretNum = 19;
//     if (num < secretNum) {
//             alert("The secret number is greater than your guess!");
//             guessMyNumber();
//         }
//         else if (num > secretNum) {
//             alert("The secret number is less than your guess!");
//             guessMyNumber();
//         } else {
//             alert(`You got it right!`)
//         }
//     }

//     guessMyNumber();

// add loop to count how many prompt inputs? try while loop

/* 7. Write a JavaScript for loop that will iterate from 0 to 25. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

Your results should look like this:
"0 is even"
"1 is odd"
"2 is even"*/

// const oddOrEven = () => {
//     for (i = 0; i<=25; i++) {
//         if (i % 2 === 0) {
//             console.log(`${i} is even.`)
//         } else if (i % 2 != 0) {
//             console.log(`${i} is odd.`)
//         }
//     }
// }

// oddOrEven();

// 8. You have a shelf that can only hold so many books. For each iteration of the loop, we will add one book onto the shelf. Once the shelf has 80 books, you can no longer add anymore. Write a script that after every iteration, it will tell you how many remaining books you can add into the shelf. Console long something like, "There is room for only ## of books"

// const howManyBooks = () => {
//     for (let book = 80; book>=0; book--) {
//         console.log(`You can add ${book} more books to the shelf`)
//     } 
// }

// howManyBooks();

// or

// const howManyBooks = () => {
//     let books = 80;
//     for (let book = 0; book<=80; book++) {
//         let total = books - book
//         console.log(`You can add ${total} more books to the shelf`)
//     } 
// }

// howManyBooks();

// 9. Print out a grid of asterisks. Ask the user for the height (rows) and width (columns).

// let row = Number(prompt("What is the width of the asterisk grid?"))
// let height = Number(prompt("What is the height of the asterisk grid?"))
// let asteriskLoopRow = () => {
//     let asteriskRow = "";
//     for (let i = 0; i < row; i++) {
//         asteriskRow += "*";
//     } return asteriskRow;
// }

// let asteriskLoopHeight = () => {
//     for (i = 0; i < height; i++) {
//         console.log(asteriskLoopRow())
//     } 
// }

// asteriskLoopHeight();


/* 10. Write a function that takes a string input, transforms the odd characters to uppercase, and console logs the result of the entire string.
Example input: "hello" Output: "hElLo"*/

// const oddCharactersToUpperCase = str => {
//         /* for (i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//                 console.log(str[i].toUpperCase())
//             } else {
//                 console.log(str[i])
//             }
//         } return str */

//         let count = 0
//         for (let char of str) {
//             if (count % 2 === 0) {
//                 console.log(char.toUpperCase())
//             } else {
//                 console.log(char)
//             }
//             count++
//         }
//     }

// oddCharactersToUpperCase("hello");
// h e l l o
// 0 1 2 3 4 index
// 1 2 3 4 5 character count


// 11. Write a function that accept two integers and displays the larger number.

// const getLargerNumber = (num1, num2) => {
//     if (num1 > num2) {
//         let message = console.log(`Num1 (${num1}) is greater than Num2 (${num2})`)
//         return message
//     } else {
//         let message = console.log(`Num2 (${num2}) is greater than Num 1 (${num1}).`)
//         return message
//     }
// }

// getLargerNumber(-150, 30);

// 12. Write a function that takes in 3 numbers and sorts them from lowest to highest. Display an alert box to show the result.
// const sortLeastToGreatest = (num1, num2, num3) => {
//     if (num1 <= num2 && num2 <= num3) {
//         alert(`Highest to lowest: ${num3}, ${num2}, ${num1}`)
//     } else if (num3 <= num2 && num2 <= num1) {
//         alert(`Highest to lowest: ${num1}, ${num2}, ${num3}`)
//     } else if (num3 >= num1 && num1 >= num2) {
//         alert(`Highest to lowest: ${num3}, ${num1}, ${num2}`)
//     } else if (num2 >= num3 && num3 >= num1) {
//         alert(`Highest to lowest: ${num2}, ${num3}, ${num1}`)
//     } else if (num1 >= num3 && num3 >= num2) {
//         alert(`Highest to lowest: ${num1}, ${num3}, ${num2}`)
//     } else if (num2 >= num1 && num1 >= num3) {
//         alert(`Highest to lowest: ${num2}, ${num1}, ${num3}`)
//     }
// }

// sortLeastToGreatest(100, 40, -20);


// 13. Write a function that takes in a string and removes all vowels from it (a, e, i, o, u), and returns the new string. If the string is empty, break from the loop.

const removeVowels = string => {
string = string.toLowerCase()
string = string.replace(/[aeiou]/g, "")
return string
}
console.log(removeVowels("a quick brown fox jumps over the"))

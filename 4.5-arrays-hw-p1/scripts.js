/* 1. Sum of an array
Write a function that will take an array of numbers as a parameter and return the sum of those numbers. 

Examples:

sum([3, 4, 5]); // returns 12

sum([10, 5, 9]); // returns 24

 

Hint: Try using a loop! Declare the function, then call the function in the same JavaScript file, inside a console.log() statement. Open the Console to display your results. */

// let array = [3, 4, 5]
// const addArray = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += (array[i])
//     } return sum
// }

// console.log(addArray(array));



/* 2. Average of an array
Write code that takes an array of numbers as a parameter and returns the average of those numbers.

Examples:

average([3, 4, 5]); // returns 4

average([10, 5, 9]); // returns 8

Hint: calculating the average requires only one more step after finding the sum. */

// let array = [3, 4, 5]
// const getArrayAverage = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += (array[i])
//     } let average = (sum / array.length)
//     return average
// }

// console.log(getArrayAverage(array));


/* Bonus 1: Refactor your code to re-use a function
Now, rewrite your average function so it calls your sum function  to add the numbers up. This is an example of using a function to reuse code. */

// const getArrayAverage2 = (array) => {
//     let sum = addArray(array);
//     let average = (sum / array.length);
//     return average
// }

// console.log(getArrayAverage2(array));

/* Bonus 2:
Write a function that takes an array of numbers and returns the largest number.

Examples:

*/ let array2 = [7,10, 30, 1]; // returns 30 */

// using spread operator: "..."
// let getArrayMax = (array) => {
//     let max = Math.max(...array)
//     return max
// }

// console.log(getArrayMax(array2));


/* Bonus 3:
Write a function that takes two different arrays as parameters, finds the largest number in each array and returns the sum of those two numbers.

Example:

*/ let array3= [3, 2, 8, 14] 
let array4 = [4, 9, 1, 14]; // returns 17 */

// with spread operator "..."
// const getSumOfArrayMax = (array1, array2) => {
//     let max1 = Math.max(...array1);
//     let max2 = Math.max(...array2);
//     let sum = max1 + max2;
//     return sum;
// }

// console.log(getSumOfArrayMax(array3, array4))

// with array.reduce()- not sure exactly how this method works in comparing stuff
const getArrayAverage2 = (array3, array4) => {
let max1 = array3.reduce(function(a, b) {
return Math.max(a, b)
})

let max2 = array4.reduce(function(a, b) {
    return Math.max(a, b)
    })

console.log(max1 + max2)
}

getArrayAverage2(array3, array4)
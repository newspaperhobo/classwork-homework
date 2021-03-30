/**
 * Unit 4.5 Arrays Period 2 Classwork
 * Use the following arrays to complete the exercises. Each problem builds on the ones before it.
 * Make sure to double check your work after each problem by printing the result to the console.
 **/

let animals = ["cat", "dog", "bird", "turtle", "lizard"];
let sports = ["basketball", "football", "tennis", "soccer", "hockey"];
let numbers = [5, 10, 15, 20, 25, 30, 35];

/**
 * 1
 * Add "lion" to the end of the animals array
 */
animals.push("lion");
console.log(animals);


/**
 * 2
 * Remove "cat" from the beginning of the animals array
 */
animals.shift("cat");
console.log(animals);



/**
 * 3
 * How many elements are in the elements array now? Print to the console
 */
console.log(animals.length);


/**
 * 4
 * Print to the console the element at the 2nd index of the animals array
 */
console.log(animals[2]);


/**
 * 5
 * Add "volleyball" and "gymnastics" to the beginning of the sports array
 */
sports.unshift("volleyball", "gymnastics");
console.log(sports);

/**
 * 6
 * What is the index of "soccer" in the sports array? Print to the console.
 */
console.log(sports.indexOf("soccer"));


/**
 * 7
 * Combine the numbers array and sports array into a new array called `combinedArray`. 
 * Print the `combinedArray` to the console
 */

let combinedArray = numbers.concat(sports);
console.log(combinedArray);


/**
 * 8
 * Reverse the elements in `combinedArray` you created in step 7. Print the reversed array to the console.
 */
let combinedArrayReverse = combinedArray.reverse();
console.log(combinedArrayReverse);


/**
 * 9
 * How many elements are in `combinedArray`? Print to the console
 */
console.log(combinedArray.length);



/**
 * 10
 * Remove the last element of element and store the result in a new variable called `lastElement`.
 * Print `lastElement` to the console. What is this value?
 */
let lastElement = animals.pop();
console.log(lastElement);
// lion- last element of mutated animals array


/**
 * 11
 * Check to see if the animals array contains "lizard" and print the result to the console
 */
let lizard = animals.includes("lizard");
console.log(lizard);



/**
 * 12
 * Check to see if the sports array contains "water polo" and print the result to the console
 */
let waterPolo = sports.includes("water polo");
console.log(waterPolo);


/**
 * 13
 * Check to see if the numbers array is empty. Print to the console true if the 
 * array is empty, otherwise print false
 */
if (Array.isArray(numbers)) {
    console.log(true);
} else {
    console.log(false);
}


/**
 * 14
 * Using array literal syntax, create a new array called myFavoriteFoods with 5 of your favorite foods
 * Print to the console your myFavoriteFoods array
 */

let myFavoriteFoods = new Array("eggplant parm", "tacos", "navaratan korma", "mushrooms", "cheese fries")
console.log(myFavoriteFoods)


/**
 * 15
 * Loop through the `myFavoriteFoods` array and print each element to the console as a numbered list
 */

for (let i = 0; i < myFavoriteFoods.length; i++) {
    let num = i + 1;
    console.log(`${num}. ${myFavoriteFoods[i]}`)
}


/***************************************************BONUS***************************************************/
/**
 * 16
 * Write a function called `addFive` that takes in an array of numbers, and adds 5 to each element of the array.
 * The function should return a new array without altering the original array.
 */

let array = [0, 5, 10, 15, 20]
const addFive = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i] + 5;
    } return newArray
}

console.log(addFive(array));

/**
 * 17
 * Write a function called `transformLastLetter` that takes in an array of strings, changes the LAST
 * letter of each element in the array to uppercase, and returns the newly transformed array
 */
let strArray = ["cats", "dogs", "birds"]
const transformLastLetter = strArray => {
    for (let element of strArray) {
    newElement = element.charAt(element.length - 1)
    console.log(newElement)
    uppercase = newElement.toUpperCase();
}}

transformLastLetter(strArray);


/**
 * 18
 * Write a function called `reverseArray` that takes in an array as a parameter and reverses the order of
 * elements in the array WITHOUT using the built in JavaScript method. Return the new array.
 */


/**
 * 19 - CHALLENGE - Question 18 will return a reversed array without modifying the original array.
 * Can you write a function to reverse an array in place, so that the original array is modified?
 */


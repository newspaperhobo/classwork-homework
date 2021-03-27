// ARRAYS

// WHAT IS AN ARRAY?
// array = data type that acts like a variable; can store multiple values (elements) under a single name; can store any data type; elements in an array don't have to be the same type; can be thought of as a list where each element has a numbered position

// ARRAY SYNTAX - LITERAL NOTATION
// use let or const followed by name of array, equal sign, square brackets, elements inside square brackets separated by comma, end with semicolon after closing square bracket

let toDoList = ["fold laundry", "finish CP#7", "go for a bike ride"];

// console.log(toDoList);

// can have multiple data types in same array

let randomArray = ["first element", 2, true, "5.5", false, "last element"];

// console.log(randomArray);

// Note: space and line breaks are not important; an array can span multiple lines, which can make it more readable, especially in the case of arrays inside an array

let toDoList2 = [
    "fold laundry",
    "finish CP#7",
    "go for a bike ride"
];

// console.log(toDoList2);

// Array elements can be arrays themselves - called nested arrays

let listOfLists = [
    workList =["time sheet", "put slides together", "grade homework"],
    houseList = ["fold laundry", "finish CP#7", "go for a bike ride"],
    personalList = ["read", "walk", "floss"]
];

// console.log(listOfLists);

// ARRAY SYNTAX - ARRAY CONSTRUCTOR
// use the let or const keyword followed by the name of the array and an equal sign, use new Array keywords, parentheses, array elements inside of parentheses separated by a comma, end with semicolon

const TFs = new Array("Kiki", "Melissa", "Sonia", "Amber", "Helen");

// console.log(TFs);

// ACCESSING ARRAY ELEMENTS
// each element in an array has a numbered position called its index

let exampleArray = ["element at index 0", "element at index 1", "element at index 2", "element at index 3"];

// we can access individual elements by referencing the item's index number
// JavaScript arrays are zero-indexed: the first element is located at 0 instead of 1
// to access a specific element use the array's name with the index # inside square brackets directly after the name: arrayName[#]
    // using brackets to access elements is called bracket notation
    // trying to access an element index that doesn't exist will return undefined



const countries = ["USA", "Nigeria", "Haiti"];
const states = ["Massachusetts", "Ohio", "Georgia"];
const cities = ["Boston", "Cleveland", "Atlanta"];

// //What will the following outputs be?

// console.log(countries[0]); "USA"

// console.log(states[1]); "Ohio"

// console.log(cities[2]); "Atlanta"

// console.log(countries[3]); "undefined"

// How would we access "Massachusetts"?

// console.log(states[0]);

// How would we access "Georgia"?

// console.log(states[2]);

// How would we access "Nigeria"?

// console.log(countries[1])

// How would we access "Boston"?

// console.log(cities[0])


// You can access elements of arrays in arrays (nested arrays) by first referencing the outer array name, then the index of the array inside the larger array, then the index of the element in the inner array:

let listOfListsB = [
    ["time sheet", "complete grading", "prep next teaching unit",],
    ["empty dishwasher", "laundry", "sweep floor",],
    ["read", "work out", "floss",],
];

// What will the following line's output be?
// "read"
// console.log(listOfListsB[2][0]);

// How would we access "laundry"?

// console.log(listOfListsB[1][1]);

// UPDATING ARRAY ELEMENTS
// Once you have access to an element in an array through bracket notation, you can change the value of the index in the same way that you would reasign a variable: arrayName[#] = newValue;

let condiments = ["Ketchup", "Mustard", "Soy Suace", "Sriracha"];
const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

// Change the first element of condiments from "Ketchup"" to "Mayo""

// condiments[0] = "Mayo";
// console.log(condiments);

// Note that you can change the array elements of an array that's written with a const keyword instead of let


// Change the fourth element of untensils from "Spork" to "Spoon"
// utensils[3] = "Spoon";
// console.log(utensils);


// The difference in using const and let comes into play if you're trying to reassign the whole array all at once. You can do that with arrays declared with let, but not arrays declared with const


// Reasign condiments to an array with one element: "Mayo" and console.log the whole array- don't forget brackets
// condiments = ["Mayo"];
// console.log(condiments);

// Reasign untensils to an array with one element: "Spoon" and console.log the whole array

// utensils = ["Spoon"]
// console.log(utensils);


// .LENGTH ARRAY PROPERTY
// Remember, a built-in property is a characteristic of an object (arrays are considered objects), often describing specific attributes of that object - basically data that's available to you about a specific object
// The .length property will return the number of items in the array. 
// You access the .length property by using arrayName.length

// const resolutions = ['learn to code', 'knit a blanket', 'read 12 books'];

// console.log the length of the resolutions array

// console.log(resolutions.length);

// How would we access the last element of the resolutions array if we didn't know how many elements there were in it using only 1 line of code?

// console.log(resolutions[resolutions.length - 1]);

// ITERATING THROUGH ARRAYS WITH FOR LOOPS
// If we wanted to do something to every element in an array, say print each element to the console, we can loop through the array. One way to do that is with a for loop. 

// for (let i = 0; i < resolutions.length; i++) {
//     console.log(resolutions[i]);
// }


// Note: We can loop through all the elements in an array in a for loop by saying i < arrayName.length. That's because i starts at 0. If we want it to loop through an array that has 3 elements, we need it to stop looping when i is one less than the number of loops we want, since i starts at 0. When i is 0, that's our first loop, when i is 1, that's our second loop, and when i is 3, that's our third loop. 

//When looping through an array, starting with i = 0 means that i will match up with the array index you're trying to access. 




// ITERATING THROUGH ARRAYS WITH FOR...OF LOOPS
// Another helpful loop to use on arrays is the for...of loop.

const pets = ['dog', 'cat', 'fish', 'bird', 'lizard'];

//The word 'element' in the example above is just a placeholder variable name that represents each element of the array. You can replace 'element' with any variable name, but you must reference that same variable name in the body of the loop. You can use let or const to declare this placeholder.

//Rewrite the for...of loop, but use the variable name 'pet' instead of 'element'

// for (let element of pets) {
//     console.log(`Pet type = ${element}`)
//     console.log(`A ${element} can be a pet.`)
// }

// for (let PET of pets) {
//     console.log(`PET TYPE = ${PET}`)
//     console.log(`A ${PET} can be a PET.`)
// }
















// Classwork exercises:


// 1. Create an array called taskList using literal notation. This array should have 5 items that are on your to-do list. 

let taskList = ["Grocery shopping", "Finish CP#7", "Array homework", "Go for a walk", "Fold laundry"];


// 2. Print the taskList array to the console. 
// console.log(taskList)

// 3. Create an array called favoriteColors using array constructor syntax. This array should have at least 3 colors listed as elements.
// const favoriteColors = ["periwinkle blue", "deep purple", "tulip pink"]


// 4. Print the favoriteColors array to the console.

// console.log(favoriteColors);


// Use the following array for the next set of questions:
let toLearn = ["HTML", "CSS", "JavaScript", "Node", "Express", "EJS", "MongoDB", "Mongoose", "OAuth"];
// 5. Print the length of the toLearn array to the console.
// console.log(toLearn.length);

// 6. Print the second element of the toLearn array using bracket notation.
// console.log(toLearn[1]);


// 7. Print the element whose value is "Express" to the console using bracket notation. 

// console.log(toLearn[4]);


// 8. Change the last element's value from "oAuth" to "Authorization"
// toLearn[toLearn.length - 1] = "Authorization";
// console.log(toLearn);


// 9. Print each element of the toLearn array with a console.log by using a for loop

// for (let element of toLearn) {
//     console.log(element);
// }


// Use the following array for the next set of questions:
let numberArray = [0, 3, 5, 7, 13, 17, 23, 33, 42, 55, 81, 89, 99];

// 10. Loop through the numberArray with a for loop. For each loop, add the value of the element to a variable called grandTotal. Basically, you're adding all the numbers in the array together. Print grandTotal to the console after the loop. Hint: Create the grandTotal variable before the loop and set it equal to 0, and print the grandTotal variable outside of the loop.

// let grandTotal = 0
// for (let i = 0; i < numberArray.length; i++) {
//     grandTotal = (numberArray[i] + grandTotal)
// }
// console.log(grandTotal)




// 11. Imagine that each number in the numberArray represents a person's age. Write a for...of loop that includes an if...else statement. If the element's value is under 18, print `The person is [#] years old. That is not old enough to vote.` to the console. If the element's value is 18 or more, print `This person can vote because they're [#] years old.` to the console. The [#] should be replaced by the value of the element in the array.

// for (let element of numberArray) {
//     if (element < 18) {
//         console.log(`The person is ${element} years old. That is not old enough to vote.`)
//     } else {
//         console.log(`This person can vote because they're ${element} years old.`)
//     }
// }



// BONUS: Adjust the for...of loop in number 11 to say how many years it will be before the person can vote if they're under 18 and how many years they've been eligible to vote if they're over 18. 

// for (let element of numberArray) {
//     let years = 18;
//     let ageminus = years - element
//     let ageplus = element - years
//     if (element < 18) {
//         console.log(`The person is ${element} years old. That is not old enough to vote. This person can vote in ${ageminus} years.`)
//     } else {
//         console.log(`This person can vote because they're ${element} years old. This person has been able to vote for ${ageplus} years.`)
//     }
// }


// BONUS: Create a loop of your choosing to add 4 to each value held in the numberArray. Print the array to the console after the loop to make sure it worked. 
// let total = 0;
// for (let i = 0; i < numberArray.length -1; i++) {
//     numberArray[i] += 4
// }
// console.log(numberArray);
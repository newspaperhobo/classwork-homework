/**
 * Unit 4.5 Arrays Period 3
 * Use the following arrays to complete the exercises. Each exercise builds on the one before it.
 * Double check your work by printing to the console after each problem.
 **/

let carMakes = ['Toyota', 'Ford', 'Nissan', 'Volkswagen', 'Honda', 'Jeep'];
let carModels = ['Camry', 'Explorer', 'Sentra', 'Jetta', 'Civic', 'Cherokee']

/**
 * 1
 * Print to the console all elements in `carMakes` starting from index position 2 (inclusive).
 */
let newCarMakes = carMakes.slice(2);
console.log(newCarMakes);


/**
 * 2
 * Print to the console all elements in `carModels` from index position 1 to index position 4 (inclusive).
 */
let newCarModels = carModels.slice(1, 5);
console.log(newCarModels);


/**
 * 3
 * Use the splice() method to insert a new car make at index position 4 of `carMakes for 'Chevrolet'. 
 * Similarly, insert a new car model at index position 4 of `carModels` for 'Corvette'.
 */
carMakes.splice(4, 0, "Chevrolet");
console.log(carMakes);
carModels.splice(4, 0, "Corvette");
console.log(carModels);

/**
 * 4
 * Remove the 'Ford' from the array `carMakes` and remove 'Explorer' from the array 'carModels'.
 * Print to the console the element that has been removed from each array.
 */
let ford = carMakes.splice(1, 1);
console.log(ford);
let explorer = carModels.splice(1, 1)
console.log(explorer);

/**
 * 5
 * Use the splice() method to add the to beginning of the `carMakes` array a new car make 'Tesla'. 
 * Similarly, add to the beginning of the `carModels` array a new car model 'Model S'. 
 */

// carMakes.splice(0, 0, "Telsa");
// console.log(carMakes);
// carModels.splice(0, 0, "Model S")
// console.log(carModels);

/**
 * 6
 * What is another method you could use to add to the beginning of the array? Comment out your solution from
 * step 5 and use this alternative method to add 'Tesla' to the beginning of the `carMakes` array and 
 * 'Model S' to the beginning of the `carModels` array.
 */

carMakes.unshift("Telsa");
console.log(carMakes);
carModels.unshift("Model S");
console.log(carModels);


/**
 * 7
 * Print every car make in a numbered list
 */
const carMakeList = () => {
    carMakes.forEach((carMake, index) => {
        console.log(`${index + 1}. ${carMake}`)
    })
}

carMakeList();



/**
 * 8
 * Return a new array containing car models that start with the letter 'C'
 */
const startWithC = () => {
    let newArr = carModels.filter(carModel => {
        if (carModel.charAt(0) === "C") {
            return carModel
        }
    })
    // console.log(newArr);
    return newArr
}

console.log(startWithC());


/**
 * 9
 * Create a new array which combines the `carMakes` and `carModels` array into one. 
 * Example output: ["Tesla Model S", "Toyota Camry", "Nissan Sentra", "Volkswagen Jetta", "Chevrolet Corvette", "Honda Civic", "Jeep Cherokee"]
 * Note that the car make at index position 0 of `carMakes` corresponds with the car model at index position 0 of `carModels`
 */
// const carMakesAndModels = (carModels) {
//     for (let model of carModels) {

//     }
// }



/**
 * 10
 * The `agesArray` contains the ages of eight arbitrary individuals. Check if each individual is eligible to rent 
 * a vehicle. Return true if eligible, otherwise return false. Store the results in an array and print the array 
 * to the console. 
 * Note: The minimum age to rent a vehicle in MA is 21 years old. 
 */
const agesArray = [21, 65, 41, 27, 31, 16, 22, 14]


/**
 * 11
 * For each age in the `agesArray`, check if the individual is eligible to run for presidency after
 * 5 years time. 
 * Example output:
 * Person 1 is not eligible
 * Person 2 is eligible
 * Person 3 is eligible
 * Person 4 is not eligible
 * Person 5 is eligible
 * Person 6 is not eligible
 * Person 7 is not eligible
 * Person 8 is not eligible
 * Note: The minimum age to run for presidency in the United States is 35 years old.
 */



/**
 * 12
 * Create a variable called `twenties` which contains all the ages in the 20s of the `agesArray`.
 */


/*****************************************CHALLENGES*****************************************/

/**
 * 13
 * A palindrome is a string that reads the same forwards and backwards. 
 * 
 * Write a function named `isPalindrome` that takes a string parameter and returns true
 * if the string param is a palindrome, otherwise returns false. A string parameter may
 * contain commas, whitespaces, and period characters, which you will have to remove.
 * 
 */
const isPalindrome = (str) => {

}

// isPalindrome("RaceCar") should return true
// isPalindrome("race car") should return true
// isPalindrome("A man, a plan, a canal. Panama") should return true
// 

/**
 * 14
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers 
 * such that they add up to target. You may assume that each input would have exactly one 
 * solution, and you may not use the same element twice. You can return the answer in any order.
 * 
 * Example 1: 
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0, 1] because nums[0] + nums[1] == 9, so we return [0, 1]
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
const twoSum = (nums, target) => {

}

// Test cases: 
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));
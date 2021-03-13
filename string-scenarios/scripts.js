// alert("hello");

//Use examples from the slides/presentation to complete the challenges.



//Concatenate two strings together.
let str1 = "I would like to eat an egg sandwich ";
let str2 = "for brunch.";

console.log(str1.concat(str2));

//Concatenate three strings together.

let str3 = "and homefries ";

console.log(str1.concat(str3, str2));


//Search a string for content.

let tongueTwister = "Rubber baby buggy bumpers";

let result = tongueTwister.includes("buggy");

console.log(result);

//Replace a values in string.

let result2 = tongueTwister.replace("Rubber", "Bigger");

console.log(result2);

//Use trim on strings.

let space = "      I NEED MORE SPACE MAN        ";

console.log(space);

let spaceTrim = space.trim();

//Making strings case sensitive. 

let spacecase = space.trim().toLowerCase();
console.log(spacecase)
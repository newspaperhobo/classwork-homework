// alert("hello!");

function calculateTax(price) {
    price *= 1.0625;
    return price; // returns the result of the function
}

// console.log( calculateTax( ) );

function calculateArea ( length, width ) {
    return length * width;
}

// console.log( calculateArea( 5, 2 ) )

let userLength = Number(prompt(`What is the length?`));
let userWidth = Number(prompt(`What is the width?`));

console.log( calculateArea( userLength, userWidth ) );
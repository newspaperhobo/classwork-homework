let defaultNum = 2113;
console.log(defaultNum);

// declaring functions with a single parameter
// 1a
function add23(num1) {
    return num1 += 23;
}

console.log(add23(defaultNum));

// 1b
function sub77(num2) {
    return num2 -= 77;
}

console.log(sub77(defaultNum));

// 1c
function mult2(num3) {
    return num3 *= 2;
}

console.log(mult2(defaultNum));

// 1d
function div3(num4) {
    return num4 /= 3;
}

console.log(div3(defaultNum));

// 1e
function loveMath(name) {
    return name = `${name} loves doing math problems.`
}

console.log(loveMath("Kira"));

// declaring functions with two parameters - (stretch)

let defaultNum2 = 2;
let defaultNum3 = 19;

// 2a 
function multiply(cats, dogs) {
    return cats * dogs
}

console.log(multiply(defaultNum2,defaultNum3));

// 2b
function divide(squares, circles) {
    return squares / circles;
}

console.log(divide(defaultNum2,defaultNum3));

// 2c 
function subtract(cats, dogs) {
    return cats - dogs;
}

console.log(subtract(defaultNum2, defaultNum3));

// 2d 
function add(squares, circles) {
    return squares + circles
}

console.log(add(defaultNum2,defaultNum3));

// 2e
function faveMathTopic(topic, name) {
   return sentence = `${topic} is ${name}'s favorite topic in math!` 
}

console.log(faveMathTopic("Algebra", "Kira"));



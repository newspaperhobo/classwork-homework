/*  
Temperature conversion app.

Part 1
Link this script file to the HTML file. Confirm it is linked by
console logging something.



Part 2
Create 2 HTML text elements in the HTML file so that we can display
our outputs to the user.

Part 3
Ask the user for the temperature in Fahrenheit.
Convert the number to Celcius and display it back to the user.

Part 4
If the degrees in Fahrenheit is less than 69, display a message
that says "Oh that's cold!".
If the degrees in Fahrenheit is greater than or equal to 69, the message
should say "Temperature is just right!".
Otherwise the message should say "That's not a temperature".

---
Equation is: °C = 5 / 9(°F - 32).

First think about each step, write your own notes about what to do, 
and then start coding. Remember to test your code throughout the 
whole process by checking the browser and the console.

For hints, check out the hints.txt file.
*/

console.log("sup world");
let tempF = Number(prompt("What's the temp in the USA, ranger?"));
let tempC = Math.round((tempF - 32) * (5 / 9));
document.getElementById("tempC").innerHTML = `The temperature is ${tempC} degrees Celcius, chap!`
if (tempF < 69) {
    document.getElementById("tempReact").innerHTML = "Ooo, that's chilly, dawg!"
} else if (tempF >= 69) {
    document.getElementById("tempReact").innerHTML = "Wowie, it's just the right temp, buddy!"
} else {
    document.getElementById("tempReact").innerHTML = "Excuse me, that's not a temperature!"
}

// how could i change the statement to hide the tempC innerHTML when var tempC = NaN?

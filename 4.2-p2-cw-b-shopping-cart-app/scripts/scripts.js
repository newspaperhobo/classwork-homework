// alert("hello!")
let name = prompt("Enter your name, please.");
let product1 = prompt("Enter the first product you are purchasing.");
let price1 = Number(prompt("Enter the price of the first product."));
let product2;
let price2;
let produce3;
let price3;
if (isNaN(price1 && price1 == 0)) {
    alert(`That price isn't valid, please enter a new price`);
    price1 = Number(prompt("Enter the price of the first product."));
} else if (price1 > 0)  {
    product2 = prompt("Enter the second product you are purchasing.");
    price2 = Number(prompt("Enter the price of the second product."));
} else {
    let altMessage = `Something went wrong!`
    document.getElementById("grandTotal").innerHTML = altMessage;
}
if (isNaN(price2 && price2 == 0)) {
    alert(`That price isn't valid, please enter a new price`);
    price2 = Number(prompt("Enter the price of the second product."));
} else if (price2 > 0)  {
    product3 = Number(prompt("Enter the third product you are purchasing."));
    price3 = Number(prompt("Enter the price of the third product."));
} else {
    let altMessage = `Something went wrong!`
    document.getElementById("grandTotal").innerHTML = altMessage;
}
if (price1 && price2 && price3 > 0) {
    let subTotal = Number(price1) + Number(price2) + Number(price3);
    let tax = subTotal * .0625;
    let grandTotal = subTotal + tax;
    let message = `${name}, Your grand total is: $${grandTotal}.`;
    console.log(grandTotal)
    console.log(message);
    document.getElementById("grandTotal").innerHTML = message;
} else {
    let altMessage = `Something went wrong!`
    document.getElementById("grandTotal").innerHTML = altMessage;
}

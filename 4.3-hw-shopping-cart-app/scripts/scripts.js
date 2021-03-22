let name = prompt(`Enter your name:`)

function getItem() {
    return prompt(`Enter your grocery item:`);
}

console.log(getItem());

function getPrice() {
    return Number(prompt(`Enter your item price:`));
}

let price1 = getPrice();
console.log(price1);

if (isNaN(price1) || price1 <= 0) {
    console.log(price1 = getPrice());
}

console.log(getItem());

let price2 = getPrice();
console.log(price2);

if (isNaN(price2) || price2 <= 0) {
    console.log(price2 = getPrice());
}

console.log(getItem());

let price3 = getPrice();
console.log(price3);

if (isNaN(price3) || price3 <= 0) {
    console.log(price3 = getPrice());
}

if ((price1 > 0) && (price2 > 0) && (price3 > 0)) {
    function subTotal() {
        return price1 + price2 + price3;
    }
    console.log(subTotal());

    function addTax() {
        return subTotal() * .0625;
    }
    
    console.log(addTax())

    function grandTotal() {
        return (subTotal() + addTax()).toFixed(2);
    }
    console.log(grandTotal());

    let message = `${name}, your grand total is: $${grandTotal()}.`;
    console.log(grandTotal())
    console.log(message);
    document.getElementById("grandTotal").innerHTML = message;
    
    } else {
        let altMessage = `You must enter a valid prices for all items!`
        document.getElementById("grandTotal").innerHTML = altMessage;
    }


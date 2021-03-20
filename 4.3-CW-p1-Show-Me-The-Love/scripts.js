function evaluateLove() {
    let name = prompt("What is your name?");
    let color = prompt("What is your favorite color?").toLowerCase();
    if (color === "blue") {
        alert(`${name}, you picked my #1 favorite color- we would be a perfect match!`);
    }
    else if (color === "red") {
        alert(`${name}, you picked my #2 favorite color- there is some serious spark there!`);
    }
    else if (color === "purple") {
        alert(`${name}, you picked my #3 favorite color- there's definitely a lil' chemistry!`);
    }
    else if (color != "blue" || color != "red" || color != "purple") {
        alert(`Sorry, ${name}, it's not going to work out! :(`);
    }
}


// alert("hello!");

/* The Game Spot Stop is seeking customer feedback.
Read all the instructions, take 3 minutes to think about your approach, then start typing out comments or pseudocode. 

// prompt for title1 and score1
// prompt for title2 and score2
// use same function, how to store? title array, score array
- Ask user the title and their score of the 2 most recent games they played

*/
const promptUser = () => {
    let game1 = prompt("Please enter the game title");
    let game1Score = Number(prompt(`Please enter the your 1-5 score for ${game1}`));
    console.log(game1, game1Score);
    let game2 = prompt("Please enter the game title");
    let game2Score = Number(prompt(`Please enter the your 1-5 score for ${game2}`))
    console.log(game2, game2Score);
    // gameArray = [game1, game2];
    // scoreArray = [game1Score, game2Score];
    // console.log(gameArray);
    // console.log(scoreArray);

    let unorderedList = document.querySelector(".display-none");
    unorderedList.classList.remove("display-none");

    let games = document.querySelectorAll("li");
    games[0].textContent = `Title 1: ${game1} Score: ${game1Score}`;
    games[1].textContent = `Title 2: ${game2} Score: ${game2Score}`;

    if (game1Score >=4) {
        games[0].style.color = "green"
    } else {
        games[0].style.color = "red"
    }
    if (game2Score >=4) {
        games[1].style.color = "green"
    } else {
        games[1].style.color = "red"
    }

}

/*
// document.querySelector("#score1") = template literal `${title1}: ${score1} 
// document.querySelector("#score2") = template literal `${title2}: ${score2} 
- Display the game name and scores


// if then statement
// if score >= 4, add text color of green
// else, add text color of  
- If the score is 4/5 or 5/5 then the game gets a green label, otherwise it gets a red label.

- At the end: draw out DOM tree structure of your page

More Detail: 

- Create a button that fires prompt() to ask for user input. You can use an array to store the data, but you don't have to.

- Display the game name and scores: use a list element.

- Use querySelector() and/or querySelectorAll()

- The score area should be hidden by default. When you go to display the scores, show the score area.

- If the score is 4/5 or 5/5 then change the text to green, otherwise make it red.

- When drawing the DOM tree structure, start at the root element*/
////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
let styles = document.querySelector("link");
styles.setAttribute("href", "styles.css");

/* 1.2) Set the class of the image to "list-img" */
let imgClass = document.querySelector("img");
imgClass.className = "list-img";


/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

const setButtonClass = () => {
        let buttonArray = document.querySelectorAll("input");
        for (i = 0; i < buttonArray.length; i++) {
                buttonArray[i].className = "btn";
        }
}

setButtonClass();






////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
let unorderedList = document.querySelector("ul");


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */
const addItem = () => {
        // prompt user for grocery item
        groceryItem = prompt("What would you like to add to your grocery list?")
        // create li element
        li = document.createElement("li");
        // create text node
        let textNode = document.createTextNode(`${groceryItem}`);
        // append text node to li
        li.appendChild(textNode);
        // add li element to ul
        unorderedList.appendChild(li);
}





/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by removing the "display-none" class from the the total-area div
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
const getTotal = () => {
        // retrieve div with "total-area" class
        let totalAreaDiv = document.querySelector(".total-area");
        // toggle on/off display none class
        totalAreaDiv.classList.toggle("display-none");
        // retrieve length of # li's (node list)
        let listLength = document.querySelectorAll("li").length;
        // retrieve span with id "item-count"
        let itemCount = document.querySelector("#item-count");
        // set textcontent of "item-count" span to li length
        itemCount.textContent = listLength;
}






////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

const removeItem = () => {
        let removeItem = prompt("What item would you like remove?");
        let liArray = document.querySelectorAll("li");
        for (i = 0; i < liArray.length; i++) {
                if (removeItem === liArray[i].textContent) {
                        liArray[i].remove();
                }
        }
} 

// remember that querySelectorAll returns element and content, thus each pass of loop returns <li> item <li>, so .textcontent is needed to extract text for comparison
// DIRECTIONS:
// Your overall task is to create a working mini-piano that plays a note in a musical scale when the corresponding button on your keyboard is pressed down. Basically, you'll be able to start at the a button on your keyboard, which will play middle C, then move right along that same row of keyboard keys (s-k) to play the rest of the notes in the piano scale (D, E, F, G, A, B, & C). 
    // You should be able to accomplish this task by following the steps to create an event handler (1. identify the target, 2. write an event handler function, 3. write an event handler to tie the target to the keyboard event and the event handler function).
    // Your event handler function will require that the event object be passed into it as a parameter. Then, you can use the parameter representing the event object to figure out what key was pressed and play the correct mp3 sound from the sounds folder. 


// Some pseudocode is provided below.






// Step 1: Identify your target, which should the your document body.
// Grab the body element
let body = document.body;









// Step 2: Write an event handler function that will execute the following tasks:

    // When the 'a' button is pressed, the following code will run:
        // let soundC = new Audio('./sounds/piano-C.mp3');
        // soundC.play();

    // When the 's' button is pressed, the following code will run: 
        // let soundD = new Audio('./sounds/piano-D.mp3');
        // soundD.play();

    // When the 'd' button is pressed, the following code will run:
        // let soundE = new Audio('./sounds/piano-E.mp3') 
        // soundE.play();

    // When the 'f' button is pressed, the following code will run: 
        // let soundF = new Audio('./sounds/piano-F.mp3') 
        // soundF.play();

    // When the 'g' button is pressed, the following code will run:
        // let soundG = new Audio('./sounds/piano-G.mp3') 
        // soundG.play();
    
    // When the 'h' button is pressed, the following code will run:
        // let soundA = new Audio('./sounds/piano-A.mp3') 
        // soundA.play();
    
    // When the 'j' button is pressed, the following code will run:
        // let soundB = new Audio('./sounds/piano-B.mp3') 
        // soundB.play();
    
    // When the 'k' button is pressed, the following code will run:
        // let soundC2 = new Audio('./sounds/piano-C2.mp3') 
        // soundC2.play();

    // These lines of code are doing the following: creating a new Audio element in the DOM by assigning it to a variable and linking it with a specific audio file in the sounds folder, and then using that audio element's built-in method of play() to play the sound.  

const playSound = function(e) {
    if (e.key === "a") {
        let soundC = new Audio('./sounds/piano-C.mp3');
        imgArray[0].classList.add("key-image-playing")
        soundC.play();
    }
    if (e.key === "s") {
        let soundD = new Audio('./sounds/piano-D.mp3');
        imgArray[1].classList.add("key-image-playing")
        soundD.play();
    }
    if (e.key === "d") {
        let soundE = new Audio('./sounds/piano-E.mp3');
        imgArray[2].classList.add("key-image-playing")
        soundE.play();
    }
    if (e.key === "f") {
        let soundF = new Audio('./sounds/piano-F.mp3');
        imgArray[3].classList.add("key-image-playing")
        soundF.play();
    }
    if (e.key === "g") {
        let soundG = new Audio('./sounds/piano-G.mp3');
        imgArray[4].classList.add("key-image-playing")
        soundG.play();
    }
    if (e.key === "h") {
        let soundA = new Audio('./sounds/piano-A.mp3');
        imgArray[5].classList.add("key-image-playing")
        soundA.play();
    }
    if (e.key === "j") {
        let soundB = new Audio('./sounds/piano-B.mp3');
        imgArray[6].classList.add("key-image-playing")
        soundB.play();
    }
    if (e.key === "k") {
        let soundC2 = new Audio('./sounds/piano-C2.mp3');
        imgArray[7].classList.add("key-image-playing")
        soundC2.play();
    }
}






// Step 3: Write an event listener to bind the target to a keyboard event and the event handler function. 








// BONUS: See if you can write scripts that will highlight the proper image's div when the keyboard key is pressed down and unhighlight it when the keyboard key is released. This can be done by changing the class names of the divs that contain an image in the HTML file. There is a class name and styling associated with that class name already created in the CSS file. 
    // Example: When the user presses down on the 'a' key on their computer keyboard, the image of the first key in the browser will be highlighted in yellow. When the 'a' key is released, the image will go back to having no discernable highlighting.

let imgArray = document.querySelectorAll("img");
body.addEventListener("keydown", playSound)

const removeHighlight = function() {
        let imgArray = document.querySelectorAll("img");
        for (i = 0; i < imgArray.length; i++) {
        if (imgArray[i].className === "key-image-playing") {
            imgArray[i].classList.remove("key-image-playing")
        } 
    }
}

body.addEventListener("keyup", removeHighlight)

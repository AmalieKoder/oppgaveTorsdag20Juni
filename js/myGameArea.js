// Import the updateGameArea function from updateGameArea.js
import { updateGameArea } from './updateGameArea.js';

// define an object to represent the game area
const myGameArea = {

    // Create a canvas element
    canvas: document.createElement("canvas"),

    // Define the start method to initialize the game area
    start: function () {

        // Set the canvas dimensions
        this.canvas.width = 1580;
        this.canvas.height = 225;

        // Get the 2D drawing context of the canvas
        this.context = this.canvas.getContext("2d");

        // Insert the canvas into the body of the document
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        // Initialize the frame number
        this.frameNo = 0;

        // Set up an interval to update the game area every 20 milliseconds
        this.interval = setInterval(updateGameArea, 20);

        // Add an event listener for keydown events
        window.addEventListener('keydown', function (e) {

            // Prevent the default action of the keydown event
            e.preventDefault();

            // Initialize the keys array if it dosen't exist
            myGameArea.keys = (myGameArea.keys || []);

            // Set the value of the pressed key to true
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })

        // Add an event listner for keyup event
        window.addEventListener('keyup', function (e) {

            // Set the value of the released key to false
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        });
    },

    // Define the stop method to stop the game area update
    stop: function () {

        // Clear the interval set for updating the game area
        clearInterval(this.interval);
    },

    // define the clear method to clear the canvas
    clear: function () {

        // Clear the entire canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};


// Export the myGameArea object so it can be used in other modules
export { myGameArea };

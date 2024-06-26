// Import the component function from component.js and myGameArea from myGameArea.js
import { component } from './component.js';
import { myGameArea } from './myGameArea.js';

// Declare a variable to hold the game piece
let myGamePiece;

// Define the gamePlayer function to initialize the game piece and start the game area
function gamePlayer() {
    
    // Create a new game piece using component constructor
    myGamePiece = new component(30, 30, "blue", 20, 125);

    // Start the game area
    myGameArea.start();
}

// Export the gamePlayer and myGamePiece object so it can be used in other modules
export { gamePlayer, myGamePiece };

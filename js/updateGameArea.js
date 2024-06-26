// Import the myGamePiece function from gamePlayer.js and myGameArea from myGameArea.js
import { myGamePiece } from './gamePlayer.js';
import { myGameArea } from './myGameArea.js';

// Define the updateGameArea function to update the game state
function updateGameArea() {

    // Clear the game area (canvas) to prepare for the next frame
    myGameArea.clear();

    // Reset the horizontal and vertical speeds of the game piece to 0
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;

     // Check if the E key (key code 8) is pressed
     if (myGameArea.keys && myGameArea.keys[69]) { 
        //myGamePiece.bounce = 0.6; myGamePiece.gravaty = 0.5
        myGamePiece.speedY = -15;
    }

    // Check if the A key (key code 65) is pressed
    if (myGameArea.keys && myGameArea.keys[65]) { myGamePiece.speedX = -1; }

    // Check if the D key (key code 68) is pressed
    if (myGameArea.keys && myGameArea.keys[68]) { myGamePiece.speedX = 1; }

    // Check if the left arrow key (key code 65) is pressed
    if (myGameArea.keys && myGameArea.keys[37]) { myGamePiece.speedX = -1; }

    // Check if the right arrow key (key code 68) is pressed
    if (myGameArea.keys && myGameArea.keys[39]) { myGamePiece.speedX = 1; }
 

    // Update the position of the gaem piece based on its speed
    myGamePiece.newPos();

    // Draw the game piece on the game area (canvas)
    myGamePiece.update();
}

// Export the updateGameArea object so it can be used in other modules
export { updateGameArea };


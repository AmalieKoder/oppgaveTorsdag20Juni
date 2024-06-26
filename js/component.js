// Import the myGameArea function from myGameArea.js
import { myGameArea } from './myGameArea.js';

// Define the component function with parameters for width, height, color, x, y, and type
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.gravaty = 0.1;
    this.gravatySpeed = 0;
    this.bounce = 0.1;
    this.x = x;
    this.y = y;

    // Define the update method to draw the componet on the canvas
    this.update = function () {
        const ctx = myGameArea.context;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = color;
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    };

    // Define the newPos method to update the component's position based on its speed
    this.newPos = function () {
        //this.x += this.speedX;
        //this.y += this.speedY;
        this.gravatySpeed += this.gravaty;
        this.x = (this.x + this.speedX + 1580) % 1580; 
        this.y = this.y + this.speedY + this.gravatySpeed
        if (this.y < 15) this.y = 15;
        this.hitButtom();
    };
    // Define the hitButtom to update the component's position based on its gravatySpeed
    this.hitButtom = function() {
        let rockbuttom = myGameArea.canvas.height - this.height;
        if (this.y > rockbuttom) {
            this.y = rockbuttom;
            this.gravatySpeed = -(this.gravatySpeed * this.bounce);
            
        }
    }
}

// Export the component object so it can be used in other modules
export { component };

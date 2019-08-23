var gravityAcceleration = 1;
var ballArray = [];
function setup() {
    createCanvas(720, 480);
}
function draw() {
    background(25);
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].move();
        ballArray[i].display();
    }
}
function mouseReleased() {
    ballArray.push(new Ball(mouseX, mouseY));
}
function Ball(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.diameter = 50;
    this.speed = 0;
    this.move = function () {
        this.y += this.speed;
        if (this.y >= (height - this.diameter / 2)) {
            this.y = height - this.diameter / 2;
            this.speed = -0.9 * this.speed;
        } else {
            this.speed += gravityAcceleration;
        }
    }
    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}
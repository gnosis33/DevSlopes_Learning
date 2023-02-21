let height = 1000
let width = 1000

let bubble;
const bubbles = []

function mousePressed() {
    let r = random(10, 100);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);

}

function setup() {
    createCanvas(height, width)
 //   bubble = new Bubble();
    for(let i = 0; i < 50; i++) {
        let newbubble = new Bubble(random(width), random(height), random(10,100));
        bubbles.push(newbubble);
    
    }

}

function draw() {
    background(0);
 //   bubble.shell();
//    bubble.move();
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].shell();
        bubbles[i].move(random(random(-2,-0.1), random(0.1,2)), random(random(-2,-0.1), random(0.1,2))); 
        bubbles[i].color();  
    }

}


class Bubble {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.red = map(x, 0, height, 0, 255);
        this.g = map(mouseX + mouseY, 0, height + width, 0, 255);
        this.b = map(y, 0, width, 0, 255);       
    }

    color() {
        this.red = map(this.x, 0, height, 0, 255);
        this.g = map(mouseX + mouseY, 0, height + width, 0, 255);
        this.b = map(this.y, 0, width, 0, 255);
    }

    move(velocityX, velocityY) {
        this.x = this.x + velocityX;
        this.y = this.y + velocityY;
        
        //this.shell();
    }

    shell() {
        stroke(this.red, this.g, this.b);
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, this.r);
    }

}

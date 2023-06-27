class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 20;
        this.h = 20;
        this.xspeed = 0;
        this.yspeed = 0;
        this.increment = 5;
    }s

    display() {
        fill("yellow");
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        this.x += this.xspeed;
        this.xspeed = 0;
        this.y += this.yspeed;
        this.yspeed = 0;
    }

    moveLeft() {
        this.xspeed = -this.increment;
    }

    moveRight() {
        this.xspeed = this.increment;
    }

    moveUp() {
        this.yspeed = -this.increment;
    }

    moveDown() {
        this.yspeed = this.increment;
    }
}
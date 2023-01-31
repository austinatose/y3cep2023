class Ball {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r;
        this.velocity = createVector(random(-20, 20), random(-20, 20));
    }

    show() {
        stroke(0);
        ellipse(this.pos.x, this.pos.y, this.r);
    }

    update() {
        this.pos.add(this.velocity);
    }

    checkWall() {
        if (this.pos.x > width - this.r || this.pos.x < this.r) {
            this.velocity.x *= -1;
        }
        if (this.pos.y > height - this.r || this.pos.y < this.r) {
            this.velocity.y *= -1;
        }
    }

    display() {
        this.show();
        this.update();
        this.checkWall();
    }
}
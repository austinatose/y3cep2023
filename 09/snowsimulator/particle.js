class Particle {
    constructor(x, y) {
        //Starting position of ball
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        this.vel.add(this.acc);
        constrain(this.vel.x, -1, 1);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(accel) {
        this.acc.add(accel);
    }

    show() {
        stroke(0, 65);
        strokeWeight(1);
        circle(this.pos.x, this.pos.y, 10);
    }

    checkEdges() {
        if (this.pos.y > height) {
            this.pos.y = 0;
        }
        if (this.pos.x > width) {
            this.pos.x = 0;
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
        }
    }
}
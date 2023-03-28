class Particle {
    constructor(x, y) {
        //Starting position of ball
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(accel) {
        this.acc.add(accel);
    }

    applyGravity() {
        this.acc.y += 0.1;
    }

    show() {
        stroke(0, 65);
        strokeWeight(1);
        circle(this.pos.x, this.pos.y, 10);
    }
}
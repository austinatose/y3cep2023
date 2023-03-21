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

    applyForce(vel) {
        this.pos.add(vel);
    }

    move(vectors) {
        let x = floor(this.pos.x / 20);
        let y = floor(this.pos.y / 20);
        let index = x + y * 20;
        let v = vectors[index];
        this.applyForce(v);
    }

    show() {
        stroke(0, 65);
        strokeWeight(1);
        point(this.pos.x, this.pos.y);
    }

    edges() {
        constrain(this.pos.x, 0, width);
        constrain(this.pos.y, 0, height);
    }
}
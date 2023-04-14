class Skateboard {
    constructor(x, m) {
      this.mass = m;
      this.position = createVector(x, 0);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.width = this.mass * 16;
      this.height = this.mass * 16 * 2;
    }
  
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
  
    display() {
      stroke(0);
  
      fill(184, 184, 37);
      strokeWeight(1);
      ellipse(
        this.position.x,
        this.position.y + this.height / 5,
        this.width / 10,
        this.height / 10
      );
      ellipse(
        this.position.x + this.width,
        this.position.y + this.height / 5,
        this.width / 10,
        this.height / 10
      );
      ellipse(
        this.position.x,
        this.position.y + this.height * 0.8,
        this.width / 10,
        this.height / 10
      );
      ellipse(
        this.position.x + this.width,
        this.position.y + this.height * 0.8,
        this.width / 10,
        this.height / 10
      );
  
      fill(71, 71, 71);
      rect(this.position.x, this.position.y, this.width - 2, this.height, 30);
    }
  }
  
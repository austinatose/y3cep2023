class Balloon {
    constructor() {
      this.mass = 1;
      this.height = 100;
      this.width = 70;
      this.position = createVector(width/2, height-this.height/2-10);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
  
    // Simulates Newton's second law
    // Receive a force, divide by mass, add to acceleration
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      // Simulates Motion 101 from the Acceleration tutorial
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      // Now we make sure to clear acceleration each time
      this.acceleration.mult(0);
    }
  
    display() {
      stroke(0);
      strokeWeight(2);
      fill(255, 0, 0);
      line(this.position.x, this.position.y, this.position.x, this.position.y + this.height*2);
      ellipse(this.position.x, this.position.y, this.width, this.height);
    }
  
    checkEdges() {
      //Implement left wall
      if (this.position.x < 0 + this.width/2) {
        this.velocity.x *= -1;
      }
      //Implement right wall
      if (this.position.x > width - this.width/2) {
        this.velocity.x *= -1;
      }
      //Implement ceiling
      if (this.position.y < 0 + this.height/2) {
        this.velocity.y *= -1;
      }
    }
  }
  
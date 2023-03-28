class Car {
    constructor() {
      this.position = createVector(width / 2, height / 2);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(1000);
      this.velocity.x = max(0, this.velocity.x);
      this.position.add(this.velocity);
    }
  
    display() {
      stroke(0);
      strokeWeight(2);
      fill(255, 0, 0);
      rect(this.position.x - 52, this.position.y - 59, 60, 60);
      rect(this.position.x - 74, this.position.y - 30, 100, 31);
      fill(92, 92, 92);
      ellipse(this.position.x, this.position.y, 30, 26);
      ellipse(this.position.x - 50, this.position.y, 30, 30);
    }
  
    checkEdges() {
      if (this.position.x > width) {
        this.position.x = 0;
      } else if (this.position.x < 0) {
        this.position.x = width;
      }
    }
  }
  
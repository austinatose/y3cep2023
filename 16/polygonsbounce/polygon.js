class Polygon {
    constructor(...vertices) {
      this.position = createVector(0, 0);
      this.scale = 1;
      this.vertices = []; // points in the polygon
  
      for (let index = 0; index < vertices.length / 2; index += 1) {
        let a = index * 2;
        this.vertices[index] = createVector(vertices[a], vertices[a + 1]);
      }
  
      /* Have some extra values to make the polygons move around. */
      this.rotation = 0;
      this.direction = Math.random() * Math.PI * 2;
      this.speed = Math.random() * 2 + 1;
      this.rotational_velocity = Math.random() * 0.05 - 0.025;
    }
  
    display() {
      fill("cyan");
      beginShape();
      for (let v = 0; v < this.vertices.length; v++) {
        vertex(this.vertices[v].x, this.vertices[v].y);
      }
      endShape(CLOSE);
    }
  
    /* Move the polygon by its reference point to the specified location. This entails getting the vector between the reference point and the specified point and then moving each point in the polygon by that vector and finally setting the reference point or position to equal the specified point. */
    setPosition(x, y) {
      /* Move Polygon to particular location
         https://youtu.be/3kICmEJ-xyo?t=244 */
      let vector_x = x - this.position.x;
      let vector_y = y - this.position.y;
  
      for (let index = 0; index < this.vertices.length; index++) {
        let vertex = this.vertices[index];
  
        vertex.x += vector_x;
        vertex.y += vector_y;
      }
  
      this.position.x += vector_x;
      this.position.y += vector_y;
    }
    /* Scale the polygon to the specified size. First get the ratio between the desired scalar value and the current scale of the polygon, then get the vector between the reference point and each point in the polygon. Then set each point in the polygon equal to the reference point plus the vector multiplied by the ratio between scalar values. Finally, set the current scale to the specified scale. */
    setScale(scale) {
      /* Scale Polygon
         https://youtu.be/3kICmEJ-xyo?t=882 */
      let ratio = scale / this.scale;
  
      for (let index = 0; index < this.vertices.length; index++) {
        let vertex = this.vertices[index];
  
        let vector_x = vertex.x - this.position.x;
        let vector_y = vertex.y - this.position.y;
  
        vertex.x = vector_x * ratio + this.position.x;
        vertex.y = vector_y * ratio + this.position.y;
      }
  
      this.scale = scale;
    }
  
    /*  This just adds x and y to every point in the polygon as well as to its           position.  */
    setPositionPlus(x, y) {
      for (let index = 0; index < this.vertices.length; index++) {
        let vertex = this.vertices[index];
  
        vertex.x += x;
        vertex.y += y;
      }
  
      this.position.x += x;
      this.position.y += y;
    }
  
    update() {
      this.setPositionPlus(
        Math.cos(this.direction) * this.speed,
        Math.sin(this.direction) * this.speed
      );
  
      /*  Set each shape to rotate according to current rotation 
          and rotational_velocity  */
      this.setRotation(this.rotation + this.rotational_velocity);
    }
  
    /* Rotate the polygon to the specified value. First we get the difference between the current rotation and the desired rotation, then we get the unit sized cartesian coordinates of our rotation vector, then we loop through each vertex, we move each vertex back to the origin, we rotate by the unit vector multiplied by the length of the vector from the origin to the vertex and then we translate back to the original position. Finally we set the current rotation equal to the desired location. */
    setRotation(rotation) {
      /*  
      Rotating 2D Polygon in JS (PothOnProgramming)
          https://youtu.be/3kICmEJ-xyo?t=436      
      */
      let radians = rotation - this.rotation;
      let unit_x = Math.cos(radians);
      let unit_y = Math.sin(radians);
  
      for (let index = 0; index < this.vertices.length; index++) {
        let vertex = this.vertices[index];
  
        // Translate the vertex to the origin.
        let vector_x = vertex.x - this.position.x;
        let vector_y = vertex.y - this.position.y;
  
        vertex.x = vector_x * unit_x - vector_y * unit_y + this.position.x;
        vertex.y = vector_x * unit_y + vector_y * unit_x + this.position.y;
      }
  
      this.rotation = rotation;
    }
  
    /*  Get the y value of the point in the polygon that is farthest up 
        on the y axis. */
    getTop() {
      let vertex = this.vertices[0];
      let top = vertex.y;
  
      for (let index = 0; index < this.vertices.length; index++) {
        vertex = this.vertices[index];
  
        if (vertex.y < top) top = vertex.y;
      }
      return top;
    }
  
    /*  Get the y value of the point in the polygon that is farthest down 
        on the y axis. */
    getBottom() {
      let vertex = this.vertices[0];
      let bottom = vertex.y;
  
      for (let index = 0; index < this.vertices.length; index++) {
        vertex = this.vertices[index];
  
        if (vertex.y > bottom) bottom = vertex.y;
      }
      return bottom;
    }
  
    /*  Get the x value of the point in the polygon that is farthest left 
        on the x axis. */
    getLeft() {
      let vertex = this.vertices[0];
      let left = vertex.x;
  
      for (let index = 0; index < this.vertices.length; index++) {
        vertex = this.vertices[index];
  
        if (vertex.x < left) left = vertex.x;
      }
      return left;
    }
  
    /*  Get the x value of the point in the polygon that is farthest right 
        on the x axis. */
    getRight() {
      let vertex = this.vertices[0];
      let right = vertex.x;
  
      for (let index = 0; index < this.vertices.length; index++) {
        vertex = this.vertices[index];
  
        if (vertex.x > right) right = vertex.x;
      }
      return right;
    }
  
    displayBoundingBox() {
      noFill();
      rect(
        this.getLeft(),
        this.getTop(),
        this.getRight() - this.getLeft(),
        this.getBottom() - this.getTop()
      );
    }
  }
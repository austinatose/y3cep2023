let polygons;

function setup() {
  createCanvas(windowWidth, 400);
  polygons = [];
  //Pentagon
  polygons.push(
    new Polygon(-1, -0.5, 0, -1.5, 1, -0.5, 0.75, 0.75, -0.75, 0.75)
  );

  //Up-arrow
  polygons.push(
    new Polygon(0, -1, 1, 0, 0.5, 0, 0.5, 1, -0.5, 1, -0.5, 0, -1, 0)
  );

  //flash
  polygons.push(
    new Polygon(
      -0.25,  -1,
      -0.25,  -0.25,
          1,  -0.25,
       0.25,   1,
       0.25,   0.25,
         -1,   0.25
    )
  );

  //rect
  polygons.push(new Polygon(-1, -1, 1, -1, 1, 1, -1, 1));

  //triangle
  polygons.push(new Polygon(0, -1, 1, 1, -1, 1));

  for (let p of polygons) {
    p.setPosition(random(50, width - 50), random(50, height - 50));
    p.setScale(floor(random() * 30) + 20);
  }
}

function draw() {
  background(220);
  for (let p of polygons) {
    p.display();
    p.displayBoundingBox();
    p.update();
  }
}

function mousePressed() {
  setup();
}
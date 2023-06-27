//AABB - axis-aligned bounding box collision
let bRectX = 150;
let bRectY = 150;
let bRectW = 100;
let bRectH = 100;

let aRectX = 350;
let aRectY = 50;
let aRectW = 50;
let aRectH = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  aRectX = mouseX;
  aRectY = mouseY;

  //Cyan Rect B
  fill("cyan");
  rect(bRectX, bRectY, bRectW, bRectH);
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("B", 200, 200);

  //Rect A controlled by mouse position
  fill("yellow");
  rect(aRectX, aRectY, aRectW, aRectH);
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("A", aRectX + aRectW / 2, aRectY + aRectH / 2);

  textSize(15);
  textAlign(LEFT);
  text("A is left of B: " + ALeftB(), 250, 20);
  text("A is right of B: " + ARightB(), 250, 40);
  text("A is above B: " + AAboveB(), 250, 60);
  text("A is below B: " + ABelowB(), 250, 80);
  text("Collision: " + collide(), 250, 100);
}

function ALeftB() {
  return (mouseX + aRectW) < bRectX;
}

function ARightB() {
  return mouseX > (bRectX + bRectW);
}
function AAboveB() {
  return (mouseY + aRectH) < bRectY;
}
function ABelowB() {
  return mouseY > (bRectY + bRectH);
}
function collide(){
  return !(ALeftB() || ARightB() || AAboveB() || ABelowB());
}

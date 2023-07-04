let polygons;

function setup(){
  createCanvas(windowWidth,400);
  polygons = [];
  //Pentagon
  polygons.push(new Polygon(0, -0.25, -1, -0.5, 0, -1.5, 1, -0.5, 0.75, 0.75, -0.75, 0.75));
  
  //Up-arrow
  polygons.push(
    new Polygon(0, 0, 0, -1, 1, 0, 0.5, 0, 0.5, 1, -0.5, 1, -0.5, 0, -1, 0)
  );
  
   //flash
  polygons.push(
    new Polygon(0,0,
               -0.25,-1,
               -0.25, -0.25,
               1, -0.25,  
               0.25, 1,
               0.25, 0.25,
               -1, 0.25
    )
  );
  
  
  //rect
  polygons.push(new Polygon(0, 0, -1, -1, 1, -1, 1, 1, -1, 1));

  //triangle
  polygons.push(new Polygon(0, 0.25, 0, -1, 1, 1, -1, 1));
  
  for (let p of polygons){
    p.setPosition(random(50,width-50), random(50,height-50));
    p.setScale(floor(random() * 30) + 20);
  }
}


function draw(){
  background(220);
	for (let p of polygons){
      p.display();
      p.displayBoundingBox(); 
      p.update();
      
      //Collision with Top of Screen
      if (collideLinePoly(0,0,width,0, p.vertices)){
        p.setPositionPlus(0, -p.getTop());
        p.direction = Math.atan2(
												// reverse the polygon's direction on the y axis.
                        Math.sin(p.direction) * -1, 
                        Math.cos(p.direction)
                      );
      }
      
      //Collision with Left of Screen
      if (collideLinePoly(0, 0, 0, height, p.vertices)){
        p.setPositionPlus(-p.getLeft(), 0);
        p.direction = Math.atan2(
                        Math.sin(p.direction), 
												// reverse the polygon's direction on the x axis.
                        Math.cos(p.direction) * -1 
                      );
      }
      
      //Collision with Right of Screen
      if (collideLinePoly(width, 0, width, height, p.vertices)){
        p.setPositionPlus(width - p.getRight(), 0);
        p.direction = Math.atan2(
                        Math.sin(p.direction), 
												// reverse the polygon's direction on the x axis.
                        Math.cos(p.direction) * -1
                      );
      }
      
      
      //Collision with Bottom of Screen
      if (collideLinePoly(0, height, width, height, p.vertices)){
        p.setPositionPlus(0, 0);
        p.direction = Math.atan2(
                        // reverse the polygon's direction on the y axis.
                        Math.sin(p.direction) * -1, 
                        Math.cos(p.direction)
                      );
      }
	}
}

function mousePressed(){
  setup()
}
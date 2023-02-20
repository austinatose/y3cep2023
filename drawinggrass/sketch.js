function setup() {
	createCanvas(windowWidth, windowHeight);

	noStroke();
	fill(255, 255, 255);

	noLoop();
}

function draw() {
	background(40, 40, 40);

	//drawing the field
	fill(124,252,0);
	rect(0, height * 0.5, width, height * 0.5);

	drawGrass(0, height * 0.5 - 100, width, 100);
	//stroke(240, 240, 240);
	//drawGrass(0, height * 0.5 - 100, width, 100);
	//drawGrass(0, height * 0.5 - 100, width, 100);
}

function drawGrass(left, top, width, height) {

	// random grass greenness
	// stroke(random(0, 124),255,random(0, 124));

	// loop from the left to the right, one pixel per step
	for (let x = left; x < left + width; x++) {
		
		// x and y are the base of the blade of grass
		const y = top + height;

		// height of the grass
		// pick lowest of three "rolls" to bias strongly towards short blades
		// with occasional long ones
		const bladeHeight = min(
			random(50, height),
			random(50, height),
			random(50, height),
		);
		
		stroke(map(bladeHeight, 50, height, 0, 200), map(bladeHeight, 50, height, 200, 255), map(bladeHeight, 50, height, 0, 200));

		// horizontal offset of top of blade relative to base
		// average two "rolls" to bias towards middle
		let bladeLean = (random(-1.5, 1.5) + random(-1.5, 1.5)) * 0.5;

		// scale lean by height so that shorter blades aren't more leany
		bladeLean = bladeLean * bladeHeight;

		// scaling factor to to taste
		bladeLean = bladeLean * 0.2;

		// draw the grass
		line(x, y, x + bladeLean, y - bladeHeight);
	}
}
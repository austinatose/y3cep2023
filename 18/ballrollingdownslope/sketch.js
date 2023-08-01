function setup() {
    // Create a canvas and turn on gravity
    new Canvas(450, 450);
    world.gravity.y = 10;

    // Turn on mouse coordinates
    mouseCoordinates();
    
    // Sets up the initial scene.
    setupScene();

    // -----> Write your code here:    
    
    
}

function draw() {
    // Sets background each frame
    clear();
    background('#e76f51');

    // Updates mouse coordinates
    coordinates.text = round(mouse.x, 1) + ', ' + round(mouse.y, 1);
}

// ######## Helper Functions Below - Don't Change ########## //

// Function that creates the sprites in the scene
function setupScene() {
    let ground = new Sprite();
    ground.width = 600;
    ground.height = 300;
    ground.y = 420;
    ground.x = 200;
    ground.rotation = 20;
    ground.color = '#543c2c';
    ground.collider = 'static'; 
}

// Function that creates the coordinates and adds them to the canvas
function mouseCoordinates() {
    coordinates = new Sprite();
    coordinates.color = 'white';
    coordinates.width = 80;
    coordinates.height = 20;
    coordinates.x = width - coordinates.width / 2 - 5;
    coordinates.y = coordinates.height / 2 + 5;
    coordinates.collider = 'none';
}
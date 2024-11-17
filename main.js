let video;

function setup() {
    // Create a canvas and attach it to the container
    let canvas = createCanvas(640, 480);
    canvas.parent('canvas-container');

    // Access the webcam
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide(); // Hide the default video element

    // Set background color
    background(255, 204, 229);
}

function draw() {
    // Display the webcam feed on the canvas
    image(video, 0, 0);

    // Add shapes to create a photo frame
    noFill();
    strokeWeight(8);
    
    // Purple rectangle frame
    stroke('#5a2d82');
    rect(20, 20, width - 40, height - 40);

    // Yellow circles at corners
    fill('#ffeb3b');
    noStroke();
    ellipse(20, 20, 40, 40); // Top-left
    ellipse(width - 20, 20, 40, 40); // Top-right
    ellipse(20, height - 20, 40, 40); // Bottom-left
    ellipse(width - 20, height - 20, 40, 40); // Bottom-right
}

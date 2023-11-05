// Global variables to store circle patterns, circle diameter, and spacing between circles
let patterns = [];
let circleDiameter;
let spacing = 35; // Define space between circles
let frameInterval = 60; // Set the frame rate for animation
let frameCount = 0;


// Generate random colours
function randomColor() {
  return [random(255), random(255), random(255)];
}


function setup() {
  // Create a canvas to fit the full window size and set the background color
  createCanvas(windowWidth, windowHeight);
  background(randomColor());
  circleDiameter = 250; // Define a fixed diameter for the circles

  // Generate and draw each pattern on the canvas
  generatePatterns();
  drawPatterns();
}


function generatePatterns() {
  // Calculate the number of circles that can fit in the canvas width (columns) and height (rows)
  let cols = ceil(width / (circleDiameter + spacing));
  let rows = ceil(height / (circleDiameter + spacing));

  // Loop through the columns and rows to position each circle pattern
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

    // Calculate staggered offset for both x and y positions
    let offsetX = (j % 2) * spacing * 2; // Horizontal staggering
    let offsetY = (i % 2) * spacing * 2; // Vertical staggering
    // Calculate the x and y positions for each circle
    let x = i * (circleDiameter + spacing) + offsetX + circleDiameter / 2;
    let y = j * (circleDiameter + spacing) + offsetY + circleDiameter / 2;

    // Store the circle pattern attributes in the patterns array
    patterns.push({
      x: x,
      y: y,
      size: circleDiameter,
      color: randomColor(),
      alpha: 255, // Initial alpha value
      alphaDirection: -1, // Direction of transparency change, initially decreasing
      type: int(random(3)), // Randomly select one of three design types
      });
    }
  }
}


// Functions to draw each pattern
function drawPatterns() {
  for (let pattern of patterns) {
    drawOuterPearlChain(pattern);
    drawCircles(pattern);
    drawInnerShapes(pattern);
  }
}


function drawOuterPearlChain(pattern) {
  // Draw the outer "pearl necklace" chain around each circle with the new pattern
  let outerRadius = pattern.size / 2 + 14; // Define the radius for the pearl chain
  let pearls = [1, 1, 1, 0]; // Define the pattern of pearls (1 small, 1 small, 1 small, 0 large, and so on)
  let pearlIndex = 0;
  let numPearls = TWO_PI * outerRadius / 20;

  for (let i = 0; i < numPearls; i++) {
    let angle = i * TWO_PI / numPearls;
    let pearlX = pattern.x + outerRadius * cos(angle);
    let pearlY = pattern.y + outerRadius * sin(angle);

    if (pearls[pearlIndex] === 1) {
      fill(pattern.color[0], pattern.color[1], pattern.color[2], pattern.alpha); // Set the fill color for the small pearls
      ellipse(pearlX, pearlY, 10); // Draw a small pearl
    } else {
      fill(255, pattern.alpha); // Set the fill color for the large pearls
      ellipse(pearlX, pearlY, 21); // Draw a large pearl
    }

    pearlIndex = (pearlIndex + 1) % pearls.length; // Move to the next pattern element
  }
}


function drawCircles(pattern) {
  let numCircle = 4; // Number of circles
  let startRadius = 125; // Initial radius
  let radiusStep = 25; // Decreasing radius
  for(let i = 0; i < numCircle; i++){
    let radius = startRadius - radiusStep * i;
    fill(random(255), random(255), random(255), pattern.alpha); // Set the fill color for the circle
    ellipse(pattern.x, pattern.y, radius * 2);
  }
}


function drawInnerShapes(pattern) {
  let numShapes = 15;
  for(let i = 0; i < numShapes; i++) {
    let angle = TWO_PI / numShapes * i;

    for(let j = 0; j < 4; j++){
      let shapeX = pattern.x + (pattern.size / 2 - 16 * j) * cos(angle);
      let shapeY = pattern.y + (pattern.size / 2 - 16 * j) * sin(angle);
      fill(random(255), random(255), random(255), pattern.alpha); // Set the fill color for inner shapes

      // Depending on the design type, draw either dots or rings inside each circle and arrange them neatly
      if (pattern.type === 0) {
        ellipse(shapeX, shapeY, 5);

        for(let j = 0; j < 3; j ++){
          let shapeX1 = pattern.x + (pattern.size / 5 - 18 * j) * cos(angle);
          let shapeY1 = pattern.y + (pattern.size / 5 - 18 * j) * sin(angle);
          ellipse(shapeX1, shapeY1, 8);
        }
          
      } else if(pattern.type === 1) {
        for(let j = 0; j < 5; j ++){
          let shapeX2 = pattern.x + (pattern.size / 2 * 0.6 - 12 * j) * cos(angle);
          let shapeY2 = pattern.y + (pattern.size / 2 * 0.6 - 12 * j) * sin(angle);
          ellipse(shapeX2, shapeY2, 6);
        }
        
        for(let j = 0; j < 11; j ++){
          let radius = 25 * j;
          noFill();
          stroke(random(255), random(255), random(255), pattern.alpha); // Set the stroke colour for inner shapes
          ellipse(pattern.x, pattern.y, radius);
        }

      } else if(pattern.type === 2) {
        for(let j = 0; j < 12; j ++){
          let radius = 7 * j;
          noFill();
          stroke(random(255), random(255), random(255), pattern.alpha); // Set the stroke colour for inner shapes
          ellipse(pattern.x, pattern.y, radius);
        } 
        drawSawtoothRing(pattern.x, pattern.y, pattern.size / 3, 20, pattern.size / 2 * 0.35);
      }
      stroke(0, pattern.alpha); // Restore stroke colour
    }
  }
}


function drawSawtoothRing(cx, cy, radius, teeth, toothHeight){
  let angleIncrement = TWO_PI/teeth;

  beginShape();
  for (let i = 0; i < teeth; i++) {
    let angle = i * angleIncrement;
    
    // Inner vertex
    let innerX = cx + (radius - toothHeight) * cos(angle);
    let innerY = cy + (radius - toothHeight) * sin(angle);
    vertex(innerX, innerY);
    
    // Outer vertex
    let outerX = cx + (radius + toothHeight) * cos(angle + angleIncrement / 2);
    let outerY = cy + (radius + toothHeight) * sin(angle + angleIncrement / 2);
    vertex(outerX, outerY);

    noFill(); // Set SawtoothRing to no fill
  }
  endShape(CLOSE);
}


function updatePatterns() {
  for (let pattern of patterns) {
    pattern.alpha += pattern.alphaDirection * 125; // The size of the pattern transparency change
    if (pattern.alpha >= 255) {
      pattern.alpha = 255;
      pattern.alphaDirection = -1; // Reverse direction after transparency reaches 255
    } else if (pattern.alpha <= 0) {
      pattern.alpha = 0;
      pattern.alphaDirection = 1; // Reverse direction after transparency reaches 0
    }
  }
}


function draw() {
  frameCount++;
  if (frameCount % frameInterval === 0) {
    background(randomColor());
    updatePatterns();
    drawPatterns();
  }
}


// Function to handle window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize the canvas to fit the new window size
  patterns = []; // Empty the existing pattern data

  // Regenerate the pattern based on the new canvas size
  background(randomColor());
  generatePatterns();
  drawPatterns();
}
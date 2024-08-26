let zoomFactor = 100
function setup() {
  createCanvas(800, 800);
  noiseDetail(9,.5)
  background(300);
  noLoop();
}

function draw() {
  const gridSize = 1; // Define the size of each grid cell
  loadPixels();
  for (let x=0; x <width; x += gridSize) {
    for (let y=0; y <height; y += gridSize) {
      const noiseValue = noise(x / zoomFactor, y / zoomFactor) *255
      for (let i = x; i <x + gridSize; i++) {
        for (let j = y; j <y + gridSize; j++) {
          set(i, j, color(noiseValue));
        }
      }
    }
  }
updatePixels();
  stroke(0);
  strokeWeight(.2);
  for (let x = 0; x < width; x += gridSize) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += gridSize) {
    line(0, y, width, y);
  }
}
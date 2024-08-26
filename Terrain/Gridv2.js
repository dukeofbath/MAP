// script.js
function setup() {
    // Set up the canvas
    createCanvas(500, 500);

    // Define grid size
    let cols = 10;
    let rows = 10;
    let cellWidth = width / cols;
    let cellHeight = height / rows;

    // Perlin noise parameters
    let noiseScale = 0.1;
    let noiseStrength = 255;

    // Generate and display grid
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // Calculate noise value for this grid cell
            let noiseValue = noise(x * noiseScale, y * noiseScale);

            // Map noise value to a color intensity
            let colorValue = noiseValue * noiseStrength;

            // Set fill color based on Perlin noise
            fill(colorValue);

            // Draw rectangle (grid cell)
            rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
        }
    }
}

function draw() {
    // The draw function is left empty since the grid is static and only drawn once
}

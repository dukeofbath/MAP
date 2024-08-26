function setup() {
  createCanvas(1000, 1000);
  waterTerrain = new TerrainType(0.2, 0.4, color(30, 176, 251), color(40, 255, 255));
  sandTerrain = new TerrainType(0.4, 0.5, color(215, 192, 158), color(255, 246, 193), 0.3);
  grassTerrain = new TerrainType(0.5, 0.7, color(2, 166, 155), color(118, 239, 124));
  treesTerrain = new TerrainType(0.7, 0.75, color(22, 181, 141), color(10, 145, 113), -0.5);

  // Add event listener to the canvas
  canvas.mousePressed(generateTerrain);
}

// Function to generate terrain
function generateTerrain() {
  // Clear the canvas
  background(0);

  // Generate terrain
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const noiseValue = noise(x / zoomFactor, y / zoomFactor);
      let terrainColor = color(13, 49, 100); // Default color

      for (let i = 0; i < thresholds.length; i++) {
        if (noiseValue < thresholds[i].threshold) {
          terrainColor = thresholds[i].color;
          break;
        }
      }

      set(x, y, terrainColor);
    }
  }

  updatePixels();
}
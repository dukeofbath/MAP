let zoomFactor = 100;
function setup() {
    createCanvas(1000,1000);
    background(300);
}
function draw() {
    const thresholds = [
      { threshold: 0.1, color: color(1, 134, 101) },
      { threshold: 0.2, color: color(12, 134, 21) },
      { threshold: 0.4, color: color(200, 134, 2) },
      { threshold: 0.6, color: color(0, 31, 82) },
    ];
    
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
  
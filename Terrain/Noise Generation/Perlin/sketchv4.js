let zoomFactor = 100;
function setup() {
    createCanvas(1000,1000);
    background(100);
}
function draw() {
    const thresholds = [
      { threshold: 0.1, color: color(1, 1324, 101) },
      { threshold: 0.2, color: color(12, 134, 21) },
      { threshold: 0.3, color: color(142, 13, 21) },
      { threshold: 0.4, color: color(121, 1314, 211) },
      { threshold: 0.5, color: color(200, 134, 2) },
      { threshold: 0.6, color: color(0, 3100, 82) },
      { threshold: 0.7, color: color(900, 931, 832) },
      { threshold: 0.8, color: color(1203, 3331, 82) },
      { threshold: 0.9, color: color(0, 31, 820) },
      { threshold: 1, color: color(1000, 31, 82) },
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
  
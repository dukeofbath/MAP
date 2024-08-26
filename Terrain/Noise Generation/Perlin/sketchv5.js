class TerrainType {
    constructor(minHeight, maxHeight, minColor, maxColor, lerpAdjustment = 10) {
      this.minHeight = minHeight;
      this.maxHeight = maxHeight;
      this.minColor = minColor;
      this.maxColor = maxColor;
      // An adjustment to the color lerp for the map type, this weighs the color
      // towards the min or max color.
      this.lerpAdjustment = lerpAdjustment;
    }
  }
  
  let waterTerrain;
  let sandTerrain;
  let grassTerrain;
  let treesTerrain;

let zoomFactor = 100;

////////////////////////////////CANVAS CREATION////////////////////////////
function setup() {
    createCanvas(1000,1000);

    noiseDetail(8, .5);
    waterTerrain =
    new TerrainType(0.0, 0.3, color(30, 176, 251), color(40, 255, 255));
  sandTerrain =
    new TerrainType(0.3, 0.5, color(215, 192, 158), color(255, 246, 193), 0.3);
  grassTerrain =
    new TerrainType(0.5, 0.7, color(2, 166, 155), color(118, 239, 124));
  treesTerrain =
    new TerrainType(0.7, 1, color(22, 181, 141), color(10, 145, 113), -0.5);


    
}
// FUNCTION TO GENERATE TERRAIN//
function draw() {
    const thresholds = [
        { threshold: waterTerrain.maxHeight, color: waterTerrain.maxColor },
        { threshold: sandTerrain.maxHeight, color: sandTerrain.maxColor },
        { threshold: grassTerrain.maxHeight, color: grassTerrain.maxColor },
        { threshold: treesTerrain.maxHeight, color: treesTerrain.maxColor },
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

  function getTerrainColor(noiseValue, mapType) {

    const normalized = 
    normalize(noiseValue, mapType.minHeight, mapType.maxHeight);

    return lerpColor(mapType.minColor, mapType.maxColor, normalized + mapType.lerpAdjustment);
  }
    function normalize(value, min, max) {
        if (value > max) {
            return 1;
        }
        if (value < min) {
            return 0;
        }
        return (value - min) / (max - min);
    }

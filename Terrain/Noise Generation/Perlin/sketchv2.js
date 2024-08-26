//should generate noise that is zoomed in thanks to the zoom factor
let zoomFactor = 60;

function setup() 
{ 
  createCanvas(800, 600);
  background(300);
  noLoop();
  document.addEventListener('click', () => draw());
}
//fun part, filling in the noise and assigning values for terrain
function draw() {
  for(x = 0; x < width; x++){
    for (y = 0; y < height; y++) {
     const noiseValue = noise(x/zoomFactor,y/zoomFactor);
   
    let terrainColor;
    if (0 < noiseValue < .1) {
        terrainColor = color(1,534,301);
    }else if (.1 < noiseValue <=.2) {
        terrainColor = color(12,314,21);
    }else if (.2 < noiseValue < .4) {
        terrainColor = color(900, 134, 2);
    }else if (.5 < noiseValue <.6) {
        terrainColor = color(0,31,82);
    }
     else {
        terrainColor = color(13,49,100);
      }

    set(x, y, terrainColor);

    }
  }
 
  updatePixels();
}
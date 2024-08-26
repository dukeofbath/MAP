function setup() 
{
  createCanvas(800, 800);
  background(300);
  noLoop();
  document.addEventListener('click', () => draw());
}

function draw() {
  for(x = 0; x < width; x++){
    for (y = 0; y < height; y++) {
      set(x, y, color(250 * Math.random()))
    }
  }
 
  updatePixels();

}
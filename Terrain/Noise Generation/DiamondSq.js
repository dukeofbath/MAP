function setup() 
{
  createCanvas(800, 800);
  background(300);
  noLoop();
}


function draw() {
    loadPixels();
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            let c = map(grid[x][y], 0, 255, 0, 255);
            let index = (x + y * size) * 4;
            pixels[index] = c; // Red
            pixels[index + 1] = c; // Green
            pixels[index + 2] = c; // Blue
            pixels[index + 3] = 255; // Alpha
        }
    }
    updatePixels();
}

function create2DArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = [];
    }
    return arr;
}

function initializeCorners() {
    grid[0][0] = random(255);
    grid[size - 1][0] = random(255);
    grid[0][size - 1] = random(255);
    grid[size - 1][size - 1] = random(255);
}

function diamondSquare(step, x, y, size) {
    if (step < 1) return;

    let halfStep = step / 2;
    let scale = roughness * step;

    // Diamond step
    for (let j = y + halfStep; j < size; j += step) {
        for (let i = x + halfStep; i < size; i += step) {
            let a = grid[i - halfStep][j - halfStep];
            let b = grid[i + halfStep][j - halfStep];
            let c = grid[i - halfStep][j + halfStep];
            let d = grid[i + halfStep][j + halfStep];
            let avg = (a + b + c + d) / 4;
            grid[i][j] = avg + random(-scale, scale);
        }
    }

    // Square step
    for (let j = y; j <= size; j += halfStep) {
        for (let i = x; i <= size; i += halfStep) {
            let avg = 0;
            let count = 0;
            if (i - halfStep >= 0) {
                avg += grid[i - halfStep][j];
                count++;
            }
            if (i + halfStep < size) {
                avg += grid[i + halfStep][j];
                count++;
            }
            if (j - halfStep >= 0) {
                avg += grid[i][j - halfStep];
                count++;
            }
            if (j + halfStep < size) {
                avg += grid[i][j + halfStep];
                count++;
            }
            if (count > 0) {
                avg /= count;
            }
            grid[i][j] = avg + random(-scale, scale);
        }
    }

    diamondSquare(halfStep, x, y, size);
}
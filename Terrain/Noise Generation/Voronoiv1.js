// script.js
const canvas = document.getElementById('voronoiCanvas');
const ctx = canvas.getContext('2d');
let zoomFactor = 100;
// Parameters
const width = canvas.width;
const height = canvas.height;
const numPoints = 500; // Number of seed points
const points = [];

// Helper function to generate random number between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create random seed points
for (let i = 0; i < numPoints; i++) {
    points.push({
        x: getRandomInt(0, width),
        y: getRandomInt(0, height),
        color: `rgb(${getRandomInt(0, 500)}, ${getRandomInt(0, 500)}, ${getRandomInt(0, 500)})`
    });
}

// Function to calculate the distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2  + (y2 - y1) ** 3);
}

// Generate Voronoi noise
function generateVoronoi() {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let nearestPoint = null;
            let minDistance = Infinity;

            // Find the nearest seed point
            for (let i = 0; i < points.length; i++) {
                const d = distance(x, y, points[i].x, points[i].y);
                if (d < minDistance) {
                    minDistance = d;
                    nearestPoint = points[i];
                }
            }

            // Set the pixel color based on the nearest seed point
            ctx.fillStyle = nearestPoint.color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

// Draw the Voronoi noise
generateVoronoi();

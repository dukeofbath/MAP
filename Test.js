// randomOutline.js
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomOutline(points, radius) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const angleStep = (2 * Math.PI) / points;
    const outlinePoints = [];

    for (let i = 0; i < points; i++) {
        const angle = i * angleStep;
        const randomRadius = getRandomInt(radius * 0.5, radius); // Randomize the radius slightly
        const x = centerX + Math.cos(angle) * randomRadius;
        const y = centerY + Math.sin(angle) * randomRadius;
        outlinePoints.push({ x, y });
    }

    // Draw the outline
    ctx.beginPath();
    ctx.moveTo(outlinePoints[0].x, outlinePoints[0].y);

    for (let i = 1; i < points; i++) {
        ctx.lineTo(outlinePoints[i].x, outlinePoints[i].y);
    }

    ctx.closePath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Clear the canvas and generate a new random outline
function drawRandomOutline() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const points = getRandomInt(5, 10);  // Random number of points for the outline
    const radius = getRandomInt(50, 200); // Random radius for the shape
    generateRandomOutline(points, radius);
}

// Generate a random outline when the page loads
drawRandomOutline();

// Generate a new random outline every 2 seconds
canvas.addEventListener('click', drawRandomOutline);

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(50, 150); // Bottom-left corner
ctx.lineTo(150, 150); // Bottom-right corner
ctx.lineTo(50, 50);  // Top-left corner
ctx.closePath();
ctx.fillStyle = 'black'; // Fill with black
ctx.fill();


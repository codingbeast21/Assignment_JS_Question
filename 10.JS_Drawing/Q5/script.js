const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw face (circle)
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();

// Draw smile
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI, false);
ctx.stroke();

// Draw "Io" text
ctx.font = "20px Arial";
ctx.fillText("", 90, 70);

// Draw eyes and connecting line
ctx.beginPath();
ctx.arc(80, 90, 5, 0, Math.PI * 2); // Left eye
ctx.arc(120, 90, 5, 0, Math.PI * 2); // Right eye
ctx.moveTo(75, 90); // Move to start of line
ctx.lineTo(125, 90); // Draw line between eyes
ctx.stroke();
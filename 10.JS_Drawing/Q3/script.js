const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// Red rectangle
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
// Blue rectangle with transparency
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fillRect(75, 75, 100, 100);
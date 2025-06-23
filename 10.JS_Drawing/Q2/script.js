const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.strokeStyle = 'red';
ctx.stroke();
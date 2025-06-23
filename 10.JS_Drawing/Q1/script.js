const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw outer square (filled black)
ctx.fillStyle = 'black';
ctx.fillRect(40, 40, 120, 120); // Outer square: 120x120 at (40, 40)

// Draw second square (black border, white fill)
ctx.fillStyle = 'white';
ctx.fillRect(50, 50, 100, 100); // Inner square: 100x100 at (50, 50)
ctx.strokeStyle = 'black';
ctx.strokeRect(50, 50, 100, 100); // Black border for second square

// Draw third square (black border, white fill)
ctx.fillStyle = 'white';
ctx.fillRect(70, 70, 60, 60); // Innermost square: 60x60 at (70, 70)
ctx.strokeStyle = 'black';
ctx.strokeRect(70, 70, 60, 60); // Black border for third square
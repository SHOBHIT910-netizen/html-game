// Select Canvas and set up
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player properties
const player = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  color: 'blue',
  speed: 5,
};

// Movement keys
const keys = {};

// Event listeners for key presses
window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});
window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

// Update game state
function update() {
  if (keys['ArrowUp']) player.y -= player.speed;
  if (keys['ArrowDown']) player.y += player.speed;
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;

  // Keep player within bounds
  player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
}

// Draw everything
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height); // Draw player
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop); // Loop the game
}

// Start the game
gameLoop();

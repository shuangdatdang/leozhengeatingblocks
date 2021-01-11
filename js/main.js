// Title

// Set Canvas Size
canvasSize(800, 600);

// Main Draw Loop
requestAnimationFrame(draw);

function draw() {
  background("skyblue");

  fill("white");
  rect(50, 50, 200, 100, "fill");

  requestAnimationFrame(draw);
}
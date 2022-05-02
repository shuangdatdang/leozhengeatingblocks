// Title

// Set Canvas Size
canvasSize(800, 600);

// Main Draw Loop
window.addEventListener("load", draw);

function draw() {
  console.log("hi");

  requestAnimationFrame(draw);
}
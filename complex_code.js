/*
 * Filename: complex_code.js
 * Description: A complex and elaborate code showcasing various JavaScript concepts and techniques.
 */

// Global variables
var canvas, ctx;
var x = 0;
var y = 0;
var speed = 5;

// Helper function to create a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Object representing a shape
function Shape(x, y, color, radius) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.radius = radius;
}

// Method to draw a shape
Shape.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

// Method to move a shape
Shape.prototype.move = function () {
  this.x += Math.random() * speed - speed / 2;
  this.y += Math.random() * speed - speed / 2;
};

// Initialize canvas
function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Create and animate shapes
  var shapes = [];
  for (var i = 0; i < 100; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var color = getRandomColor();
    var radius = Math.random() * 30 + 10;
    var shape = new Shape(x, y, color, radius);
    shapes.push(shape);
  }

  function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move and draw shapes
    for (var i = 0; i < shapes.length; i++) {
      shapes[i].move();
      shapes[i].draw();
    }

    // Animation loop
    requestAnimationFrame(animate);
  }

  // Start animation
  animate();
}

// Event listener for window resizing
window.addEventListener("resize", function () {
  // Resize canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Reset shapes
  init();
});

// Bootstrap the code on page load
window.addEventListener("load", function () {
  init();
});
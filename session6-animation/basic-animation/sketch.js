var x = 0
var y = 0
var targetX = 0
var targetY = 0

function setup() {
  createCanvas(1024,768)
}

function draw() {
  background(255)
  line(x, 0, x, height)
  ellipse(x, y, 50, 50)

  var easing = 0.25
  var diffX = targetX - x
  x += diffX*easing

  var easing = 0.25
  var diffY = targetY - y
  y += diffY*easing
}

function mousePressed(){
  targetX = mouseX
  targetY = mouseY
}

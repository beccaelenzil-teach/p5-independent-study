var angle = 0;
var offset = 200;
var scalar = 100;
var speed = 0.05;
var r = 100

function setup() {
  createCanvas(900, 600)
  fill(0)
}

function draw() {
  background(255)

  var y1 = offset - sin(angle)*scalar
  var y2 = offset - sin(angle + 0.4)*scalar
  var y3 = offset - sin(angle + 0.8)*scalar

  ellipse(150, y1, r, r)
  ellipse(350, y2, r, r)
  ellipse(550, y3, r, r)

  angle += speed

}

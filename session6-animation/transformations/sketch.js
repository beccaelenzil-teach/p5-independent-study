var angle = 0;

function setup() {
  createCanvas(1024,768)
  fill(0)
}

function draw() {
  background(255)
  //translate(mouseX, mouseY)
  //rect(0, 0, 50, 50)

  push()
  translate(mouseX, mouseY)
  rotate(radians(angle))
  scale(2)
  line(-50, -50, 50, 50)
  line(50, -50, -50, 50)
  angle ++
  pop()

  noFill()
  rect(10,10, width, height)
}

function mousePressed(){


}

function setup() {
  createCanvas(1024,768)
}

function draw() {
  background(0)
  //outline
  noFill()
  stroke(255)
  strokeWeight(10)
  ellipse(width/4, height/2, 400, 400)
  ellipse(3*width/4, height/2, 400, 400)

  //pupils
  fill(255)
  leftx = map(mouseX, 0, width, width/4-50, width/4+50)
  lefty = map(mouseY, 0, height, height/2-50, height/2+50)
  rightx = map(mouseX, 0, width, 3*width/4-50, 3*width/4+50)
  righty = map(mouseY, 0, height, height/2-50, height/2+50)
  ellipse(leftx, lefty, 200, 200)
  ellipse(rightx, righty, 200, 200)

  //red dots

  rleftx = map(mouseX, 0, width, width/4-10, width/4+10)
  rlefty = map(mouseY, 0, height, height/2-10, height/2+10)
  rrightx = map(mouseX, 0, width, 3*width/4-10, 3*width/4+10)
  rrighty = map(mouseY, 0, height, height/2-10, height/2+10)
  fill(255, 0, 0)
  strokeWeight(1)
  stroke(255, 0, 0)
  ellipse(rleftx, rlefty, 10, 10)
  ellipse(rrightx, rrighty, 10, 10)

}

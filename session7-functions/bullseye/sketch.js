function setup() {
  createCanvas(900, 600)
  noLoop()
}

function draw() {
  background(255)

  for (i = 0; i<4; i++){
    var value = random(100, 350)
    var step = random(20,50)
    bullseye(100+(i*200), height/2, value, step)
  }

}

function bullseye(x, y, radius, step){

  fill(255)
  ellipse(x, y, radius, radius)

  fill(0)
  ellipse(x, y, radius - step, radius - step,)

  fill(72, 196, 253)
  ellipse(x, y, radius - step*2, radius - step*2)

  fill(255, 0, 0)
  ellipse(x, y,  radius - step*3, radius - step*3)

  fill(255, 255, 0)
  ellipse(x, y,  radius - step*4, radius - step*4)
}

var toss = false

function setup() {
  createCanvas(600, 600)
  noStroke()
}

function draw() {
  background(255)
  if (toss){
    fill(255, 0, 0)
  } else {
    fill(0)
  }
  ellipse(width/2, height/2, 50, 50)
}

function mousePressed(){
  toss = coin()
}

function coin(){
  return (random(0,100) < 50)
}

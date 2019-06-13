var scaler = 200
var m = 2
var n1 = 18
var n2 = 1
var n3 = 1

function setup() {
  createCanvas(1200, 600)
  noFill()
  stroke(255, 120)
}

function draw() {
  background(255)
  drawShape(width/2, height/2)
}

function drawShape(x,y){
  push()
  translate(x,y)

  var newscaler = scaler
  for (var s = 16; s >0, s--){
    beginShape()

    var mm = m + s
    var nn1 = n1 + s
    var nn2 = n2 + s
    var nn3 = n3 + s

    newscaler = newscaler + 0.98
    var sscaler = newscaler
  }
}

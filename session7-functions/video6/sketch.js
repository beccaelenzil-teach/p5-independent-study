var toss = false

function setup() {
  createCanvas(600, 600)
  noStroke()
}

function draw() {
  //background(255)

  var x = 200
  var y = 200
  var w = 400
  var h = 400

  if (button(x, y, x+w, y+h)){
    background(255,0,0)
  }
  else{
    background(255)
  }
  fill(0)
  rect(x, y, w, h)


  rect(width/2, height/2, 50, 50)
}


function button(left, top, right, bottom){
  return (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top)
}

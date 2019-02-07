var bgcolor = 0
var circleX = 200
var circleY = 200

function setup() {
  createCanvas(1000,600)
  strokeWeight(2)
}

function draw() {
  background(bgcolor);
  /*
  //noStroke();
  fill(255)
  diameter = 100
  ellipse(width/2, height/2, diameter, diameter)

  var d = dist(width/2, height/2, mouseX, mouseY)

  if (d < 100/2 && mouseIsPressed){
    bgcolor = 255
  }
  else{
    bgcolor = 0
  }*/
  ellipse(circleX, circleY, 100, 100)
  if (keyIsPressed){
    if (keyCode == UP_ARROW){
      circleY -=5
    }
    else if (keyCode == DOWN_ARROW){
      circleY += 5
    }
    else if (keyCode == LEFT_ARROW){
      circleX -= 5
    }
    else if (keyCode == RIGHT_ARROW){
      circleX +=5
    }
  }
}

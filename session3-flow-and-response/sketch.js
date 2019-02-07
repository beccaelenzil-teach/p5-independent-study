var isBlack = false

function setup() {
  createCanvas(1000,600)
  strokeWeight(2)
}

function draw() {
  /*background(255,10)
  fill(255)
  ellipse(mouseX, mouseY, mouseX/2, mouseY/2)
  if (mouseX < 300){
    stroke(255*mouseX/width, 0, 0)
  } else {
    stroke(0, 255*mouseX/width, 0)
  }

  if (mouseIsPressed == true ){
    //line(mouseX, mouseY, pmouseX, pmouseY)
    ellipse(mouseX, mouseY, 20, 20)
  }
  */
  if (isBlack == true){
    background(0)
  }
  else {
    background(255)
  }

  var grey = map(mouseX, 0, width, 0, 255)
  fill(grey)
  ellipse(mouseX, mouseY, 20, 20)

}

function mousePressed(){
  isBlack = !isBlack

}

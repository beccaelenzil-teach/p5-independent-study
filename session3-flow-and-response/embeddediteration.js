var state = 0
var space = 50

function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw(){
  background(255)
  strokeWeight(1)
  var density = map(mouseX, 0, width, 20, 50)

  if (state == 0){
    xpos = mouseX
    for (var x = 50; x<width; x+=density){
      for (var y = 50; y<height; y+=density){
        line(x-5, y+5, x+5, y-5)
        line(x+5, y+5, x-5, y-5)
      }
    }
  }
  else if (state == 1){
    for (var x = 50; x<width; x+=density){
      for (var y = 50; y<height; y+=density){
        line(width/2,height/2,x,y)
      }
    }
  }
  else if (state == 2){
    for (var x = 50; x<width; x+=density){
      for (var y = 50; y<height; y+=density){
        ellipse(x, y, 50, 50)
      }
    }
  }
  else if (state == 3){
    for (var x = 50; x<width; x+=density){
      strokeWeight(x/50)
      for (var y = 50; y<height; y+=density){
        ellipse(x, y, 50, 50)
      }
    }
  }
}

function mousePressed(){
  if (state < 3){
    state += 1
  }
  else{
    state = 0
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  for (var x = 50; x<width; x+=50){
    for (var y = 50; y<height; y+=50){
      line(x-5, y+5, x+5, y-5)
      line(x+5, y+5, x-5, y-5)
    }
  }

  for (var x = 50; x<width; x+=50){
    for (var y = 50; y<height; y+=50){
      line(width/2,height/2,x,y)
    }
  }
}

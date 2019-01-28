function setup() {
  createCanvas(600,600)
}

function draw() {
  for (var i = 0; i < width; i++){
    stroke(i/600*255, 0, 50)
    line(i,0,i,height)
  }
  for (var i = 0; i < height; i++){
    stroke(i/600*255, 0, 50,75)
    line(0,i,width,i)
  }


  noFill()
  for (var i = 50; i<width; i+=100){
    stroke(255, 0, i/600*255)
    ellipse(width/2, height/2, i, i)
  }

  for (var i = 0; i<width; i+=50){
    for (var j = 0; j<height; j+=50){
      stroke(abs(j-600)/600*255, 0, i/600*255)
      ellipse(i,j,20,20)
    }
  }


}

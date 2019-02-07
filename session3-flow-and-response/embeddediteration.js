function setup() {
  createCanvas(600, 600)
}

function draw() {
  for (var x = 0; x < width; x++){
    var y = 10
    //for (var y = 0; y < height; y++){
      line(x-5, y+5, x+5, y-5)
      line(x-5, y-5, x+5, y+5)
    //}
  }
}

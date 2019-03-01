var img;
var s = 266;
var center;
var draw_position_x = 0;

function preload(){
  img = loadImage("mountain.jpeg")
  console.log(img)
}

function setup(){
  createCanvas(800, 400)
  imageMode(CENTER)
  img.loadPixels()
  textFont("Source Sans Pro")
  background(0)
  stroke(255, 0, 0)
  strokeWeight(2);
  center = width/2
  background(0)
}

function draw(){

  var aspect = img.height/img.width
  imageWidth = s
  imageHeight = s*aspect

  var mx = constrain(mouseX, center-imageWidth/2, center+imageWidth/2)
  var x = map(mx, center-imageWidth/2, center+imageWidth/2, imageWidth, 0)
  x = floor(x)

  for (var y=0; y < height; y++){
    var c = img.get(x,y);
    set(draw_position_x, y, c)
  }
  updatePixels()

  fill(0)
  rect(width/2, height-imageHeight, width, height)
  image(img, mx, height-imageHeight/2, imageWidth, imageHeight)
  line(center, 0, center, height)

  line(draw_position_x, imageHeight, width/2, height - imageHeight)

  draw_position_x ++
  if (draw_position_x >= width){
    draw_position_x = 0
  }

}

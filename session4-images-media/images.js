var img;

function preload(){
  img = loadImage("mountain.jpeg")
}

function setup(){
  createCanvas(1000, 1000)
  textSize(22)
}

function draw(){
  background(255)
  var aspect = img.height / img.width
  var imageWidth = 400
  var imageHeight = imageWidth*aspect
  image(img,0, 0, imageWidth, imageHeight)

}

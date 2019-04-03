var timer = 100;
var bgColor = 0;
var nextTime = timer;

function setup() {
  createCanvas(600, 600)
  //fill(0)
}

function draw() {
  background(bgColor)
  if (millis() > nextTime){
    bgColor += 20
    nextTime = millis() + timer
  }
}

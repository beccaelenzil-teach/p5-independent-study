function setup() {
  createCanvas(900, 600)
  fly = new Bug(width/2, height/2);
  sam = new Bug(100, 100);
}

function draw() {
  //background(255)

  fly.draw()
  fly.update()

  sam.draw()
  sam.update()
}

function Bug(startX, startY){
  this.x = startX
  this.y = startY
  this.r = random(10,100)
  this.speed = random(2, 10)

  this.draw = function(){
    fill(0)
    noStroke();
    ellipse(this.x, this.y, this.r, this.r)
  }

  this.update = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed)
  }

}

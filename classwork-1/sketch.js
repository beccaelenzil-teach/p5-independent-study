function setup() {
  createCanvas(1024,768)
}

function draw() {
  background(15,35,15)

  //bottom left
  fill(225,225,150)
  ellipse(175,768,400,400)
  fill(25,225,150,75)
  ellipse(275,708,200,200)
  rect(0,500, 410, 75)
  rect(-50,430, 410, 75)

  //top left
  //triangle(10,5, 410, 5, 210, 400)
  //triangle(100,5, 410, 5, 260, 300)

  //draw_triangles(350,1.2)
  //draw_triangles(10,1)


}

function draw_triangles(x, scale){
  //top left
  fill(25,225,150,75)
  triangle(x,5, x+400, 5, x+200, scale*400)
  triangle(x+90,5, x+400, 5, x+250, scale*300)
}

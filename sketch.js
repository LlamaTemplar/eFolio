let x = 0;
let y = 0;
let radius = 90;

function setup() {
  mycanvas = createCanvas(500 , 500);
  mycanvas.parent("divcanvas");
}

function draw() {

  background(50);
  fill(225);
  circle(width/2,height/2,radius*2);

  //x = lerp(x, mouseX, .05);
  //y = lerp(y, mouseY, .05);
  x = mouseX;
  y = mouseY;

  noStroke();
  fill(247, 0, 81);
  circle(x,y,30);


}

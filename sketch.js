let x = 0;
let y = 0;
let radius = 90;
let angle = 40;

function setup() {
  mycanvas = createCanvas(500 , 500);
  mycanvas.parent("divcanvas");
  mycanvas.style('position', 'static');


}

function draw() {

  background(50);
  fill(225);
  circle(width/2,height/2,mouseY/2+10* sin(angle) + 40);
  circle(width/2,(height/2+100)*sin(mouseX)/2,mouseY/4+10* sin(angle) + 40);
  circle(mouseY/4+10,height/2-100,mouseY/4+10* sin(angle) + 40);
  circle(width/2,height/2,40);
  circle(width/2,height/2+250,300* sin(angle) + 40);
  circle(width/2-300,height/2+250,400 * sin(angle-20) + 10);

  //x = lerp(x, mouseX, .05);
  //y = lerp(y, mouseY, .05);
  x = mouseX;
  y = mouseY;

  noStroke();
  fill(247, 0, 81);
  circle(x,y, 40 * sin(angle) + 10);
  angle += .2;


}

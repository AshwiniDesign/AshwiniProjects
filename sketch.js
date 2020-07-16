
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(600,200,50,100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(300,100,120,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 }

function draw() {
  background(0,0,0);  


  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if((movingRect.x - fixedRect.x === movingRect.width/2 + fixedRect.width/2)
  || (fixedRect.x - movingRect.x === movingRect.width/2 + fixedRect.width/2))  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {

    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


   drawSprites();
}

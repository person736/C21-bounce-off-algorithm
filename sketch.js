var fixedRect, movingRect;
var a, b, c, d;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a = createSprite(100, 200, 50, 80);
  a.shapeColor = "blue";
  b = createSprite(300, 200, 50, 80);
  b.shapeColor = "yellow";
  c = createSprite(500, 200, 50, 80);
  c.shapeColor = "purple";
  d = createSprite(700, 200, 50, 80);
  d.shapeColor = "orange";
  movingRect.velocityX = 5;
fixedRect.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
 
if (istouching(b, movingRect)){
    movingRect.shapeColor = "red";
    b.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    b.shapeColor = "green";
  }
 bounceOff();
  drawSprites();
}

function istouching(o1, o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) { 

return true;
}
else {
  return false;
} 
}

function bounceOff(){
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
movingRect.velocityX = movingRect.velocityX * (-1);
fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}







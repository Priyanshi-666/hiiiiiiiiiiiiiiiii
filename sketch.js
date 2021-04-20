var rect
var sqr
function setup() {

  createCanvas(800,400);
  rect=createSprite(150,150,  100, 60);
  sqr=createSprite(200, 200, 50, 50);
  
  
}

function draw() {
  background(255,255,255); 
  rect.y=World.mouseY;
  rect.x=World.mouseX; 
  if(rect.y-sqr.y<rect.height/2+sqr.height/2 && sqr.y-rect.y<sqr.height/2+rect.height/2 &&  
    rect.x-sqr.x<rect.width/2+sqr.width/2 && sqr.x-rect.x<sqr.width/2+rect.width/2 ){
    rect.shapeColor="pink";
    sqr.shapeColor="pink";
    

  }
  else{ rect.shapeColor="lightBlue";
  sqr.shapeColor="lightBlue";}
  drawSprites();
}
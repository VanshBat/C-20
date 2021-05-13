var fixedRectangle, movingRectangle, rectangle3, rectangle4;

function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(200,200,50,80);
  fixedRectangle.shapeColor="red";
  movingRectangle=createSprite(400,200,80,30);
  movingRectangle.shapeColor="red";
  rectangle3=createSprite(300,100,50,50);
  rectangle3.shapeColor="red";
  rectangle4=createSprite(400,100,50,50);
  rectangle4.shapeColor="red";


}

function draw() {
  background(255,255,255); 
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY; 
  
  if(isTouching(movingRectangle, rectangle3)){
    movingRectangle.shapeColor="yellow";
    rectangle3.shapeColor="yellow";
  }
  else{
      rectangle3.shapeColor="red";
      movingRectangle.shapeColor="red";
  }
  
  drawSprites();
}
function isTouching(object1, object2) {
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
   return true;
    }                                                                                       
    else{
      return false;
    }

  }
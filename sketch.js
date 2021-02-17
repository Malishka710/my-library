function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(400, 200, 50, 50);
 movingrect=createSprite(600,400,80,30);
 fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
 rect1=createSprite(275,100,50,50);
 rect2=createSprite(275,700,50,50);
 rect1.shapeColor="lime";
 rect2.shapeColor="purple";
 rect1.velocityY=3;
 rect2.velocityY=-3;
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
  if(isTouching(movingrect,fixedrect))
   {
    fixedrect.shapeColor="pink";
    movingrect.shapeColor="pink";
   }
else{
  fixedrect.shapeColor="blue";
 movingrect.shapeColor="blue";
}

bounceoff(rect1,rect2);
  
  drawSprites();
}

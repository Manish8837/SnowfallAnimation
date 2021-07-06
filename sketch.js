var snowImage;
var boy, boyImg;
var boyWalk,snowMan;
var snowman;
var Snow,SnowImg;

function preload(){
snowImage=loadImage("snow1.jpg");
boyImg=loadImage("boy2.png");
snowMan=loadImage("SnowMan.png");
SnowImg = loadImage("snow5.webp");
//boyWalk=loadImage();
}
function setup() {
  createCanvas(1300,600);
  snowman = createSprite(400,350,50,50);
  snowman.addImage(snowMan);
  snowman.scale=0.4;

  boy = createSprite(1300,450, 50, 50);
  boy.addImage(boyImg);
  boy.scale=0.4;
  
  
}

function draw() {
  background(snowImage);  
  Edges = createEdgeSprites();
  boy.collide(Edges);
  text("PRESS LEFT AND RIGHT ARROW TO MOVE THE BOY",500,30);
  
  if(keyIsDown(LEFT_ARROW)){
   if(boy.x > 100){
     boy.x=boy.x-20;
   }
  
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(boy.x > 100){
      boy.x=boy.x+20;
    }
  }
  createSnow();
  drawSprites();
}
function createSnow(){
  if(frameCount%5===0){
    Snow = createSprite(random(0,1200), 0, 50, 50);
    Snow.velocityX = -1;
    Snow.velocityY = 4;
    Snow.addImage(SnowImg);
    Snow.scale = 0.1;
    }
}

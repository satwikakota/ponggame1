var dinosaur, ground, invsibleground, gravity; 
var dAnimation, gImage; 
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6; 
var cloudImg;
var obstaclegroups; 
var cloudgroups; 
var score=0; 
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  dAnimation=loadAnimation("trex0.png","trex1.png", "trex2.png")
  gImage=loadImage("grnd.png"); 
   obstacle1=loadImage("obstacle1.png"); 
  obstacle2=loadImage("obstacle2.png"); 
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstical5.png");
  obstacle6=loadImage("obstical6.png");
  cloudImg=loadImage("Cloud.png"); 
 
} 
function setup() {
  createCanvas(600, 200);
  dinosaur=createSprite(50,160,0,0); 
  dinosaur.addAnimation("danimation", dAnimation); 
  dinosaur.scale=0.5; 
  ground=createSprite(300,180,600,5); 
  ground.addImage("gimage",gImage); 
  ground.x=ground.width/2; 
  ground.velocityX=-2;
  invisibleground=createSprite(300,195,600,5);
  invisibleground.visible=false;
  gravity=0.5; 
  obstaclegroup=new Group(); 
  cloudgroup=new Group(); 
  
}


function draw() {
  background(180);
   //if(gameState==PLAY){
  if(keyDown("space") && dinosaur.y >= 140.5){
      dinosaur.velocityY=-10;
    }
  dinosaur.velocityY=dinosaur.velocityY+gravity; 
  if(ground.x <0){
      ground.x=ground.width/2;
  }
  dinosaur.collide(invisibleground); 
  score=Math.round(getFrameRate()/60)+ score; 
  text("Score: " + score, 522,21);   
  text(mouseX+","+mouseY,mouseX,mouseY); 
  spawnClouds(); 
  spawnObstacles(); 
     //if
  // } 
  drawSprites(); 
}
function spawnClouds(){
  var remainder=frameCount % 60;
  if(remainder==0){
    var cloud=createSprite(600,100,0,0);
    cloud.addImage("cloud",cloudImg);
    cloud.velocityX=-2;
    cloud.y=Math.round(random(80,120));
    dinosaur.depth=cloud.depth+1;
    cloud.lifetime=300;
    cloudgroup.add(cloud);
  }
}
function spawnObstacles(){
  var remainder=frameCount % 60;
  if(remainder==0){
    var rand=Math.round(random(1,6));
    var obstacle=createSprite(600,160,0,0);
    switch(rand){
      case 1: obstacle.addImage("obstacle1",  obstacle1); 
      break; 
      case 2: obstacle.addImage("obstacle2", obstacle2); 
      break; 
      case 3: obstacle.addImage("obstacle3", obstacle3); 
      break; 
      case 4: obstacle.addImage("obstacle4", obstacle4); 
      break; 
      case 5: obstacle.addImage("obstacle5", obstacle5); 
      break; 
      case 6: obstacle.addImage("obstacle6", obstacle6); 
      break; 
      default: break; 
    }
    obstacle.scale=0.5;
    obstacle.velocityX=-(4+score/100);
    obstacle.lifetime=300;
    obstaclegroup.add(obstacle);
  }
}
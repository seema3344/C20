var laser1 , laser2 , laser3 , laser4 , ;


function setup() {
//creating laser1
var laser1 = createSprite(300,399,200,5);
laser1.shapeColor = "red";
 
 laser1.velocityY = -5;

//creating laser2
var laser2 = createSprite(100,1,200,5);
laser2.shapeColor ="red";

laser2.velocityY = 5;

var laser3 = createSprite(0,100,5,200);
laser3.shapeColor = "red";

laser3.velocityX = 5;

var laser4 = createSprite(398,100,5,200);
laser4.shapeColor = "red";

laser4.velocityX = -5;

//creating thief
var thief = createSprite(11,390,20,20);
thief.shapeColor = "blue";
//creating treasure
var treasure = createSprite(400,0,0.5,0.5);
}

playSound("sound://category_hits/vibrant_game_shimmering_hit_1.mp3", true);




function draw() {
  
  background(rgb(10, 255, 150));
  fill("yellow");
  stroke("blue");
  strokeWeight(4);
  
shape(390, 0, 380, 10, 390, 20, 400, 10);

  
  createEdgeSprites();
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  laser3.bounceOff(edges);
  laser4.bounceOff(edges);
  thief.bounceOff(edges);
  
  
 if (thief.isTouching(laser1)||thief.isTouching(laser2) ||thief.isTouching(laser3) ||thief.isTouching(laser4))  
{
  fill(0);
  stroke(0);
  textSize(40);
  text("THIEF IS CAUGHT", 30, 200);
  laser1.setVelocity(0,0); 
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  laser4.setVelocity(0,0);
  thief.setVelocity(0,0);
  playSound("sound://category_alerts/airy_bell_notification.mp3",false)
  
}
  
    if (thief.isTouching(treasure)) 
{ fill(0);
  stroke(0);
  textSize(40);
  text("THIEF WON", 80,200);
  laser1.setVelocity(0,0); 
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  laser4.setVelocity(0,0);
  thief.setVelocity(0,0);
  playSound("sound://category_pop/bamboo_pop_v2_notification4.mp3")
  
  }
  
  if(thief.isTouching(laser1))
  {
    stopSound("sound://category_hits/vibrant_game_shimmering_hit_1.mp3",false);
    
  }
  
  
   if(thief.isTouching(laser2))
  {
    stopSound("sound://category_hits/vibrant_game_shimmering_hit_1.mp3",false);
    
  }
  
   if(thief.isTouching(laser3))
  {
    stopSound("sound://category_hits/vibrant_game_shimmering_hit_1.mp3",false);
    
  }
  
   if(thief.isTouching(laser4))
  {
    stopSound("sound://category_hits/vibrant_game_shimmering_hit_1.mp3",false);
    
  }
  
  
    if(keyDown(UP_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = -4;
  }
  
   if (keyDown(DOWN_ARROW)) {
    thief.velocityX = 0;
    thief.velocityY = 4;
  }
  
   if (keyDown(RIGHT_ARROW)) {
   thief.velocityX = 4;
   thief.velocityY = 0; 
  }
  
   if (keyDown(LEFT_ARROW)) {
   thief.velocityX = -4;
   thief.velocityY = 0;    
}


   if(thief.isTouching(laser1)|| thief.isTouching(laser2) ||thief.isTouching(laser3) ||thief.isTouching(laser4))
{   
   thief.velocityX = 0;
   thief.velocityY = 0;
}  

 if(thief.isTouching(treasure))
{   
   thief.velocityX = 0;
   thief.velocityY = 0;
} 


  drawSprites();

 }



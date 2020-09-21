var wall , thickness;
var bullet , speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 30);
  bullet.shapeColor = "white";
  wall = createSprite(1250,200,thickness,400);
  wall.shapeColor = color("pink");

  speed = random(223,322);
  weight = random(30,52);
thickness = random(22,83);



  
  bullet.velocityX = speed;
  
}

function draw() {
  background(0); 
  if(hascollided(bullet,wall)){
    bullet.velocityX= 0;
  damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  
  if( damage>10){
  wall.shapeColor = color(255,0,0);
  }
  if(damage<10 ){
  wall.shapeColor = color(0,255,0);
  }
  
  }

  drawSprites();
}

function hascollided(o1,o2){
bulletRightEdge = o1.x+o1.width; 
wallLeftEdge = o2.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}

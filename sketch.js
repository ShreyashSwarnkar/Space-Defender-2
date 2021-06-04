const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImg
var earthSpaceship, javisSpaceship;
var javisSpaceshipBullets, EarthSpaceshipBullets;
var javisG, earthBulletG;

function preload(){
  //backgroundImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(windowWidth-0,windowHeight-0);

  engine = Engine.create();
  world = engine.world;

  earthSpaceship = createSprite(windowWidth/2-0,windowHeight-50,50,50); 

  javisG = new Group();
  earthBulletG = new Group();
}

function draw() {
  background("yellow");

  Engine.update(engine);

  earthSpaceship.display();
 
  spawnjavisSpaceship();
  spawnEarthSpaceshipBullets()

  if(keyDown("right_arrow")){
    earthSpaceship.x = earthSpaceship.x+20;
    console.log(earthSpaceship.x);
  }
  if(keyDown("left_arrow")){
    earthSpaceship.x = earthSpaceship.x-20;
    console.log(earthSpaceship.x);
  }

  if(earthBulletG.isTouching(javisG)){
    earthBulletG.destroy();
    javisG.destroy();
  }
  drawSprites();
}

function spawnjavisSpaceship(){
  if(frameCount%60 === 0){
    javisSpaceship = createSprite(200,160,50,50);
    javisSpaceship.position.x = Math.round(random(200,800));
   //javisSpaceship.position.y = Math.round(random(160,800));
  javisSpaceship.velocityY = 5;
    javisSpaceship.lifetime = 160;
    javisG.add(javisSpaceship);
  }

}

function spawnEarthSpaceshipBullets(){
  if(frameCount%60 === 0){
    EarthSpaceshipBullets = createSprite(windowWidth/2,windowHeight-100,20,50);
    EarthSpaceshipBullets.x = earthSpaceship.x;
    EarthSpaceshipBullets.velocityY = -5;
    //EarthSpaceshipBullets.lifetime = 160;
    earthBulletG.add(EarthSpaceshipBullets);
    }
  }

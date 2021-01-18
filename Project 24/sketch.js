const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin,binImage;
var paper;
var ground;
var stick1, stick2, stick3;
var world, engine;
var log1, log2,log3;

function preload(){
binImage = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 600);
bin = createSprite(1000,425,200,200);
bin.addImage(binImage);
bin.scale = 0.75

	engine = Engine.create();
	world = engine.world;

paper =new PaperBall(50,400,20);
ground = new Ground (600,550,1200, 20);

	log1=new DustBin(1000,550,200,20);
	log2=new DustBin(1090,490,20,100);
  	log3=new DustBin(910,490,20,100);
  Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
 Engine.update(engine);

  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.body.position, {x:75,y:-30 })
}
}
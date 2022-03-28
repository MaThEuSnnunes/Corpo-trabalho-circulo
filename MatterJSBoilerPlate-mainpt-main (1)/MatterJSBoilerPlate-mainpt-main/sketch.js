
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var corpo
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
var corpoopitions={
isStetic:true

}
	//Crie os Corpos Aqui.
 corpo=Bodies.circle (220,50,50,corpoopitions)
World.add(world,corpo)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(corpo.position.x,corpo.position.y,0)
  drawSprites();
 
}




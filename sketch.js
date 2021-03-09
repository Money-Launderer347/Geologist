
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
	plane = new Plane(400, 350, 800, 700);

    hammer = new Hammer(700,320,70,70);
    stone = new Stone (810, 350);
    rubber = new Rubber(810,260,300, PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
 
}




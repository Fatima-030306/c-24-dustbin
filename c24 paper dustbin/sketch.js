
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,10);
ground = new Ground(400,600,800,20);
leftSide = new Dustbin(550,620,20,100);
bottom = new Dustbin(610,660,20,100);
rightSide = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}




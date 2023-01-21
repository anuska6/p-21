
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball= Matter.Bodies.circle (250,100,20, ball_options)
	World.add (world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("red")
  ellipse(ball.position.x,ball.position.y, 20,20)
  drawSprites();
 
}




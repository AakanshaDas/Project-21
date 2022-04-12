var ball
var ground
var groundObj
var engine

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

	
Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		function hForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		  }
		  function vForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		  }
	}
}


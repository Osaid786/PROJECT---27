
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var box1;


function setup() {
	var canvas=createCanvas(800, 700);
  
  engine = Engine.create();
	world = engine.world;

     box1= new Roof(20,20,20,100);

	
  
}


function draw() {
  background(0);
  Engine.update(engine)
  
  box1.display();
 
}




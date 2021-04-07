
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobDiameter 
var startPosX,startPosY

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);

 startPosX = width/2
 startPosY = height/4+400
   
	engine = Engine.create();
	world = engine.world;

	bobDiameter = 70

	//Create the Bodies Here.


	Engine.run(engine);
	Roof = new roof(600,90,700,40)

	bobObj1 = new bob(startPosX-2*bobDiameter,startPosY,70) 
	 Rope1 = new rope(bobObj1.body,Roof.body,-bobDiameter*2,0);

	 bobObj2 = new bob(startPosX-bobDiameter,startPosY,70) 
	 Rope2 = new rope(bobObj2.body,Roof.body,-bobDiameter*1,0);

	 bobObj3 = new bob(startPosX,startPosY,70) 
	 Rope3 = new rope(bobObj3.body,Roof.body,0,0);

	 bobObj4 = new bob(startPosX+bobDiameter,startPosY,70) 
	 Rope4 = new rope(bobObj4.body,Roof.body,bobDiameter,0);

	 bobObj5 = new bob(startPosX+2*bobDiameter,startPosY,70) 
	 Rope5 = new rope(bobObj5.body,Roof.body,bobDiameter*2,0);


  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);



  Engine.update(engine);
  Roof.display();
  bobObj1.display();
  Rope1.display();

  bobObj2.display();
  Rope2.display();

  bobObj3.display();
  Rope3.display();

  bobObj4.display();
  Rope4.display();

  bobObj5.display();
  Rope5.display();

keyPressed();

 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-50})
	}
}




var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box,box1,box2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box = Bodies.rectangle(width/2,650,20,200,{isStatic:true});
	 World.add(world, box);
	 fill("red")

	 box1 = Bodies.rectangle(300,620,100,20,{isStatic:true});
	 World.add(world, box1);
	 fill("red");

	 box2 = Bodies.rectangle(500,620,100,20,{isStatic:true});
	 World.add(world,box2);
	 fill("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.width=200;
  box.height=20;
  box1.width=20;
  box1.height=100;
  box2.width=20;
  box2.height=100;
  rect(box.position.x,box.position.y,box.width,box.height);
  rect(box1.position.x,box1.position.y,box1.width,box1.height);
  rect(box2.position.x,box2.position.y,box2.width,box2.height);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}




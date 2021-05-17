var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var reddropzone1, reddropzone2, reddropzone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	reddropzone1=createSprite(301,610,10,100);
	reddropzone1.shapeColor=color("red")

	reddropzone2=createSprite(465,610,10,100);
	reddropzone2.shapeColor=color("red")

	reddropzone3=createSprite(386,655,160,10);
	reddropzone3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, packageBody);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}




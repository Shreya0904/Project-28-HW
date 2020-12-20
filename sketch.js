
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var boy
function preload()
{
boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(500,450,300,200);
ground= new Ground(400,650,800,20);
mango=new Mango(535,480,20);
stone=new Stone(67,520,20)
slingshot=new Slingshot(stone.body,{x:80, y:525});


boy=createSprite(150,580,20,20);
boy.addImage(boyImage);
boy.scale=0.1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();

  text(mouseX+","+mouseY,mouseX,mouseY)
tree.display();
ground.display();
stone.display();
mango.display();
slingshot.display();
}

detectcollision(stoneObj,mango1);

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.setPosition
	stone.body.position=lstone.body.position 

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<-Lmango.r+Lstone.r)
	{
		Matter.body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(KeyCode=== 32){
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
} 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var block1,block2,block3,block,block5,block6,block7,block8,block9,ball;
var slingshot;



function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1920,1080);
  

  console.debug(Ground);

  stand=new Ground (830,555,880,10)
  stand2=new Ground(830,395,660,10)
  stand3=new Ground(830,255,250,10)
  stand4=new Ground(200,430,50,10);

  

  block1=new Box(830,195,50,50);
  block2=new Box(700,335,50,50);
  block3=new Box(830,335,50,50);
  block4=new Box(960,335,50,50);
  block5=new Box(540,495,50,50);
  block6=new Box(700,495,50,50);
  block7=new Box(830,495,50,50);
  block8=new Box(960,495,50,50);
  block9=new Box(1090,495,50,50);

  ball=new Player(200,250,50)

  slingShot = new SlingShot(ball.body,{x:200,y:250});
}

function draw() {
  background(0,205,0); 
  Engine.update(engine);
  
  stand.display()
  stand2.display()
  stand3.display()
  stand4.display();

  
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()

  ball.display()

  slingShot.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(ball.body);
  }
  
}




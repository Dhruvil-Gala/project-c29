const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var lbase,ubase;
var polygon,slingshot,polygon_img;



function preload()
{
	polygon_img=loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  

  polygon= Bodies.circle(50,200,20,{density:2});
  World.add(world,polygon);

 
	//Create the Bodies Here.
    ground= new Ground(600,580,1200,20);
    ubase = new Ground(1050,300,200,10);
    lbase= new Ground(700,400,250,10);

    box1 =new Box (700,375,30,40);
    box2 =new Box (730,375,30,40);
    box3 =new Box (760,375,30,40);
    box4 =new Box (790,375,30,40);
    box5 =new Box (670,375,30,40);
    box6 =new Box (640,375,30,40);
    box7 =new Box (610,375,30,40);

    box8  =new Box (700,335,30,40);
    box9  =new Box (730,335,30,40);
    box10 =new Box (760,335,30,40);
    box11 =new Box (670,335,30,40);
    box12 =new Box (640,335,30,40);

    box13  =new Box (700,295,30,40);
    box14  =new Box (730,295,30,40);
    box15  =new Box (670,295,30,40);

    box16  =new Box (700,255,30,40);



    box17  =new Box (1050,275,30,40);
    box18  =new Box (1080,275,30,40);
    box19 =new Box (1100,275,30,40);
    box20 =new Box (1020,275,30,40);
    box21 =new Box (990,275,30,40);

    box22  =new Box (1050,235,30,40);
    box23  =new Box (1080,235,30,40);
    box24  =new Box (1020,235,30,40);

    box25  =new Box (1050,195,30,40);


    slingshot =new Chain(this.polygon,{x:200,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(60,46,46);
  
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
 
  

  box1.display(103,209,234);
  box2.display(103,209,234);
  box3.display(103,209,234);
  box4.display(103,209,234);
  box5.display(103,209,234);
  box6.display(103,209,234);
  box7.display(103,209,234);

  box8.display(255,190,196);
  box9.display(255,190,196);
  box10.display(255,190,196);
  box11.display(255,190,196);
  box12.display(255,190,196);

  box13.display(0,228,208);
  box14.display(0,228,208);
  box15.display(0,228,208);

  box16.display(128,125,120);





  box17.display(103,209,234);
  box18.display(103,209,234);
  box19.display(103,209,234);
  box20.display(103,209,234);
  box21.display(103,209,234);

  box22.display(0,228,208);
  box23.display(0,228,208);
  box24.display(0,228,208);

  box25.display(255,190,196);

  slingshot.display();

  ground.display();
  lbase.display();
  ubase.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY});
}


function mouseReleased(){
  
    slingshot.fly();
}


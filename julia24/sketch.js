const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var ground;
var pedra;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    plane = new Plane(500,20,50)
    hammer = new Hammer(200,100,120,10);
    rubber=new Rubber(300,200,30,20);
    pedra=new Pedra(700.320,70,70);

    var ground_options={
        isStatic:true
    }

    ground=Bodies.rectangle(100,595,1200,10,ground_options);
    World.add(world,ground);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    pedra.display();

    rect(ground.position.x,ground.position.y,12000,10);

    
 
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg
var snowflake = []
function preload() {
  
  backgroundImg = loadImage("snow2.jpg");
}
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  Engine.update(engine)
  background(backgroundImg);  

  if(frameCount%60 === 0) {
    snowflake.push(new Snowflakes(random(1,1100),random(1,400),10,10))
    
  }
  for (var a = 0; a < snowflake.length; a++) {
    snowflake[a].display();
  }
  
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var bg ,ice=[]
var maxSnow=100;

function preload(){
bg=loadImage("snow2.jpg");

}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
 world=engine.World

if (frameCount % 275 === 0){
  for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350),random(0,50)));
  }
}
}

function draw() {
  Engine.update(engine);
  background(bg); 
  
  for(var i = 0;i <maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
  }
  drawSprites();
}
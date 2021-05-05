const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
var snow;
var max = 100;
var arr = [];

function preload(){

 bg = loadImage("snow3.jpg");
 


}


function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);

  for(var i = 0;i<max;i++){
    arr.push(new Snow(random(0,800),random(0,400),5)); 
  }



}

function draw() {
  background(bg);  

  Engine.update(engine);
 
  for(var i = 0;i<max;i++){
    arr[i].display();
  }
  
}
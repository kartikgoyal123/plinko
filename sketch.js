const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var division = [];
var particle = [];
var plinkos = [];

var divisionheight=300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,height,480,20);

}

function draw() {
  background(0);  
  
 for (var k = 0; k <=width;k = k + 80) {
    division.push(new Division(k, height-divisionheight/2,10,divisionheight));
 }

 for (var j = 40; j <=width;j = j + 50) {
  plinkos.push(new Plinkos(j,75));
}
 for (var j = 15; j <=width-10;j = j + 50) {
  plinkos.push(new Plinkos(j,175));
}
 for (var j = 40; j <=width-20;j = j + 50) {
  plinkos.push(new Plinkos(j,275));
}
 for (var j = 15; j <=width-30;j = j + 50) {
  plinkos.push(new Plinkos(j,375));
}
  
  Engine.update(engine);

  ground.display();

  for (var k = 0; k < division.length; k++ ){

    division[k].display();
  }
  for (var j = 0; j < division.length; j++ ){

    particle[j].display();
  }
}
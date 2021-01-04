const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var score =0;
var division = [];
var particle = [];
var plinkos = [];

var divisionHeight=300;



function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  
 for (var k = 0; k <=width;k = k + 80) {
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
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
}
function draw() {
  background("black");
  textSize(20) 
  
  Engine.update(engine);

  ground.display();

  for (var k = 0; k < plinkos.length; k++ ){

    plinkos[k].display();
  }
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
  for (var j = 0; j < particle.length; j++ ){

    particle[j].display();
  }
  for (var k = 0; k < division.length; k++) {
     
    division[k].display();
  }
}
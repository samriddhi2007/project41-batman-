const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
  man = loadImage("batman.jpg")
}  


function setup(){
    createCanvas(600,400);
    createSprite(400, 200, 50, 50);
    var drops = []
    var maxDrops = 100
    dog = createSprite(300,400,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.15
}

function draw(){
    for(var i=0;i<maxDrops;i++){
        drops.push(new createDrop(random(0,400),random(0,400)))
    }
   
}   


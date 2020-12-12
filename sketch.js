var a,b



function setup() {
  createCanvas(800,500);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(300, 250, 30, 30);
  a.shapeColor="Lime";
  b.shapeColor="Lime";
  
}

function draw() {
  background(255,255,255);  
  a.x=mouseX;
  a.y=mouseY;
  console.log(a.x-b.x);
  drawSprites();

  if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<b.width/2+a.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<b.height/2+a.height/2 ){
     a.shapeColor="Red"
b.shapeColor="Red";


              
  }
  


}
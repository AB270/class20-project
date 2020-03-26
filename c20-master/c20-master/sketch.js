var ab

function setup(){
  ab=createSprite(400,300,20,20);
  createCanvas(1200,1200);
}


function draw(){
background("black");
ab.x=mouseX;
 if(ab.x>600) {
  background("blue");
}
if(ab.x>800) {
  background("yellow");
}
drawSprites();  
}
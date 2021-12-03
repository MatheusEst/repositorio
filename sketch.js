var caixa;
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200);
}

function draw() 
{
  if(keyDown(RIGHT)){
    caixa.x +=1
  }
  background(30);
  drawSprites();
}





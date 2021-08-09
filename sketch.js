var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
if (garden.x < 0) {
  garden.x = garden.width/2
}
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,2));
  if (frameCount %80 == 0){
    if(select_sprites == 1){
      spawnApples ()
      
    }
    else if (select_sprites==2){
      spawnOranges()
      oranges = createSprite(random())
      orange.addImage(orangeImg)
      orange.velocityY=3
       orange.lifetime=150
    }
    else{
      spawnRed()
      Red = createSprite(random())
      Red.addImage(orangeImg)
      Red.velocityY=3
       Red.lifetime=150
    }
  }


  drawSprites();
}





function spawnApples (){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.07
  apple.velocityY=3
  apple.lifetime=150
}
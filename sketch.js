var pacman,pacmanImage,pacmanUpImage,pacmanDownImage,pacmanLeftImage;
var barrier1,barrier2,barrier3,barrier4,barrier5;
function preload(){
  pacmanImage =  loadAnimation("images/pacman1.png","images/pacman2.png");
  pacmanDownImage = loadAnimation("images/pacman3.png","images/pacmandown1.png");
  pacmanUpImage = loadAnimation("images/pacmanup1.png","images/pacmanup2.png");
  pacmanLeftImage = loadAnimation("images/pacmanleft1.png","images/pacmanleft2.png");
}
function setup(){
    createCanvas(600,400);

    pacman = createSprite(200,200,40,40);
    pacman.addAnimation("pacmanImage",pacmanImage);
    createBarriers();

}
function draw(){
    background(0,0,255);
    text(mouseX+","+mouseY,mouseX,mouseY);
    drawSprites();
    
}
function createBarriers(){

  barrier1 = createSprite(300,200,10,100);
  barrier1 = createSprite(100,210,10,100);
  barrier1 = createSprite(130,258,70,10);

}
function keyPressed(){
  //left arrow = 37, right  39, up = 38, down = 40
  if(keyCode === 37){
    pacman.velocityX = -3;
    pacman.velocityY = 0;
    pacman.addAnimation("pacmanLeftImage",pacmanLeftImage);
    pacman.changeAnimation("pacmanLeftImage",pacmanLeftImage);
  }
  if(keyCode === 39){
    pacman.velocityX = 3;
    pacman.velocityY = 0;
    pacman.addAnimation("pacmanImage",pacmanImage);
    pacman.changeAnimation("pacmanImage",pacmanImage);
  }
  if(keyCode === 38){
    pacman.velocityY = -3;
    pacman.velocityX = 0;
    pacman.addAnimation("pacmanUpImage",pacmanUpImage);
    pacman.changeAnimation("pacmanUpImage",pacmanUpImage);
  }
  if(keyCode === 40){
    pacman.velocityY = 1;
    pacman.velocityX = 0;
    pacman.addAnimation("pacmanDownImage",pacmanDownImage);
    pacman.changeAnimation("pacmanDownImage",pacmanDownImage);
  }

}
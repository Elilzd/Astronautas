var issImg, iss;
var sleepImg, sleep;
var moveImg_1, moveImg_2, move1, move2;
var gymImg_1, gymImg_2, gymImg_3, gymImg_4, gym1, gym2, gym3, gym4;
var eatImg_1, eatImg_2, eat_1, eat_2;
var drinkImg_1, drinkImg_2, drink_1, drink_2; 
var brushImg, brush;
var bathImg_1, bathImg_2, bath_1, bath_2; 
var instrustruccionesImg, instrustrucciones;
var text;
var astronaut;


function preload(){
  issImg = loadImage("iss.png");
  sleepImg = loadImage("sleep.png");
  moveImg_1 = loadImage("move1.png");
  moveImg_2 = loadImage("move.png");
  gymImg_1 = loadImage("gym1.png");
  gymImg_2 = loadImage("gym2.png");
  gymImg_3 = loadImage("gym11.png");
  gymImg_4 = loadImage("gym12.png");
  eatImg_1 = loadImage("eat1.png");
  eatImg_2 = loadImage("eat2.png");
  drinkImg_1 = loadImage("drink1.png");
  drinkImg_2 = loadImage("drink2.png");
  brushImg = loadImage("brush.png");
  bathImg_1 = loadImage("bath1.png");
  bathImg_2 = loadImage("bath2.png");
  instrustruccionesImg = loadImage("instructions.png");
}

function setup() {
  createCanvas(800,600);
  iss = createSprite(380,300);
  iss.addImage("iss", issImg);
  iss.scale = 0.18;

  astronaut = createSprite(300,350);
  astronaut.addImage("sleeping", sleepImg);
  astronaut.scale = 0.15;

  instrustrucciones = createSprite(150,70);
  instrustrucciones.addImage("instructions", instrustruccionesImg);

  
}

function draw() {
  background(255,255,255);  

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath1, bath2",bathImg_1, bathImg_2);
    astronaut.changeAnimation("bath1, bath2");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat1, eat2",eatImg_1, eatImg_2);
    astronaut.changeAnimation("eat1, eat2");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym1, gym1", gymImg_1, gymImg_2);
    astronaut.changeAnimation("gym1, gym1");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("move, move1",moveImg_1, moveImg_2);
    astronaut.changeAnimation("move, move1");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }
  drawSprites();
  
}
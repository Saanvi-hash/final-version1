var player, player_img
var playerLeft_img
var basket
var o2gases = []
var co2gases = []
var sulphurgases = []
var nitrogengases = []
var score = 0 

function preload(){
  bg = loadImage("images/background.png")
  player_img = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/10.png")
  playerLeft_img = loadAnimation("images/left1.jpg","images/left2.jpg","images/left.jpg.png","images/left4.png","images/left5.png","images/left.6.png","images/left.7.png","images/left.8.png","images/left.9.png","images/left.10.png")
  basket_img = loadImage("images/basket.jpg")
}

function setup() {
  createCanvas(displayWidth - 30,displayHeight - 30);
 // o2 = new O2(200,200,50,50)
  co2 = new CO2(300,100,50,50)
  sulphur = new Sulphur(400,300,50,50)
  nitrogen = new Nitrogen(500,400,50,50)
  player = createSprite(200,350,50,50)
  player.addAnimation("girl",player_img)
  player.addAnimation("girlLeft",playerLeft_img)
  basket = createSprite(player.x,player.y+20,50,50)
  basket.addImage("basket",basket_img)
  player.scale=2
  basket.scale=0.5
}

function draw() {
  background(bg);  

  if(World.frameCount%50===0){
    var o2 = new O2(200,5,50,50)
    o2gases.push(o2)
  }

  if(World.frameCount%100===0){
    co2 = new CO2(300,5,50,50)
    co2gases.push(co2)
  }

  if(World.frameCount%150===0){
    sulphur = new Sulphur(400,5,50,50)
    sulphurgases.push(sulphur)
  }

  if(World.frameCount%200===0){
   nitrogen = new Nitrogen(500,5,50,50)
    nitrogengases.push(nitrogen)
  }

  for(var i=0;i<o2gases.length;i++){
    o2gases[i].display();
    o2gases[i].move();
    if(o2[i].hit(player)){
    o2.splice(i,1)
    score = score+1
    }
  }

  for(var i=0;i<co2gases.length;i++){
    co2gases[i].display();
    co2gases[i].move();
  }

  for(var i=0;i<sulphurgases.length;i++){
    sulphurgases[i].display();
    sulphurgases[i].move();
  }

  for(var i=0;i<nitrogengases.length;i++){
    nitrogengases[i].display();
    nitrogengases[i].move();
  }

  if(keyDown(RIGHT_ARROW)){
  player.velocityX = 2
player.changeAnimation("girl",player_img)
basket.velocityX =2
}  

 if(keyWentUp(RIGHT_ARROW)){
   basket.velocityX = 0
 }
 
  if(keyWentUp(RIGHT_ARROW)){
  player.velocityX = 0
  }


if(keyWentUp(LEFT_ARROW)){
  basket.velocityX = 0
}

  if(keyDown(LEFT_ARROW)){
  player.velocityX = -2                                   
  player.changeAnimation("girlLeft", playerLeft_img)
  basket.velocityX = -2
  }

  if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0
  }
  

  if (player.x < 0){
player.x = 100
  }



drawSprites()

fill("black")
textSize(20)
text("Score"+score,300,100)
  
}
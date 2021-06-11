var hero, house, stage1, basic1, basic2, chest;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,
wall10,wall11,wall12,wall13,wall14,
wall15,wall16,wall17,wall18,wall19,wall20,wall21;
var minecraft,rick;
var pannel;
var a,b,c,d;
var timer =100
function preload() {
  houseImage = loadImage("image/house.png");
  stage1Image = loadImage("image/coolhouse.png");
  herosteps = loadAnimation("image/leg1.png", "image/leg2.png");
  basicIMG = loadImage('image/basic1.png')
  basic2IMG = loadImage('image/basic2.png')
  pannelIMG = loadImage("image/pannel.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  stage1 = createSprite(width/2, height/2, 100, 100);
  stage1.addImage(stage1Image);
  stage1.scale = 3
  house = createSprite(width/2, height/2, 50, 50);
  house.addImage(houseImage);
  house.scale = 0.4
  hero = createSprite(displayWidth / 2, displayHeight / 2);
  hero.addAnimation("herosteps", herosteps);
  hero.setCollider("rectangle",0,0,hero.width-15,hero.height-15)
  hero.scale = 2;
  house.setCollider("rectangle", 0, 0, 350, 350);
  basic = createSprite(170, 345);
  basic.addImage("basicIMG",basicIMG);
  basic.scale = 3
  basic2 = createSprite(1370, 200);
  basic2.addImage("basic2IMG",basic2IMG);
  basic2.scale = 0.7
  chest = createSprite(372,168,30,150)
  chest.visible = false;
  minecraft = createSprite(390,585)
  minecraft.scale = 0.6
  minecraft.visible = false;
  rick = createSprite(393,330)
  rick.scale = 0.6
  rick.visible = false;
  
  
  //boundry walls
  wall1 = createSprite(333, 340, 30, 575);
  wall1.visible = false;
  wall2 = createSprite(770,70,900,30);
  wall2.visible = false;
  wall3 = createSprite(1200,340,30,575);
  wall3.visible = false;
  wall4 = createSprite(765,642,900,30);
  wall4.visible = false;

  //innerwalls
  wall5 = createSprite(710,267,800,30);
  wall5.visible = false;
  wall6 = createSprite(1166,180,30,200);
  wall6.visible = false
  wall7 = createSprite(1093,210,32,110);
  wall7.visible = false
  wall8 = createSprite(1027,132,31);
  wall8.visible = false
  wall9 = createSprite(960,202,31);
  wall9.visible = false
  wall10 = createSprite(895,138,31);
  wall10.visible = false
  wall11 = createSprite(829,205,31);
  wall11.visible = false
  wall12 = createSprite(760,170,30,30);
  wall12.visible = false
  wall13 = createSprite(695,90,30);
  wall13.visible = false
  wall14 = createSprite(695,240,30);
  wall14.visible = false
  wall15 = createSprite(625,170,30,30);
  wall15.visible = false
  wall16 = createSprite(565,90,30);
  wall16.visible = false
  wall17 = createSprite(565,240,30);
  wall17.visible = false
  wall18 = createSprite(365,98,30);
  wall18.visible = false
  wall19 = createSprite(365,238,30);
  wall19.visible = false 
  wall20 = createSprite(400,130,30,30);
  wall20.visible = false
  wall21 = createSprite(400,205,30,30);
  wall21.visible = false
}


function draw() {
  background("black");
  timer = timer - 1;
  image(pannelIMG,1245,401,260,340)
  drawSprites();
 
  fill("white")
  text(mouseX+ ","+ mouseY,mouseX,mouseY);
  hero.collide(house);  
  hero.collide(wall1);
  hero.collide(wall2);
  hero.collide(wall3);
  hero.collide(wall4);
  hero.collide(wall5);
  hero.collide(wall6);
  hero.collide(wall7);
  hero.collide(wall8);
  hero.collide(wall9);
  hero.collide(wall10);
  hero.collide(wall11);
  hero.collide(wall12);
  hero.collide(wall13);
  hero.collide(wall14);
  hero.collide(wall15);
  hero.collide(wall16);
  hero.collide(wall17);
  hero.collide(wall19);
  hero.collide(wall20);
  hero.collide(wall21);
  hero.collide(chest);
  
  console.log(timer);
  if (hero.isTouching(minecraft) ) {
   
      video1();
   
     
    
    hero.x = displayWidth / 2;
   hero.y = displayHeight / 2;
  }

  if (hero.isTouching(rick) ) {
   
    
      video4();
    
   
    hero.x = displayWidth / 2;
   hero.y = displayHeight / 2;
  }
  heroMOVE();
}


function heroMOVE() {

  if (keyDown("w")){

    hero.y=hero.y-10
  }
  if (keyDown("s")){

    hero.y=hero.y+10
  }
  if (keyDown("d")){

    hero.x=hero.x+10
  }
  if (keyDown("a")){

    hero.x=hero.x-10
  }
}
function video1() {
  
    a = createA('https://www.youtube.com/watch?v=un5jZH5n-qE', "Click me!!", "_target");
    a.position(1299, 535);
    a.style("color", "coral");
    a.style("font-size", '40px');
  
}


function video4() { 
  a = createA('https://www.youtube.com/watch?v=dQw4w9WgXcQ', "Click me!!","_target");
  a.position(1299, 535);
  a.style("color", "yellow");
  a.style("font-size", '40px');
}
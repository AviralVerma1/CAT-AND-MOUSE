var bgimg;
var cat;


function preload() {
    //load the images here
 bgimg = loadImage("images/garden.png");
 catimg1 = loadAnimation("images/cat1.png");
 mouseimg1 = loadAnimation("images/mouse1.png");
 catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
 mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 catimg3 = loadAnimation("images/cat4.png");
 mouseimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catface",catimg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("catface",mouseimg1);
    mouse.scale = 0.15;


}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
 cat.velocityX = 0;
 cat.addAnimation("catface1",catimg3);
 cat.x = 300;
 cat.scale = 0.2
 cat.changeAnimation("catface1");

 mouse.addAnimation("mouseface",mouseimg4);
 mouse.scale = 0.15;
 mouse.changeAnimation("mouseface")
 


}

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
 cat.velocityX = -5;
 cat.addAnimation("catrunning",catimg2);
 cat.changeAnimation("catrunning");
 mouse.addAnimation("mouseteasing",mouseimg2);
 mouse.changeAnimation("mouseteasing");
 mouse.frameDelay = 25;
 }
}

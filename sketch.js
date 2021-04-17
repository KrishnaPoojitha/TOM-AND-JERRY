var canvas;
var together;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
var background,backgroundImg;

function preload() {
catImg1=loadAnimation("images/cat1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
catImg3=loadAnimation("images/cat4.png");
mouseImg1=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3=loadAnimation("images/mouse4.png");
backgroundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(200,100,50,50);
    cat.addAnimation("catImg");
    cat.scale=0.2;
    mouse=createSprite(100,150,50,50);
    mouse.addAnimation("mouseImg");
    mouse.scale=0.15;

}

function draw() {

    background(backgroundImg);
    text(mouseX=','+mouseY,10,45);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2) {
        cat.velocityX=0;
        cat.addAnimation("catlastImage",catImg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catlastImage");
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
        
    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}

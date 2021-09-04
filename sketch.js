var rocket, rocketImage
var star, starGroup, starImage
var asteroid, asteroidGroup, asteroidImage
var bg, backgroundImage
var fireball, fireballImage

function preload(){
backgroundImage = loadImage("images/background.png")
rocketImage = loadImage("images/rocket.png")
starImage = loadImage("images/star.png")
fireballImage = loadImage("images/fireball.png")


}
function setup(){
createCanvas(800,600)
bg = createSprite(400,300)
bg.addImage(backgroundImage)
bg.scale = 1
bg.velocityY = 2

rocket = createSprite(100,300)
rocket.addImage(rocketImage)
rocket.scale = 0.7

star = createSprite(700,400)
star.addImage(starImage)
star.scale = 0.4


}




function draw(){
background("black")
if(bg.y>500){
    bg.y = 300
}
if(keyDown("space")){
    fireball = createSprite(200,300)
    fireball.addImage(fireballImage)
    fireball.scale = 0.1
    fireball.velocityX = 5
}
drawSprites()
}




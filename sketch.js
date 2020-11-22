var car , wall;
var speed, weight;
function setup() {
  createCanvas(800,400);
  speed = random(55,190);
  weight = random(400,1500);
  car = createSprite(40, 200, 30, 30);
  car.shapeColor = ('white');
  car.velocityX = speed;
  wall = createSprite(700, 200, 70, height/2);
  wall.shapeColor = ('purple');
  wall.debug = false;
}

function draw() {
  background("black");
  if(IsTouchinga(car,wall)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation > 180){
      car.shapeColor = 'red';
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = 'yellow';
    }
    if (deformation < 100){
      car.shapeColor = 'green';
    }
  }
  drawSprites();
}
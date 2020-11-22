function IsTouchinga(car,wall){
    if(wall.x - car.x <= wall.width/2 + car.width/2 && car.x - wall.x <= wall.width/2 + car.width/2){
        return true;
    }
    else{
        return false;
    }
}
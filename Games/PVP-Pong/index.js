// this is setting up our canvas in javascript
var canvas = document.getElementById("player-area")
var ctx = canvas.getContext("2d");


var width = canvas.width;
var height = canvas.height;

var ballSize = 20;
var ballx = 150;
var bally = 150;
var movementx = 5;
var movementy = -1;
var leftPaddleX = 25;
var leftPaddleY = 100;
var rightPaddleX = 455
var rightPaddleY = 100
var p1score = 0
var p2score = 0
var yUpSpeed = false;
var yUpSpeed2 = false;
var yDownSpeed = false;
var yDownSpeed2 = false;

document.addEventListener("keydown",keyDownHandler,
false);

function draw(){
 ctx.clearRect(0, 0, width, height)
 ctx.beginPath();
 ctx.arc(ballx, bally, 30, 0, 2 * Math.PI);
 ctx.fillStyle = "green" 
 ctx.stroke();
 ctx.fill() 
  
// move ball forever based off of its properties
  ballx += movementx
  bally += movementy
  
  if (rightPaddleY + 100 > canvas.height){
    rightPaddleY -=  30
  }
  
  
//   checking if ball goes hits right paddle 
  if (ballx + 20 > rightPaddleX && bally > rightPaddleY - 20 && bally < rightPaddleY + 120 ){
    
    movementx = -5
    
//     if ball moving horizontal and hits right paddle
     if(movementy == 0 && yDownSpeed2 == true){
//        ball moves down faster
      movementy = 9
    }
      if(movementy == 0 && yUpSpeed2 == true){
//        ball moves down faster
      movementy = -9
    }
    
//     if ball  is moving up and the paddle is moving up then move ball faster
    if(movementy < 0 && yUpSpeed2 == true){
      movementx += 3
    }
    
    
  }
//   if ball goes above top of screen
  if (bally < 0){
    movementy = +5
  }
//   if ball goes to bottom of screen
  if (bally > canvas.height){
    movementy = -5
  }
  
//  //   checks if ball hits left paddle if true changes ball direction
  if (ballx - 20 < leftPaddleX + 20 && bally > leftPaddleY && bally < leftPaddleY +120){
    movementx = 5
    if(movementy == 0 && yDownSpeed == true){
      movementy = 7
    }
   
  }
  
//   checks if player 2 scores
  if(ballx + 20 < 0){
    ballx = 250;
    bally = 200;
    movementx = -5;
    movementy = 0;
    p2score += 1;
    leftPaddleY = 150;
    rightPaddleY = 150;
    document.getElementById("score2").innerHTML = p2score ;
  }
  
  
//   checks if player 1 scores
  if(ballx - 20 > canvas.width){
//     puts ball in middle of screen
    ballx = 250;
    bally = 200;
//     changes ball moving to the right
    movementx = 5;
    movementy = 0;

//     updates teh score by 1
    p1score += 1;
    
    leftPaddleY = 150;
    rightPaddleY = 150;
    document.getElementById("score1").innerHTML = p1score ;
  }

  
  drawPaddle()
}



function drawPaddle(){
  
//   left paddle
 ctx.beginPath();
ctx.fillRect(leftPaddleX,leftPaddleY,20,100)
 ctx.fillStyle = "green" 
 ctx.stroke();
 ctx.fill() 
  
//   right paddle
 ctx.beginPath();
 ctx.fillRect(rightPaddleX,rightPaddleY,20,100)
 ctx.fillStyle = "green" 
 ctx.stroke();
 ctx.fill() 
 
}

function keyDownHandler(e) {
  // right paddle moving up using i key
 if (e.keyCode == 73) {
 rightPaddleY -= 30;
   yUpSpeed2 = true;
 }
 // }right paddle moving down using "k" key
 if (e.keyCode == 75) {
 rightPaddleY += 30;
 yDownSpeed2 = true;
 }
//    moving left paddle down pressing s key
 if (e.keyCode == 83) {
 leftPaddleY += 30;
 yDownSpeed = true;
 }
   // moving left paddle up pressing w key
 if (e.keyCode == 87) {
 leftPaddleY -= 30;
 yUpSpeed = true;
 }
}

// comment this out to pause the game
setInterval(draw,20)

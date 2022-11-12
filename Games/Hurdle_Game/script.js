var canvas = document.getElementById("Mycanvas")
var ctx = canvas.getContext('2d')
var score_number = 0
var gravity = 1

var player_x = 0
var player_y = 100
var player_width = 25

var hurdle_x = 300
var hurdle_y = 250
var hurdle_height = 50
var hurdle_movement = 1

var game_over = false;

var spacePressed = false;
var leftPressed = false;
var rightPressed = false;
var y_speed = 0
var tracker = 0
var levels = 1
var timer = 0

// listening for when key pressed or let go then activates certain function keyDownHandler or keyUpHandler
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);


function keyDownHandler(e) {
  if (e.keyCode == 32) {
    console.log("spacedown")
    spacePressed = true;
  }
  if (e.keyCode == 37) {
    console.log("moving left")
    leftPressed = true;
  }
  if (e.keyCode == 39) {
    rightPressed = true;
  }
}


function keyUpHandler(e) {
  if (e.keyCode == 32) {
    console.log("spaceup")
    spacePressed = false;
  }
  if (e.keyCode == 37) {
    leftPressed = false;
  }
  if (e.keyCode == 39) {
    rightPressed = false;
  }
}



// ----- BEGINNING MAIN GAME FUNCTION-------
function main_game() {
  
  timer += 1
  
  if (timer > 150){
  hurdle_x -= hurdle_movement
  }
  
  ctx.clearRect(0, 0, 400, 300)
  document.getElementById("score").innerHTML = score_number
  document.getElementById("level").innerHTML = levels
  
  draw_player()
  change_levels()
  update_score()
  collission()
  jumping()
  controls()
    
  
  

   //   if player is at bottom of screen or greater than turn gravity off else turn gravity on
  if (player_y + 100 > 350) {
    gravity = 0
  } else {
    gravity = 1
  }
  
  player_y += y_speed 
//   gravity always pulling down
  player_y += gravity
  
}
  
// -----END OF MAIN GAME FUNCTION-------

// -----functions for game below here-------

function draw_player(){
    //   this logic draws the player
  ctx.beginPath();
  ctx.rect(player_x, player_y, player_width, 50);
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.closePath;
  }

function jumping(){
    if (spacePressed) {
      // if player on ground make y_speed increase for jumping
    if (player_y + 100 >= 350) {
      y_speed = -4
      console.log(player_y)
    }
  }
  if (player_y < 90 ) {
    y_speed = 2
  }

  if (player_y > 250 && !spacePressed){
        y_speed = 0

  }
  }

function draw_hurdle(hx,hy,w,hh,color){
  ctx.beginPath();
  ctx.rect(hx, hy, w, hh);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath;
}
  
function change_levels(){
  if (levels < 2){
    draw_hurdle(hurdle_x,hurdle_y,50,hurdle_height,"black")
  }
  if (levels > 1 && levels < 3 ){
    draw_hurdle(hurdle_x,hurdle_y -20,50,hurdle_height +20,"green")
      // this logic draws the hurdle
  }

  if (levels > 2 && levels < 4 ){
    draw_hurdle(hurdle_x,hurdle_y -40,50,hurdle_height +40,"blue")
      // this logic draws the hurdle
  }

  if (levels > 3 && levels < 5 ){
    draw_hurdle(hurdle_x,hurdle_y -60,50,hurdle_height +60,"orange")
      // this logic draws the hurdle
  }
  
  }
  
  

function controls() {
  if (leftPressed) {
    console.log("geger")
    player_x -= 1
  }
  if (rightPressed) {
    console.log("geger")
    player_x += 1
  }
}

function update_score() {
  if (hurdle_x < 0) {
    hurdle_x = 450
    score_number += 1
    if (score_number > 3 && score_number < 5 ){
      levels += 1
    }
    if (score_number > 7 && score_number < 9 ){
      levels += 1
    }
    if (score_number > 13 && score_number < 15 ){
      levels += 1
    }
  }
}

function collission(){
    // if left side of hurdle is going past right side of player
  if (hurdle_x < player_x + player_width) {
    if (player_y + 50 > 250 && hurdle_x + 50 > player_x) {
      hurdle_movement = 0

    }
  }
  }

// main game loop
setInterval(main_game, 1)

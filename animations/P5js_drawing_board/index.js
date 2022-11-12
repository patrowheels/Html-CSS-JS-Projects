circle1 = false
square1 = false
diamond = false
rainbow_square = false

colors = ["red","orange","#FFFF00","green","blue","purple"]

function setup() {
  slider = createSlider(0, 505, 100);
  slider.position(300, 10);
  slider.style('width', '80px');
  createCanvas(600, 600);
  fill("red");
  rect(20, 20, 40, 40);
  fill("blue");
  circle(100, 40, 40, 40);
  fill("gold")
  quad(160, 10, 180, 40, 160,70, 140, 40)
  
  
  
  noStroke();
colorMode(HSB, 300);
for (let i = 210; i < 260; i++) {
  for (let j = 15; j < 70; j++) {
    stroke(i, j, 450);
    point(i, j);
  }
}
  
  
  
}

// click square to be able to draw squares
function draw() {
    textSize(32);
text('size', 400, 30);
     textSize(22);
text('rainbow', 200, 15);
  
  let val = slider.value();
  
  
  if (mouseIsPressed && mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60) {
    fill("red")
    circle1 = false
    square1 = true
    diamond = false
    rainbow_square = false

  }
    
// click circle to be able to draw circles
  if (mouseIsPressed && mouseX > 80 && mouseX < 130 && mouseY > 20 && mouseY < 60) {
    fill("blue")
    circle1 = true
    square1 = false
    diamond = false
    rainbow_square = false

  }
  
  // click diamond to be able to draw diamonds
  if (mouseIsPressed && mouseX > 130 && mouseX < 190 && mouseY > 20 && mouseY < 70) {
    fill("yellow")
    circle1 = false
    square1 = false
    diamond = true
    rainbow_square = false
  }
  
   if (mouseIsPressed && mouseX > 210 && mouseX < 250 && mouseY > 20 && mouseY < 70) {
     fill(colors[floor(random(colors.length))])
    circle1 = false
    square1 = false
    diamond = false
    rainbow_square = true
  }
  
  
//   if the circle was clicked and you press mouse down then your drawing circles / also dosent let circles above a certain point.
  if (circle1 == true && mouseY > 100 && mouseIsPressed){
  circle(mouseX, mouseY, val, val);
  }
  //   if the square was clicked and you press mouse your drawing squares.also dosent let squares above a certain point
  if (square1 == true && mouseY > 100 && mouseIsPressed){
  rect(mouseX-20, mouseY-20, val, val);
  }
  
  // if the diamond was clicked and you press mouse your drawing diamonds.Also dosent let diamonds above a certain point
  if (diamond == true && mouseY > 100 && mouseIsPressed){
  quad(mouseX, mouseY-20-val, mouseX+10+val, mouseY, mouseX,mouseY+20+val, mouseX-10-val, mouseY);
  }
  
  
   if (rainbow_square == true && mouseY > 100 && mouseIsPressed){
  mycolor = random(colors.length)
  mycolor = floor(mycolor)
  fill(colors[mycolor])
     rect(mouseX-20, mouseY-20, val, val);
  
  }

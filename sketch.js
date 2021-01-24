var divider1,divider2,divider3,divider4,divider5,divider6,divider7



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

divider1 = new Divider(400,500,10,10);



}

function draw() {
  background(255,255,255);  
  drawSprites();
  divider1.display();
}
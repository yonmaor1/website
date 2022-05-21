function setup() {
    createCanvas(420, 400);
    background(220);
}

function draw() {
  let x = width/2;
  let y = height/2;
  let r = 100;
  let text = '7:59 AM';

  //filled head
  noStroke();
  fill(255,226,226);
  ellipse(x+20,y-20,2*r);

  //hair
  stroke(100);
  strokeWeight(35);
  line((x-r/3)+5,y-r-5,(x+2*r/3)+5, y-r-5);
  stroke(40);
  line(x-r/3,y-r,x+2*r/3, y-r);

  //outline head
  noFill();
  strokeWeight(10);
  stroke(230, 168,168);
  ellipse(x, y, 2*r);

  //earrings
  fill(182);
  noStroke();
  ellipse(x-(r+10),y-40,15);
  ellipse(x-(r+6),y+10,15);

  if ((mouseX < x+r) && (mouseX > x-r) && (mouseY > y - r) && (mouseY < y + r) && !mouseIsPressed) {
      //face
      stroke(230, 168,168);
      strokeWeight(6);
      noFill();
      ellipse(x-(r/2),y-(r/2), 15, 15);
      ellipse(x+(r/3),y-(r/2), 15, 15);
      ellipse(x-r/6,y+(r/3), 30, 30);

      //clock
      //rect(width-180, height-100, 160, 80, 20);
  }
  else if ((mouseX < x+r) && (mouseX > x-r) && (mouseY > y - r) && (mouseY < y + r) && mouseIsPressed) {
      stroke(230, 168,168);
      strokeWeight(6);
      noFill();
      ellipse(x-(r/2),y-(r/2), 15, 15);
      ellipse(x+(r/3),y-(r/2), 15, 15);
      arc(x-r/6,y+(r/3), 30,15, PI+PI/6, 0-PI/6);
      stroke(40);
      strokeWeight(12);
      line(x-(r/2),y-(r/2)-15/2-15, x-(r/2)+15/2+10, y-(r/2)-10);
      line(x+(r/3),y-(r/2)-15/2-15, x+(r/3)-15/2-10,y-(r/2)-10);
  }
  else {
      stroke(230, 168,168);
      strokeWeight(6);
      noFill();
      arc(x-(r/2),y-(r/2), 15,15,0, PI);
      arc(x+(r/3),y-(r/2), 15,15,0, PI);
      arc(x-r/6,y+(r/3), 30,15,PI/6, PI-PI/6);

  }
}

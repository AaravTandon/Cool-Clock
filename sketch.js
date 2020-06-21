function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
  let hr = hour();
  let min = minute();
  let sc = second();
  
    
  
  strokeWeight(8)
  noFill();
  stroke(255,100,110);
  
  let secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);

  
    stroke(150,200,250);
   let minuteAngle = map(min,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  
    stroke(150,255,100);
  let hourAngle = map(hr %12,0,12,0,360);
  arc(0,0,260,260,0,hourAngle);
  
   push();
  rotate(secondAngle);
  stroke(255,100,110);
  line(0,0,100,0);
  pop();
  
   push();
  rotate(minuteAngle);
  stroke(150,200,250);
  line(0,0,100,0);
  pop();
  
   push();
  rotate(hourAngle);
  stroke(150,255,100);
  line(0,0,75,0);
  pop();
  
  stroke(255);
  point(0,0);
  
 // fill(255);
 // noStroke();
  //text(hr + ":" + min  + ":" + sc,10,20);
}
 
  
  
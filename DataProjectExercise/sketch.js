// Emily Wu - Data Project Exercise

function setup() {
  createCanvas(650, 500);
}

function draw() {
  // Background
  background(253);
  // Black border
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(0, 0, 650, 500);
  // Title
  stroke(79, 161, 255);
  strokeWeight(1);
  fill(79, 161, 255);
  textSize(20);
  text('Emily Wu - Data Project Exercise', 180, 50);
  text('Boba Thoughts', 257, 90);
  // Key
  textSize(15);
  stroke(0);
  strokeWeight(2);
  fill(255, 132, 79);
  rect(60, 135, 20, 20);
  strokeWeight(0.7);
  fill(0);
  text('When I crave boba', 90, 151);
  stroke(0);
  strokeWeight(2);
  fill(79, 255, 205);
  rect(240, 135, 20, 20);
  strokeWeight(0.7);
  fill(0);
  text('When I talk about boba', 270, 151);
  stroke(0);
  strokeWeight(2);
  fill(176, 79, 255);
  rect(445, 135, 20, 20);
  strokeWeight(0.7);
  fill(0);
  text('When I get boba', 475, 151);
  // Calendar box
  stroke(255, 0, 255);
  strokeWeight(3);
  noFill();
  rect(50, 200, 550, 250);
  // Calendar lines
  line(141.6667, 200, 141.6667, 450);
  line(232.8333, 200, 232.8333, 450);
  line(324, 200, 324, 450);
  line(415.1667, 200, 415.1667, 450);
  line(506.3333, 200, 506.3333, 450);
  line(50, 250, 600, 250);
  // Labels
  stroke(79, 161, 255);
  strokeWeight(1);
  fill(79, 161, 255);
  textSize(15);
  text('Fri 4/21', 72, 230);
  text('Sat 4/22', 160, 230);
  text('Sun 4/23', 248, 230);
  text('Mon 4/24', 337, 230);
  text('Tues 4/25', 427, 230);
  text('Wed 4/26', 521, 230);
  // Crave boba data
  stroke(255, 132, 79);
  strokeWeight(3);
  // Friday
  line(75, 270, 75, 300);
  line(85, 270, 85, 300);
  line(95, 270, 95, 300);
  line(85, 320, 85, 350);
  line(105, 320, 105, 350);
  // Saturday
  line(170, 270, 170, 300);
  line(180, 270, 180, 300);
  line(170, 320, 170, 350);
  // Sunday
  line(260, 270, 260, 300);
  line(290, 270, 290, 300);
  line(300, 270, 300, 300);
  line(270, 320, 270, 350);
  line(280, 320, 280, 350);
  // Monday
  line(360, 270, 360, 300);
  line(370, 270, 370, 300);
  line(380, 270, 380, 300);
  // Tuesday
  line(460, 270, 460, 300);
  line(470, 270, 470, 300);
  // Wednesday
  line(530, 270, 530, 300);
  line(550, 270, 550, 300);
  line(560, 320, 560, 350);
  line(570, 320, 570, 350);
  // Talk about boba data
  stroke(79, 255, 205);
  strokeWeight(3);
  // Friday
  line(105, 270, 105, 300);
  line(115, 270, 115, 300);
  line(75, 320, 75, 350);
  line(95, 320, 95, 350);
  // Saturday
  line(190, 270, 190, 300);
  line(200, 270, 200, 300);
  line(210, 270, 210, 300);
  line(180, 320, 180, 350);
  line(200, 320, 200, 350);
  // Sunday
  line(270, 270, 270, 300);
  line(280, 270, 280, 300);
  line(260, 320, 260, 350);
  // Monday
  line(350, 270, 350, 300);
  line(390, 270, 390, 300);
  line(350, 320, 350, 350);
  line(370, 320, 370, 350);
  // Tuesday
  line(440, 270, 440, 300);
  line(450, 270, 450, 300);
  line(480, 270, 480, 300);
  line(450, 320, 450, 350);
  line(460, 320, 460, 350);
  // Wednesday
  line(540, 270, 540, 300);
  line(560, 270, 560, 300);
  line(530, 320, 530, 350);
  line(540, 320, 540, 350);
  line(550, 320, 550, 350);
  // Get boba data
  stroke(176, 79, 255);
  strokeWeight(3);
  // Saturday
  line(190, 320, 190, 350);
  // Monday
  line(360, 320, 360, 350);
  // Tuesday
  line(440, 320, 440, 350);
  // Wednesday
  line(570, 270, 570, 300);
}
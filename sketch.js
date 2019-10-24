let noiseOffset = 0.0;
let strokeWidth = 5;

function setup(){
  //Drawing #1
  createCanvas(450,450);
  // background(250,235,215);
  background(0,71,171);
}

function draw(){
  strokeWeight(strokeWidth);
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;
  if (mouseIsPressed){
  stroke(map(mouseX, 0, 450, 0, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  }

  return false;
}

let array = [];
let checkeredPattern = 0;
let checkeredRed = 0;
let checkeredGreen = 0;
let checkeredBlue = 0;
let theGrid = []; // colors of cells in array
function setup() {
  createCanvas(400,400);
  drawChessBoard();
  noFill();
}
function draw() {
  if (mouseIsPressed) {
    checkeredPattern += 5;
    background(checkeredPattern);
    array.push([mouseX,mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0],array[i][1])
    }
    endShape();
  }
}
function keyTyped() {
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    background(255);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0],array[i][1])
    }
    endShape();
  }
  return false;
}
// function mousePressed() {
//   array = [];
//   checkeredPattern = 255;
// }
function drawChessBoard() {
  numCells = 8;
  // fillColor = 255;
  fillRed = 1;
  fillGreen = 30;
  fillBlue = 156;
  strokeWeight(0);
  let x;
  let y;
  for (let i = 0; i <= numCells; i += 1) {
    theGrid[i] = [];
    // theGrid[j] = [];
    for (let j = 0; j <= numCells; j += 1) {
      x = i * width / numCells;
      y = j * height / numCells;
      if (fillRed === 1 && fillGreen === 30 && fillBlue === 156) {
        // fillColor = 200;
        fillRed = 255;
        fillGreen = 216;
        fillBlue = 1;
        theGrid[i][j] = "Yellow";
      } else {
        fillRed = 1;
        fillGreen = 30;
        fillBlue = 156;
        theGrid[i][j] = "Blue";
      }
      fill(fillRed, fillGreen, fillBlue);
      rect(x, y, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
  console.log(theGrid);
}

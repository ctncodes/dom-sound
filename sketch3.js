let hocusPocus;
let smokeAndMirrors;

function setup() {
  noCanvas();

  hocusPocus = select('#whatsTheMagicWord');
  smokeAndMirrors = select('#Magician');
  // smokeAndMirrors.hide();

  hocusPocus.mousePressed(vanishingAct);
}

function draw() {
  background(220);
}

function vanishingAct() {
  smokeAndMirrors.show();
}

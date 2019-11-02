let abracadabra;
let escapeArtist;

function setup() {
  noCanvas();

  abracadabra = select("#whatsTheMagicWord");
  escapeArtist = select("#Magician");

  abracadabra.mousePressed(vanishingAct);
}

function draw() {
  background(220);
}

function vanishingAct() {
  escapeArtist.show();
}

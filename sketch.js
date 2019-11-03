let abracadabra;
let escapeArtist;
let poofingSound;

function preload() {
  soundFormats('mp3', 'ogg');
  poofingSound = loadSound('assets/Magical Chime Descend.mp3');
}

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
  poofingSound.setVolume(0.1);
  poofingSound.play();

  setTimeout(function() {
    escapeArtist.show();
  }, 500);
}

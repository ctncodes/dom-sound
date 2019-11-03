let abracadabra;
let escapeArtist;
let poofingSound;
let themeSong;

function preload() {
  soundFormats('mp3');
  poofingSound = loadSound("assets/Magical Chime Descend.mp3");
  themeSong = loadSound("assets/Toy Story You've Got a Friend in Me (StrideRagtime Piano).mp3");
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
    themeSong.setVolume(0.5);
    themeSong.loop();
  }, 500);
}

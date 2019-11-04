let abracadabra, boomBox, notSoFast;
let escapeArtist;
let poofingSound, themeSong;
let reverb, delay;

function preload() {
  soundFormats('mp3');
  poofingSound = loadSound("assets/Fragile!.mp3");
  themeSong = loadSound("assets/Italian Complaint.mp3");
}

function setup() {
  noCanvas();

  reverb = new p5.Reverb();
  delay = new p5.Delay();

  abracadabra = select("#whatsTheMagicWord");
  boomBox = select("#downBeat");
  notSoFast = select("#slowMo");
  escapeArtist = select("#Magician");

  abracadabra.mousePressed(vanishingAct);
  boomBox.mousePressed(function() {
    themeSong.setVolume(.1, 2);
    reverb.process(themeSong, 3, 2);
  });
  notSoFast.mousePressed(function() {
    delay.process(themeSong, .12, .7, 2300);
  });
}

function draw() {
  background(220);
}

function vanishingAct() {
  poofingSound.setVolume(2);
  poofingSound.play();
  setTimeout(function() {
    escapeArtist.show();
    themeSong.setVolume(1);
    themeSong.loop();
  }, 500);
}

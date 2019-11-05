'use strict';
let osc;
let theWave;
let popMusic;
let presto, boomBox, notSoFast;
let artist;
let poofingSound, themeSong;
let reverb, delay;

function preload() {
  soundFormats('mp3');
  poofingSound = loadSound("assets/Fragile!.mp3");
  themeSong = loadSound("assets/Italian Complaint.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');
  createSpan('Select Waveform: ');
  theWave = createSelect();
  theWave.option('sawtooth');
  theWave.option('sine');
  theWave.option('square');
  theWave.option('triangle');
  theWave.changed(function() {
    osc.setType(theWave.value());
  });

  reverb = new p5.Reverb();
  delay = new p5.Delay();

  presto = select("#whatsTheMagicWord");
  boomBox = select("#downBeat");
  notSoFast = select("#slowMo");
  artist = select("#Magician");

  presto.mousePressed(vanishingAct);
  boomBox.mousePressed(function() {
    themeSong.setVolume(.1, 2);
    reverb.process(themeSong, 3, 2);
  });
  notSoFast.mousePressed(function() {
    delay.process(themeSong, .12, .7, 2300);
  });
}

function draw() {
  popMusic = noise(frameCount/20) * 100;
  osc.freq(map(mouseX, 0, width, 60, 1200) + popMusic);
  osc.amp(map(mouseY, 0, height, .2, 0));
  // osc.amp(map(sin(frameCount/20), -1, 1, 0, .2));
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

function vanishingAct() {
  poofingSound.setVolume(2);
  poofingSound.play();
  setTimeout(function() {
    artist.show();
    themeSong.setVolume(1);
    themeSong.loop();
  }, 500);
}

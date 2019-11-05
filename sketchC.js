'use strict';
let osc, theWave, popMusic, artist;
let presto, boomBox, notSoFast;
let reverb, delay;
let disneyPixarMagic;
let solo;

function preload() {
  soundFormats('mp3');
  disneyPixarMagic = loadSound("assets/Pixar Logo.mp3");
  solo = loadSound("assets/Toy Story You've Got a Friend in Me (StrideRagtime Piano).mp3");
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

  presto.mousePressed(backGroundMusic);
  boomBox.mousePressed(function() {
    solo.setVolume(.1, 2);
    reverb.process(solo, 3, 2);
  });
  notSoFast.mousePressed(function() {
    delay.process(solo, .12, .7, 2300);
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

function backGroundMusic() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    solo.setVolume(1);
    solo.loop();
  }, 14000);
}

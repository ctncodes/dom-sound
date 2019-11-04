'use strict';
let osc;
let theWave;
let popMusic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');
  // osc.setType();
  createSpan('Select Waveform: ');
  theWave = createSelect();
  theWave.option('sawtooth');
  theWave.option('sine');
  theWave.option('square');
  theWave.option('triangle');
  theWave.changed(selectWave);
}

function draw() {
  popMusic = noise(frameCount/20) * 100;
  osc.freq(map(mouseX, 0, width, 60, 1200) + popMusic);
  // osc.amp(map(mouseY, 0, height, .2, 0));
  osc.amp(map(sin(frameCount/20), -1, 1, 0, .2));
}

function selectWave() {
  osc.setType(theWave.value());
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

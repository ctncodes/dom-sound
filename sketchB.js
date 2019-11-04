'use strict';

let osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator();
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {

}

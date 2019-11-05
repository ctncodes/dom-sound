'use strict';
let osc, theWave, popMusic, artist;
let presto, boomBox, notSoFast;
let reverb, delay;
let disneyPixarMagic;
let solo, duo, trio, quartet, quintet;

function preload() {
  soundFormats('mp3');
  disneyPixarMagic = loadSound("assets/Pixar Logo.mp3");
  solo = loadSound("assets/One Man Band - Bass 1.mp3");
  // duo = loadSound("assets/One Man Band - Bass 2.mp3");
  // trio = loadSound("assets/One Man Band - Treble 1 (ft. Bass).mp3");
  // quartet = loadSound("assets/One Man Band - Treble & Bass.mp3");
  // quintet = loadSound("assets/One Man Band - Tippy.mp3");
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

  presto = select("#aFullLengthFeatureFilm");
  boomBox = select("#downBeat");
  notSoFast = select("#slowMo");
  artist = select("#Magician");

  presto.mousePressed(toyStory1);
  // presto.mousePressed(theIncredibles2);
  // presto.mousePressed(cars3);
  // presto.mousePressed(coco4);
  // presto.mousePressed(pixarShortFilms5);
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

function toyStory1() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    solo.setVolume(1);
    solo.loop();
  }, 14000);
}

function theIncredibles2() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    duo.setVolume(1);
    duo.loop();
  }, 14000);
}

function cars3() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    trio.setVolume(1);
    trio.loop();
  }, 14000);
}

function coco4() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    quartet.setVolume(1);
    quartet.loop();
  }, 14000);
}

function pixarShortFilms5() {
  disneyPixarMagic.setVolume(2);
  disneyPixarMagic.play();
  setTimeout(function() {
    artist.show();
    quintet.setVolume(1);
    quintet.loop();
  }, 14000);
}

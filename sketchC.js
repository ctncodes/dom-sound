'use strict';
let cnv;
let volume;
let osc;
let img;
let theWave;
let popMusic;
let disneyPixarMagic;
let ars;
let arte;
let artista;
let artiste;
let artist;
let presto
let boomBox;
let notSoFast;
let reverb;
let delay;
let solo
let duo;
let trio;
let quartet;
let quintet;
let fft, sound, filter;

function preload() {
  soundFormats('mp3');
  img = loadImage('assets/one-man-band-disneyscreencaps.com-452.jpg');
  disneyPixarMagic = loadSound("assets/Pixar Logo.mp3");
  solo = loadSound("assets/Kingdom Hearts 3 OST - Toy Box Theme.mp3");
  // solo = loadSound("assets/One Man Band - Bass 1.mp3");
  duo = loadSound("assets/Zigeunerweisen by Pablo de Sarasate.mp3");
  // trio = loadSound("assets/One Man Band - Treble 1 (ft. Bass).mp3");
  // quartet = loadSound("assets/One Man Band - Treble & Bass.mp3");
  // quintet = loadSound("assets/One Man Band - Tippy.mp3");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  volume = new p5.Amplitude();
  cnv.mouseClicked(function() {
    if (duo.isPlaying()) {
      duo.stop();
    } else {
      duo.play();
    }
  });

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
  artist = select("#toyStory");
  // artiste = select("#Magician");
  // artista = select("#Magician");
  // arte = select("#Magician");
  // ars = select("#Magician");

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

  fill(255, 40, 255);
  filter = new p5.BandPass();
  sound = new p5.Noise();
  sound.disconnect();
  sound.connect(filter);
  sound.start();
  fft = new p5.FFT();
}

function draw() {
  popMusic = noise(frameCount/20) * 100;
  osc.freq(map(mouseX, 0, width, 60, 1200) + popMusic);
  osc.amp(map(mouseY, 0, height, .2, 0));
  // osc.amp(map(sin(frameCount/20), -1, 1, 0, .2));

  background(img);
  fill(random(255),random(255),random(255));
  let level = volume.getLevel();
  let size = map(level, 0, 1, 0, 2000);
  ellipse(width/2, height/2, size, size);

  let freq = map(mouseX, 0, width, 20, 10000);
  filter.freq(freq);
  filter.res(50);
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h);
  }
  isMouseOverCanvas();
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

function isMouseOverCanvas() {
  let mX = mouseX, mY = mouseY;
  if (mX > 0 && mX < width && mY < height && mY > 0) {
    sound.amp(0.5, 0.2);
  } else {
    sound.amp(0, 0.2);
  }
}

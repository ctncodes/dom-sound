// // Starting code from Kyle McDonald https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
// Note CLMTracker library added in HTML

// Q: Can you add code that asks you to center face in screen?

let capture;
let tracker;
// let w = windowWidth;
// let h = windowHeight;
let threeRingCircus;
let volume;
let cnv;
let faceCentered = false;
let osc;
let selection;

function preload() {
  soundFormats('mp3');
  threeRingCircus = loadSound("assets/Three Ring Government.mp3");
}

function setup() {
  osc = new p5.Oscillator('square');
  // osc.setType();
  selection = createSpan('Select Waveform: ');
  // selection.parent("#unpredictable");
  // theWave = createSelect();
  // theWave.option('sawtooth');
  // theWave.option('sine');
  // theWave.option('square');
  // theWave.option('triangle');
  // theWave.changed(function() {
  //   osc.setType(theWave.value());
  // });
  // theWave.parent("#unpredictable");
  capture = createCapture({
    audio: false,
    video: {
      width: windowWidth,
      height: windowHeight
    }
  }, function() {
    console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  cnv = createCanvas(windowWidth, windowHeight);
  capture.size(windowWidth, windowHeight);
  capture.hide();

  // volume = new p5.Amplitude();
  // cnv.mouseClicked(function() {
  //   if (threeRingCircus.isPlaying()) {
  //     threeRingCircus.stop();
  //   } else {
  //     threeRingCircus.play();
  //   }
  // });
  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);
  let outLine = tracker.getCurrentPosition();

  // if (mouseIsPressed == true) {
  //   threeRingCircus.setVolume(0.5);
  //   threeRingCircus.play();
  // } else if (mouseIsPressed == false) {
  //   threeRingCircus.stop();
  // }

  // fill(random(255),random(255),random(255));
  // let level = volume.getLevel();
  // let size = map(level, 0, 1, 0, 2000);
  // ellipse(random(width), random(height), size, size);

  // draws the outine
  // noFill();
  // if (outLine<width/3) {
  //   // for Whiteface Clown
  //   fill(255);
  // } else if (outLine>width*2/3) {
  //   // for Character Clown
  //   fill("FCDBBC");
  // } else  {
  //   fill(255,147,44);
  //   // for Auguste Clown
  //   fill("#FDD895");
  // }
  fill(255);
  stroke(255);
  // noStroke();
  beginShape();
  for (let i = 0; i < outLine.length; i++) {
    vertex(outLine[i][0], outLine[i][1]);
  }
  endShape();

  noStroke();
  for (let i = 0; i < outLine.length; i++) {
    fill("#2a52be");
    // fill(map(i, 0, outLine.length, 0, 360), 50, 100);
    ellipse(outLine[i][0], outLine[i][1], 4, 4);
    // text(i, outLine[i][0], outLine[i][1]);
  }

  // estimate smiling amount through distance of corners of mouth
  if (outLine.length > 0) {
    let mouthLeft = createVector(outLine[44][0], outLine[44][1]);
    let mouthRight = createVector(outLine[50][0], outLine[50][1]);
    let smile = mouthLeft.dist(mouthRight);

    // line shows a bar showing smiling amount
    rect(20, 20, smile * 3, 20);

    // control frequency and volume with mouse
    // audible range of frequency is 20-2000hz
    osc.freq(map(smile, 50, 90, 20, 2000));
    // console.log(outLine);

    // uncomment for a surprise
    noStroke();
    fill(0, 255, 255);
    ellipse(outLine[62][0], outLine[62][1], 100, 100);
  }

  for (var i = 0; i < outLine.length; i++) {
    if (outLine[i][0] > 100 && outLine[i][0] < windowWidth - 100 && outLine[i][1] > 100 && outLine[i][1] < windowHeight - 100) {
      faceCentered = true;
    } else {
      faceCentered = false;
      // breaks out of for loop and faceCentered stays false
      break;
    }
  }
}

// function keyTyped() {
//   if (key === 'a') {
//     threeRingCircus.setVolume(0.5);
//     threeRingCircus.play();
//   } else if (key === 'z') {
//     threeRingCircus.stop();
//   }
// }

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

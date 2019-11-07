// // Starting code from Kyle McDonald https://editor.p5js.org/kylemcdonald/sketches/BJOcyD9hm
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
// Note CLMTracker library added in HTML

// Q: Can you add code that asks you to center face in screen?

var capture, tracker;
// var w = windowWidth, h = windowHeight;

function setup() {
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
    createCanvas(windowWidth, windowHeight);
    capture.size(windowWidth, windowHeight);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    image(capture, 0, 0, windowWidth, windowHeight);
    var positions = tracker.getCurrentPosition();

    // draws the outine
    // noFill();
    fill(255);
    stroke(255);
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        ellipse(positions[i][0], positions[i][1], 4, 4);
        // text(i, positions[i][0], positions[i][1]);
    }

  // estimate smiling amount through distance of corners of mouth
    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);

        // line shows a bar showing smiling amount
        rect(20, 20, smile * 3, 20);
//
        // uncomment for a surprise
        noStroke();
        fill(0, 255, 255);
        ellipse(positions[62][0], positions[62][1], 100, 100);
    }
}

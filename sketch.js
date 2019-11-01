let roster = [];
let randomIndex;
let animating = false;
let theClassics = [];
let presto = 0;
let peopleButton;
let chapterButton;
let pieceOfPaper;
let putNameHere = [];
let premiere = true;

function preload() {
  for (let i = 0; i <= 17; i++) {
    theClassics[i] = loadImage(`assets/Cars_${i}.jpg`);
  }
  soundFormats('mp3');
  sparkles = loadSound('assets/Little Einsteins - The Harp!.mp3');
}

function setup() {
  noCanvas();
  for (let i = 0; i <= 2; i++) {
    putNameHere.push(createInput("Add character here."));
    putNameHere[putNameHere.length - 1].parent("#characterNames");
  }
}

function draw() {
  if (animating == true) {
    clear();
    image(theClassics[presto], windowWidth / 2, windowHeight / 2);
    if (presto < theClassics.length - 1) {
      presto++;
      console.log(presto);
    } else {
      presto = 0;
    }
  }
}

function theMoreTheMerrier() {
  putNameHere.push(createInput("Add character here."));
  putNameHere[putNameHere.length - 1].parent("#characterNames");
}

function randomizer() {
  animating = false;
  if (roster[0]) {
    clear();
    randomIndex = int(random(roster.length));
    stroke(0);
    fill(255);
    image(random(theClassics), windowWidth / 2, windowHeight / 2);
    text(roster[randomIndex], 10, 400);
    roster.splice(randomIndex, 1);
  } else {
    background(random(204, 255));
    noStroke();
    fill('#662d91');
    text("The End.", 10, 400);
  }
}

function buttonPressed() {
  sparkles.setVolume(1);
  sparkles.play();
  if (premiere) {
    for (let i = 0; i < putNameHere.length; i++) {
      roster.push(putNameHere[i].value());
    }
    premiere = false;
  }
  animating = true;
  setTimeout(randomizer, 2130);
}

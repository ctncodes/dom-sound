let sketch = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Leonardo_da_Vinci - Self-Portrait.jpg');
    p.createCanvas(400, 400);
    p.background(250, 235, 215);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'a') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp5 = new p5(sketch);
let sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 238, 195);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'b') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp6 = new p5(sketch2);
let sketch3 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Mona Lisa.jpg');
    p.createCanvas(400, 400);
    p.background(250, 240, 205);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'c') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp7 = new p5(sketch3);
let sketch4 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(236, 220, 207);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'd') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp8 = new p5(sketch4);
let sketch5 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Leonardo - Parachute.jpg');
    p.createCanvas(400, 400);
    p.background(239, 222, 205);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'e') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp9 = new p5(sketch5);
let sketch6 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 250, 205);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'f') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp10 = new p5(sketch6);
let sketch7 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Leonardo - Flywheel.jpg');
    p.createCanvas(400, 400);
    p.background(245, 222, 179);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'g') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp11 = new p5(sketch7);
let sketch8 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 229, 180);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'h') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp12 = new p5(sketch8);
let sketch9 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Leonardo - Giant Crossbow.jpg');
    p.createCanvas(400, 400);
    p.background(250, 231, 181);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'i') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp13 = new p5(sketch9);
let sketch10 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 228, 196);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'j') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp14 = new p5(sketch10);
let sketch11 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Flying Machine.jpg');
    p.createCanvas(400, 400);
    p.background(255, 235, 205);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'k') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp15 = new p5(sketch11);
let sketch12 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(250, 240, 190);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'l') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp16 = new p5(sketch12);
let sketch13 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Flying Machine 3.jpg');
    p.createCanvas(400, 400);
    p.background(255, 248, 220);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'm') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp17 = new p5(sketch13);
let sketch14 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(255, 253, 208);
    p.strokeWeight(5);
  };
  p.draw = function() {
    if (p.mouseIsPressed) {
      p.line(p.mouseX,p.mouseY,p.pmouseX,p.pmouseY);
    }
  };
  p.keyTyped = function() {
    if (p.key === 'n') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp18 = new p5(sketch14);
let sketch15 = function(p) {
  p.setup = function() {
    p.square1 = p.loadImage('assets/Flying Machine 2.jpg');
    p.createCanvas(400, 400);
    p.background(255, 248, 231);
  };
  p.draw = function() {
    p.background(p.square1);
  };
  p.keyTyped = function() {
    if (p.key === 'o') {
      p.saveCanvas('fileName', 'jpg');
    }
  };
};
let myp19 = new p5(sketch15);

let video;
let slider;

function setup() {
  canvas = createCanvas(480, 360, WEBGL);
  canvas.id('p5canvas');
  background(51);
  video = createCapture(VIDEO);
  video.size(480, 360);
  video.id('p5video');
  // video.hide();
  // slider = createSlider(0, 1, 0.5, 0.01);
  // slider.id('blur-range');

  let seriously = new Seriously();
  let src = seriously.source('#p5video');
  let target = seriously.target('#p5canvas');
  // let blur = seriously.effect('blur');
  // blur.amount = '#blur-range';
  // blur.source = src;
  // target.source = blur;
  let chroma = seriously.effect('chroma');
  chroma.source = src;
  target.source = chroma;
  let r = 98/255;
  let g = 175/255;
  let b = 116/255;
  chroma.screen = [r, g, b, 1];
  seriously.go();
}

// function draw() {
//   tint(255, 0, 150);
//   image(video, 0, 0);
// }

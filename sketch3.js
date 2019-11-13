let video;

function setup() {
  canvas = createCanvas(480, 360);
  background(51);
  video = createCapture(VIDEO);
  video.size(480, 360);
}

// // For the Black Hole at the Grid!
// function setup(){
//   createCanvas(500,500);
//   background(0);
//   stroke(0,128,255);
//   for (let i = 0; i < 10; i++){
//     line(i * 50,0,500,i * 50);
//   }
// }
// For the Deep-Sea Bubbles!
function setup(){
  createCanvas(500,500);
  background(0);

}
function draw(){
  for (let i = 1; i < 10; i++){
    for (let j = 1; j < 10; j++){
    stroke(0,0,255 - (j * 22.5));
    fill(0,0,255 - (j * 22.5));
    ellipse(i * 50,j * 50,i * 4.5);
    }
  }
}

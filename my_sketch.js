let img;
function preload() {
  img = loadImage('winterCampImage.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(windowWidth, windowHeight);
  background(color(68,91,214));
  noLoop();
}

function draw() {

  image(img, 0, height/2-(549)/2);

}

let img;
function preload() {
  img = loadImage('winterCampImage.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(color(68, 91, 214));
  image(img, width/2-(1920/2)/2, height/2-(549/2)/2, 1920/2, 549/2);

}

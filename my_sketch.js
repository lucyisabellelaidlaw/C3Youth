let img;
function preload() {
  img = loadImage('winterCampImage.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}

function draw() {

  fill(color(random(255), random(255), random(255)));
  ellipse(width/2, height/2, 300);

}

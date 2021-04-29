let snow_y = 0;

let snowFlakeSizeArray = [10, 35, 10, 40, 20, 20, 10, 40, 10, 35, 10, 20, 10, 40, 20, 20, 10, 10, 60, 20];


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  img = loadImage('white_snowflake.png');
  oval_img = loadImage('Oval_.png');
  alarm_font = loadFont('alarm clock.ttf');
  mount_img = loadImage('mountains.png');
}

function draw() {
  let spacing = windowWidth/10
  let snowFlakeXPosArray = [0,spacing, spacing+spacing/2, 2*spacing-spacing/2, 2*spacing, 3*spacing, 3*spacing+spacing/5, 4*spacing, 4*spacing+spacing/2, windowWidth/2, 6*spacing, 6*spacing+spacing/3, 7*spacing, 8*spacing, 8*spacing+spacing/2, 8*spacing + spacing/2 +spacing/3, spacing*9, spacing*9+spacing/2, spacing*9+spacing/5, windowWidth];

  let snowFlakeYPosArray = [-20, -100, -30, -200, -50, -60, -220, -70, -80, -25, -110, -40, -55, -240, -15, -57, -84, -90, -190, -205]

  let snowFlakeSpeedArray = [0.9, 1, 1, 2, 1.5, 2.5, 2.3, 1.25, 0.95, 1.2, 2.1, 3.1, 2.05, 1.4, 1.2, 0.2, 1.6, 1.95, 2.5, 0.9];

  background(color(68,91,214));

  let s = second();
  let m = minute();
  let h = hour();
  let d = day();
  let mo = month();

  textSize(70);
  //image(oval_img, width/2, height/2);

  image(mount_img, -364*0.8/2, height-(364*0.8)+150, 748*0.8, 364*0.8);
  image(mount_img, 150, height-364/2+150, 748/2, 364/2);
  image(mount_img, width-748*0.8/2, height-364*0.8+150, 748*0.8, 364*0.8);
  image(mount_img, width-748*0.6/2-150, height-365*0.6+150, 748*0.6, 364*0.6);

  snowFlakesFall(snowFlakeXPosArray, snowFlakeYPosArray, snowFlakeSpeedArray);

  textFont(alarm_font);
  textAlign(CENTER);
  let time_array = getTimeDifference(mo, d, h, m, s);

  let my_string = time_array[0] + ":" + time_array[1] + ":" + time_array[2] + ":" + time_array[3];


  fill(color(70, 250, 128));
  text(my_string, width/2, height/2);



}

function getTimeDifference(mo, d, h, m , s) {


  let days = 0;

  let hours =0 ;

  let minutes = 0;

  let seconds = 0;

  if(h>9) {
    days = daysTillJuly4(d, mo);
    hours = 24 - h + 9 - 1;
    minutes = 59 - m;
    seconds = 59 - s;
  } else {
    days = daysTillJuly4(d, mo) - 1;
    hours = 9 - h - 1;
    minutes = 59-m;
    seconds = 59-s;
  }

  let time_array = [days, hours, minutes, seconds];


  return time_array;


}

function daysInMonth(mo) {
  if(mo==1) {
    return 31;
  } else if(mo==2) {
    return 28;
  } else if(mo==3) {
    return 31;
  } else if (mo==4) {
    return 30;
  } else if(mo==5) {
    return 31;
  } else if(mo==6) {
    return 30;
  } else if(mo==7) {
    return 31;
  } else if(mo==8) {
    return 30;
  } else if(mo==9) {
    return 30;
  } else if(mo==10) {
    return 31;
  } else if(mo==11) {
    return 30;
  } else {
    return 31;
  }
}

function dayInYear(d, mo) {
  let running_sum = 0;
  let keepGoing = 1;
  let i = 1
  while(keepGoing==1) {
    if(i<mo) {
      running_sum += daysInMonth(i);
    } else {
      keepGoing = 0;
      return d + running_sum;
    }
    i = i + 1;
  }
}

function daysTillJuly4(d, mo) {
  let july4 = dayInYear(4, 7);
  let today = dayInYear(d, mo);
  return july4 - today;
}

function snowFlakesFall(snowFlakeXPosArray, snowFlakeYPosArray, snowFlakeSpeedArray) {
  let size = 0;
  noStroke();
  fill(255);
  for(let i = 0; i < 20; i++) {
    size = snowFlakeSizeArray[i];
    image(img, snowFlakeXPosArray[i], ((snowFlakeYPosArray[i]-100)+frameCount*snowFlakeSpeedArray[i])%(height+100), size, size);
  }

}

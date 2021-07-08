var btn_pink;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
  
  btn_pink = createButton("PINK");
  btn_pink.position(150, 200);
  btn_pink.mousePressed(pink_bg);

  btn_blue = createButton("BLUE");
  btn_blue.position(300, 200);
  btn_blue.mousePressed(blue_bg);

}

function pink_bg(){
  r = 91;
  g = 59;
  b = 95;
}

function blue_bg(){
  r = 15;
  g = 22;
  b = 89;
}

function draw() {
  background(r,g,b);
}


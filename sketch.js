function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO)
  capture.size(320,240);//設定顯示畫面大小
}

function draw() {
  background(220);
  push()
  translate(width/2-160, height/2-120)
  image(capture,0,0)
}

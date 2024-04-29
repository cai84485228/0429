var captureGraphics
var capture_width = 640
var capture_heigh = 480
var span = 10
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(capture_width,capture_heigh);//設定顯示畫面大小
  captureGraphics = createGraphics(capture_width,480)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  captureGraphics.hide()

}

function draw() {
  background(220);
  noStroke()
  span = 5+map(mouseX,width,0,20)
  push()
  translate(width/2-capture_width/2, height/2-capture_heigh/2) //把原點移到(width/2-160, height/2-120)
  image(capture,0,0) 
  for(var x=0;x<captureGraphics.width;x=x+span){
    for(var y=0;y<captureGraphics.height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,span)
      ellipse(x,y,span)
    }
  }
  pop()
}

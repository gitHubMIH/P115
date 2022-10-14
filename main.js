x=0;
y=0;
function preload() {
  
}
function setup() {
  canvas=createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}
  function modelLoaded() {
    console.log("poseNet foi inicializado");
  }
function draw() {
    image(video, 0, 0, 300, 300);
}
function takeSnapshot() {
  save("fotoDeBigode.png");
}
 function gotPoses(results)
{
if (results.length>0){
  console.log(results);
  x=results[0].pose.nose.x;
  y=results[0].pose.nose.y;
}
}

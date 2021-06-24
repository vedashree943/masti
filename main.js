mustacheX=0;
mustacheY=0;
function preload() {
masti_mustache=loadImage("2.png");
}
function setup() {
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded() {
console.log("posenet is initiated");
}
function gotPoses(results) {
if (results.length>0) {
console.log(results);
mustacheX=results[0].pose.nose.x-30;
mustacheY=results[0].pose.nose.y;
}
}
function draw() {
image(video,0,0,300,300);
image(masti_mustache,mustacheX,mustacheY,60,60); 
}
function takesnapshot() {
save("masti.png");
}
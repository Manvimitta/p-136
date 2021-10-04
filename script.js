status = "";
object_ti = "";

function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    canvas.position(485, 350);

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector('cocoSsd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_ti = document.getElementById("input1");
}
function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
}
function draw() {
    image(video, 0, 0, 480, 380);
}
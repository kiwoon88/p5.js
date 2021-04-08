let faceapi;
let img;
let detections;

// by default all options are set to true
const options = {
    withLandmarks: true,
    withDescriptors: false,
}

function preload(){
    img = loadImage('face1.jpg')
}

function setup() {
    createCanvas(600, 450);
    img.resize(width, height);
    faceapi = ml5.faceApi(options, modelReady);
    textAlign(RIGHT);
}

function modelReady() {
    console.log(faceapi)
    faceapi.detectSingle(img, gotResults)
}

function gotResults(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    detections = result;
    background(255);
    image(img, 0,0, width, height)
    if (detections) {
        drawBox(detections)
        drawLandmarks(detections)
    }
}

function drawBox(detections){
    const alignedRect = detections.alignedRect;
    const {_x, _y, _width, _height} = alignedRect._box;
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2)
    rect(_x, _y, _width, _height)
}

function drawLandmarks(detections){
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2)
    
    push()
    // mouth
    beginShape();
    detections.parts.mouth.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape(CLOSE);

    // nose
    beginShape();
    detections.parts.nose.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape(CLOSE);

    // left eye
    beginShape();
    detections.parts.leftEye.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape(CLOSE);

    // right eye
    beginShape();
    detections.parts.rightEye.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape(CLOSE);

    // right eyebrow
    beginShape();
    detections.parts.rightEyeBrow.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape();

    // left eye
    beginShape();
    detections.parts.leftEyeBrow.forEach(item => {
        vertex(item._x, item._y)
    })
    endShape();

    pop();
}

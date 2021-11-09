img = "";
status = "";
objects = [];

function preload()
{
    loadImage = "bedroom.jpg";
}

function setup()
{
    canvas = createCanvas(450, 350);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("Model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log();
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#55ff44");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#55ff44");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("detector").innerHTML = "It has detected 3 out of 4";
        }
    }
}
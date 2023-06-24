
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(520,220);

    video=createCapture(VIDEO);
    video.position(520,200);
     video.hide();
 
}

function draw(){
    image(video,0,0,500,400);
}


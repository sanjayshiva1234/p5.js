function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
}

function draw(){
    circle(480, 30, 40);
    circle(160, 240, 40);
    circle(160, 30, 40);
    circle(490, 240, 40);
    

}

function take_snapshot(){
 save('studentName.png');
}
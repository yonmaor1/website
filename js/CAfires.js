//data variables
var fires;
var numRows;

var bgx = []; //background coordinates
var bgy = [];

//rectangle in center
var margin;
var rectX;
var rectY;

//canvas
var marginT;
var marginS;

//colors
var tanColor;
var textRed;

function preload() {
    fires = loadTable("data/2021cafires2.csv", "header");
    dosis = loadFont('fonts/Dosis-ExtraBold.ttf');
    akkordeon = loadFont('fonts/Akkordeon.otf');
    //impact = loadFont('fonts/impact.ttf');
}

function setup() {
    createCanvas(400, 600);
    noStroke();
    numRows = fires.getRowCount();
    background('black');
    frameRate(16);

    marginS = 15;
    marginT = 1.5*marginS;
    rectX = width-2*marginS;
    rectY = 500;

    tanColor = color(230, 226, 220);
    textRed = color(255,50,0);

    //storeBackground();
}

function draw() {
    //drawBackgound();

    push();
    translate(width/2, rectY/2 + marginT);

    background(tanColor);
    fill('black');
    rectMode(CENTER);
    rect(0, 0, rectX, rectY);

    rotate(radians(-90));
    scale(0.7);

    for (var i = 0; i < numRows/3; i+=3) {
        var lat = fires.getNum(i, "X");
        var lon = fires.getNum(i, "Y");

        //var size = fires.getNum(i, "poly_GISAcres")

        var mappedLat = map(lat, -124, -114, -width/2, width/2);
        var mappedLon = map(lon, 32.55, 42, -height/2, height/2);
        //var mappedSize = map(size, 0, 223180, 20, 30);
        drawCircles(mappedLon, mappedLat, 5);
    }

    pop();

    topText();
    mainText();

    bottomText();
    noFill(); stroke(textRed);
    //drawStar(300, marginT + rectY + 40, 3);
    noStroke();
    //movingText();

    drawFlag(marginS+1, marginT+rectY+17, 0.3);
}

function drawCircles(lat, long, size) {
    for (var j = 0; j < 2; j++) {
        fill(255, random(0, 140), 0);
        ellipse(lat + random(-3, 3),
                long - random(0, 7),
                random(0, 12));
    }
    //filter(BLUR,5);
    //fill('red');
    //ellipse(lat, long, size);
}

function topText() {
    textFont('dosis');
    textSize(10);
    fill(255,50,0);

    textAlign(LEFT, CENTER);    text('2020', marginS, marginT/2);
    textAlign(CENTER, CENTER);  text('CALIFORNIA WILDFIRES', width/2, marginT/2)
    textAlign(RIGHT, CENTER);   text('WFIGS', width-marginS, marginT/2);
}

function mainText() {
    textSize(60);
    textFont('akkordeon');
    textStyle(NORMAL);
    fill(tanColor);
    textAlign(LEFT, BOTTOM);

    push();

    translate(marginS, marginT+rectY);

    var offset = 0;

    text("WHOSE", 10, -3*45);
    text("LAND", 10, -2*45);
    text("ARE WE", 10, -45);
    text("BURNING?", 10, 0);

    pop();
}

//not used
function movingText() {
    push();
    //rotate(radians(90));

    textSize(30);
    textFont('impact');
    fill('red');
    text("thoughts and prayers", xText1, 40);
    text("thoughts and prayers", xText2, 40);
    xText1 -= 1;
    xText2 -= 1;

    if (xText1 < -265) {
        xText1 = width;
    } //if (xText2 < -265) {
//        xText2 = width;
//    }

    pop();
}

function drawFlag(x, y, s) {

    push();
    translate(x, y);
    scale(s);
    rectMode(CORNER);
    fill(textRed);

    rect(0, 130, 250, 20);
    drawStar(50, 40, 2);

    noFill();
    stroke(textRed);
    strokeWeight(10*s);
    rect(0, 0, 250, 150);
    noStroke();

    pop();

}

function drawStar(x, y, s) {
    var rOut = 10;
    var rIn = 5;

    push();
    translate(x,y);
    scale(s);
    rotate(radians(180));

    beginShape();
    for (var i = 0; i < 5; i++) {
        vertex( rOut*cos((2*PI*i/5)+(PI/2)),
                rOut*sin((2*PI*i/5)+(PI/2)));
        vertex( rIn*cos((2*PI*i/5)+(PI/2)+(2*PI/10)),
                rIn*sin((2*PI*i/5)+(PI/2)+(2*PI/10)));
    }
    endShape(CLOSE);

    pop();
}

function bottomText() {
    var lines = "NO BAILOUT\nDEMOCRATIZE POWER\nPEOPLE OVER PROFITS";

    noStroke();
    textStyle(ITALIC);
    textAlign(RIGHT, TOP);
    fill(textRed);
    textSize(14); //14
    textLeading(18);
    textFont('dosis');

    text(lines, marginS+rectX, marginT+rectY+15);

}

function storeBackground() {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            if (random(0,1) < 0.1) {
                bgx.push(x);
                bgy.push(y);
            }
        }
    }
}

function drawBackgound() {
    for (var i = 0; i < bgx.length; i++) {
        stroke('black');
        point(bgx[i], bgy[i]);
        noStroke();
    }
}

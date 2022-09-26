var triangleRand;

var barcode
var barcodeWidth = 100;

var dosis;
var akkordeon;
var impact;
var gothic;

var myCanvas;


function preload() {
    //fires = loadTable("data/2021cafires2.csv", "header");
    barcode = loadImage('js/img/barcode.png');
    dosisB = loadFont('js/fonts/Dosis-ExtraBold.ttf');
    dosisL = loadFont('js/fonts/Dosis-Light.ttf');
    akkordeon = loadFont('js/fonts/Akkordeon.otf');
    impact = loadFont('js/fonts/impact.ttf');
    gothic = loadFont('js/fonts/LetterGothicStd.otf');
}


function setup() {
    cnv = createCanvas(400,600);
    //cnv.parent('capitalism');
    //myCanvas.size(300);
}

function draw() {
    background('orange');
    noFill();
    stroke('black');

    triangleRand = max(mouseX, height - mouseY)/100;
    stroke(230, 226, 220); //tan
    drawConcentricTriangles(5*width/9, 120, triangleRand);

    stroke(255, 204, 64); //yellow
    drawConcentricTriangles(4*width/9, 120, 0);

    mainTextCap();
    topTextCap();

    image(barcode, 15, height-barcodeWidth-10, 30, barcodeWidth);
    bottomTextCap()
}

function drawTriangle(x, y, s, n) {
    push();
    translate(x,y);
    scale(s);
    noFill();

    beginShape();

    vertex(-50 + random(n), 50+random(n));//point
    for (var i = -49; i < 49; i+=10) {
        vertex(i + random(n), 50 + random(n));
    }
    vertex(50 + random(n), 50 + random(n)); //point
    vertex(43.75 + random(n),39.375 + random(n));
    vertex(37.5 + random(n), 28.75 + random(n));
    vertex(31.25 + random(n), 18.125 + random(n));
    vertex(25 + random(n), 7.5 + random(n));
    vertex(12.5 + random(n), -13.5 + random(n));
    vertex(6.25 + random(n), -24.25 + random(n));
    vertex(3.125 + random(n), -29.625 + random(n));
    vertex(0 + random(n), -35 + random(n)); //point
    vertex(-3.125 + random(n), -29.625 + random(n));
    vertex(-12.5 + random(n), -13.5 + random(n));
    vertex(-25 + random(n), 7.5 + random(n));
    vertex(-31.25 + random(n), 18.125 + random(n));
    vertex(-37.5 + random(n), 28.75 + random(n));
    vertex(-43.75 + random(n),39.375 + random(n));

    endShape(CLOSE);

    pop();
}

function drawConcentricTriangles(x, y, n) {
    push();
    for (var i = 0; i < 6; i++) {
        strokeWeight(i);
        drawTriangle(x, y, 0.8*(6-i), n);
    }
    pop();
}

function mainTextCap() {
    textSize(40);
    fill('black');
    noStroke();
    textFont(gothic);
    textAlign(LEFT, TOP);
    text('capitalism is', 10, height/2 + 30);
    text('killing', 10, height/2 + 30 + 45);
    text('the planet', 10, height/2 + 30 + 2*45);
}

function topTextCap() {
    textSize(12);
    fill('black');
    noStroke();
    textFont(dosisL);
    textAlign(LEFT, TOP);
    text('CAN CAPITALISM SURVIVE?', 10, 10);
    text('NO, I DO NOT THINK IT CAN.', 10, 22);

    textAlign(RIGHT, TOP);
    text('ITS VERY SUCCESS UNDERMINES', width - 10, 10);
    text('THE SOCIAL INSTITUTIONS WHICH', width - 10, 22);
    text('PROTECT IT', width - 10, 34);
}

function bottomTextCap() {
    textSize(12);
    fill('black');
    noStroke();
    textFont(dosisL);
    textAlign(RIGHT, BOTTOM);
    text('1942', width - 10, height - 10 - 12 - 12);
    text('JOSEPH SCHUMPETER', width - 10, height - 10 - 12);
    text('CAPITALISM, SOCIALISM AND DEMOCRACY', width - 10, height - 10);
}

var smoke = [];

var dx = 5;
var dy = 7;

var impact;

function preload() {
    impact = loadFont('fonts/impact.ttf');
}

let cnv;

function setup() {
    cnv = createCanvas(400,600);
    // cnv.parent('smoke')
    background(220);
}

function draw() {
    background(220);

    writeText();

    updateAndDisplaySmoke();
    removeSmoke();
    for (var i = 2; i < 5; i++) {
        h = map(exp(i), 0, exp(4), 0, height*0.8);
        newSmoke(25+75*i, height - h);
    }

    drawBars();
}

function drawBars() {
    fill('black');
    var w = 60;
    var h;
    for (var i = 0; i < 5; i++) {
        h = map(exp(i), 0, exp(4), 0, height*0.8);
        rect(22+75*i, height - h, w, h);
    }
}

function writeText() {
    var textRed = color(138, 76, 76);
    var textGreen = color(128, 194, 129);

    push();
    //translate(0, 0.3*height);
    textSize(64);
    fill(textRed);
    textFont(impact);
    text('CORPORATIONS', 10, 60);
    text('WARM OUR', 10, 120);  fill(textGreen); text('WE ARE', 300, 120);      fill(textRed);
    text('PLANET!', 10, 180);   fill(textGreen); text('ARE PURSUING', 220, 180);fill(textRed);
    text('MAKE', 10, 240);      fill(textGreen); text('ACTIVELY', 170, 240);    fill(textRed);
    text('POLLUTERS', 10, 300); fill(textGreen); text('WORKING', 300, 300);     fill(textRed);
    text('PAY!', 10, 360);      fill(textGreen); text('TO REDUCE', 140, 360);
    text('OUR CARBON FOOTPRINT', 10, 420);
    text('FOOTPRINT BY EXPLORING', 10, 480);
    text('EXPLORING FREE', 10, 540);
    text('MARKET SOLUTIONS', 10, 600);

    //textSize(30);
    //text('CARBON DIVIDEND NOW', 10, 240)
    pop();
}

function makeSmoke(birthX, birthY) {
    var smoke = {x: birthX,
                y: birthY,
                r: 5,
                t: random(0, 70),
                speedX: random(1,3),
                speedY: random(3,5),
                move: smokeMove,
                display: smokeDisplay}
    return smoke;
}

function smokeDisplay() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(100, 100, 100, this.t);
    ellipse(0, 0, this.r);
    pop();
}

function smokeMove() {
    this.x -= this.speedX;
    this.y -= this.speedY;
    this.r += random(this.speedX, this.speedY)-1;
}

function newSmoke(colX, colY) {
    var prob = 0.3;
    if (random(0,1) < prob) {
        smoke.push(makeSmoke(random(colX, colX+60), colY+10));
    }
}

function removeSmoke(){
    var smokeToKeep = [];
    for (var i = 0; i < smoke.length; i++){
        if (smoke[i].x > -100) {
            smokeToKeep.push(smoke[i]);
        }
    }
    smoke = smokeToKeep;
}

function updateAndDisplaySmoke(){
    for (var i = 0; i < smoke.length; i++){
        smoke[i].move();
        smoke[i].display();
    }
}

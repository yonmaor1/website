
function setup() {
    createCanvas(400, 200);
    //useSound();
    frameRate(4);
    background('lightblue');
    chooseColor1();
    chooseColor2();
}


function soundSetup() {
    osc = new p5.Oscillator();
    osc.amp(1);
    osc.setType('sine');
    osc.start();
}

function preload() {
    //chomp = loadSound("https://courses.ideate.cmu.edu/15-104/f2021/wp-content/uploads/2021/11/Chomp.wav");
    //bg = loadSound("https://courses.ideate.cmu.edu/15-104/f2021/wp-content/uploads/2021/11/bg.wav");
    //bg.setVolume(0.75);
    //chomp.setVolume(0.5);
}

var r;
var g;
var d;
var col1;
var col2;

function chooseColor1(){
    r = random(100,255);
    g = 140;
    b = random(100,255);
    col1 = color(r,g,b);
}

function chooseColor2(){
    r = random(100,255);
    g = 140;
    b = random(100,255);
    col2 = color(r,g,b);
}

function drawFish1(x, y, s, c, mouthClosed, lookingFord) {
    push();
    translate(x, y);
    scale(s);
    strokeCap(SQUARE)
    strokeWeight(1);

    var fil = color(red(c)+20, green(c)+20, blue(c)+20);

    if (mouthClosed == true) {
        //top half of fish (colored w/ c)
        //fill
        stroke(fil);
        fill(fil);
        triangle(-17, -5, -12,-2, -17, -1);
        rect(-17, -1, 7, 3);
        rect(-16, 2, 3, 1);
        rect(-6,-5, 16, 5);
        line(-6, -2, -10,-2);
        line(-6, -3, -8,-3);
        line(10, -2, 17, -2);
        line(10, -3, 14, -3);

        //outline
        stroke(c);
        line(-17, 2, -17, -6);
        point(-16,-6);
        point(-15,-5);
        point(-14,-4);
        point(-13,-3);
        point(-12,-2);
        point(-11,-2);
        point(-10,-3);
        point(-9,-3);
        point(-8,-4);
        point(-7,-4);
        line(-6,-5, -2, -5);

        //fin
        stroke(fil);
        rect(-1, -8, 4, 4);
        triangle(-1, -7,-3, -5, -1, -5);
        line(3, -6, 5, -6);

        stroke(c);
        point(-4, -6);
        point(-3, -7);
        line(-2, -8, 3, -8);
        point(3, -7);
        point(4, -7);
        point(5, -6);

        line(2,-5, 10, -5);
        point(11,-4);
        point(12,-4);
        point(14,-3);
        point(15,-3);
        line(16,-2, 18, -2);

        //bottom half of fish
        //finn fill
        stroke(240);
        fill(240);
        rect(-5, 4, 4, 2);

        stroke(220);
        point(-16, 4);
        point(-15, 4);
        line(-14, 3, -10, 3);
        line(-10, 4, -6, 4);
        line(-6, 5, 0, 5);

        //fin
        stroke(220)
        point(-6,5);
        point(-7,5);
        point(-7, 6);
        line(-6, 7, -2, 7);
        line(-2, 6, 10, 6)

        stroke(240);
        line(11, 5, 0, 5);
        line(12, 5, 0, 5);
        line(13, 4, -5, 4);
        line(14, 3, -10, 3);
        line(15, 2, -10, 2);
        line(16, 1, -10, 1);
        line(17, 0, -10, 0);
        line(18, -1, -10, -1);

        //gills
        stroke(204,194,194);
        point(0,2);
        point(1,1);
        point(2,2);
        point(3,1);
        point(4,2);
        point(5,1);
        point(6,2);

        stroke(220);
        point(10, 5);
        point(11, 5);
        point(12, 4);
        point(13, 3);
        point(14, 2);
        point(15, 1);
        point(16, 0);
        point(17, -1);



        //eye
        fill(255);
        stroke(255);
        rect(9, -1, 4, 2);
        rect(10, -2, 2, 4);
        stroke(0);
        //if (lookingFord) {
            point(11,0);
        //} else if (!lookingFord) {
        //    point(10, -1);
        //}

        pop();
    } else {
        //top half of fish (colored w/ c)
        stroke(fil);
        fill(fil);
        triangle(-17, -5, -12,-2, -17, -1);
        rect(-17, -1, 7, 3);
        rect(-16, 2, 3, 1);
        rect(-6,-5, 16, 5);
        line(-6, -2, -10,-2);
        line(-6, -3, -8,-3);
        line(10, -2, 17, -2);
        line(10, -3, 14, -3);

        stroke(c);
        line(-17, 2, -17, -6);
        point(-16,-6);
        point(-15,-5);
        point(-14,-4);
        point(-13,-3);
        point(-12,-2);
        point(-11,-2);
        point(-10,-3);
        point(-9,-3);
        point(-8,-4);
        point(-7,-4);
        line(-6,-5, -2, -5);

        //fin
        stroke(fil);
        rect(-1, -8, 4, 4);
        triangle(-1, -7,-3, -5, -1, -5);
        line(3, -6, 5, -6);

        stroke(c);
        point(-4, -6);
        point(-3, -7);
        line(-2, -8, 3, -8);
        point(3, -7);
        point(4, -7);
        point(5, -6);

        line(2,-5, 10, -5);
        point(11,-4);
        point(12,-4);
        point(14,-3);
        point(15,-3);
        line(16,-2, 18, -2);

        //bottom half of fish
        //finn fill
        stroke(240);
        fill(240);
        rect(-5, 4, 4, 2);

        stroke(220);
        point(-16, 4);
        point(-15, 4);
        line(-14, 3, -10, 3);
        line(-10, 4, -6, 4);
        line(-6, 5, 0, 5);

        //fin
        stroke(220)
        point(-6,5);
        point(-7,5);
        point(-7, 6);
        line(-6, 7, -2, 7);
        line(-2, 6, 10, 6)

        stroke(240);
        line(11, 5, 0, 5);
        line(13, 5, 0, 5);
        line(16, 4, -5, 4);
        line(17, 3, -10, 3);
        line(14, 2, -10, 2);
        line(13, 1, -10, 1);
        line(12, 0, -10, 0);
        line(18, -1, -10, -1);

        stroke(204,194,194);
        point(0,2);
        point(1,1);
        point(2,2);
        point(3,1);
        point(4,2);
        point(5,1);
        point(6,2);

        stroke(220);
        point(10, 5);
        point(11, 5);
        point(12, 5);
        point(13, 4);
        point(14, 4);
        point(15, 4);
        point(16, 3);
        point(17, 3);

        //eye
        fill(255);
        stroke(255);
        rect(9, -1, 4, 2);
        rect(10, -2, 2, 4);
        stroke(0);
        point(11,0);

        pop();
    }
}

function drawFish2(x, y, s, c, mouthClosed, lookignFord) {
    push();
    translate(x, y);
    scale(s);
    strokeCap(SQUARE)
    strokeWeight(1);

    var fil = color(red(c)+20, green(c)+20, blue(c)+20);

    if (mouthClosed == true) {
        //top half of fish (colored w/ c)
        stroke(fil);
        fill(fil);
        triangle(-15, -5, -12,-2, -15, -1);
        rect(-15, -1, 7, 3);
        rect(-14, 2, 3, 1);
        rect(-6,-5, 16, 5);
        line(-6, -2, -8,-2);
        line(-6, -3, -6,-3);
        line(10, -2, 17, -2);
        line(10, -3, 14, -3);

        stroke(c);
        line(-15, 2, -15, -4);
        //point(-16,-6);
        point(-15,-5);
        point(-14,-4);
        point(-13,-3);
        point(-12,-2);
        point(-11,-2);
        point(-10,-3);
        point(-9,-3);
        point(-8,-4);
        point(-7,-4);
        line(-6,-5, -2, -5);

        //fin
        stroke(fil);
        rect(-1, -8, 4, 4);
        triangle(-1, -7,-3, -5, -1, -5);
        line(3, -6, 5, -6);

        stroke(c);
        point(-4, -6);
        point(-3, -7);
        line(-2, -8, 3, -8);
        point(3, -7);
        point(4, -7);
        point(5, -6);

        line(2,-5, 10, -5);
        point(11,-4);
        point(12,-4);
        point(14,-3);
        point(15,-3);
        line(16,-2, 18, -2);

        //bottom half of fish
        //finn fill
        stroke(240);
        fill(240);
        rect(-5, 4, 4, 2);

        stroke(220);
        point(-16, 4);
        point(-15, 4);
        line(-14, 3, -10, 3);
        line(-10, 4, -6, 4);
        line(-6, 5, 0, 5);

        //fin
        stroke(220)
        point(-6,5);
        point(-7,5);
        point(-7, 6);
        line(-6, 7, -2, 7);
        line(-2, 6, 10, 6)

        stroke(240);
        line(11, 5, 0, 5);
        line(12, 5, 0, 5);
        line(13, 4, -5, 4);
        line(14, 3, -10, 3);
        line(15, 2, -10, 2);
        line(16, 1, -10, 1);
        line(17, 0, -10, 0);
        line(18, -1, -10, -1);

        stroke(204,194,194);
        point(0,2);
        point(1,1);
        point(2,2);
        point(3,1);
        point(4,2);
        point(5,1);
        point(6,2);

        stroke(220);
        point(10, 5);
        point(11, 5);
        point(12, 4);
        point(13, 3);
        point(14, 2);
        point(15, 1);
        point(16, 0);
        point(17, -1);



        //eye
        fill(255);
        stroke(255);
        rect(9, -1, 4, 2);
        rect(10, -2, 2, 4);
        stroke(0);
        //if (lookingFord) {
            point(11,0);
        //} else if (!lookingFord) {
        //    point(10, -1);
        //}

        pop();
    } else {
        //top half of fish (colored w/ c)
        stroke(fil);
        fill(fil);
        triangle(-17, -5, -12,-2, -17, -1);
        rect(-17, -1, 7, 3);
        rect(-16, 2, 3, 1);
        rect(-6,-5, 16, 5);
        line(-6, -2, -10,-2);
        line(-6, -3, -8,-3);
        line(10, -2, 17, -2);
        line(10, -3, 14, -3);

        stroke(c);
        line(-17, 2, -17, -6);
        point(-16,-6);
        point(-15,-5);
        point(-14,-4);
        point(-13,-3);
        point(-12,-2);
        point(-11,-2);
        point(-10,-3);
        point(-9,-3);
        point(-8,-4);
        point(-7,-4);
        line(-6,-5, -2, -5);

        //fin
        stroke(fil);
        rect(-1, -8, 4, 4);
        triangle(-1, -7,-3, -5, -1, -5);
        line(3, -6, 5, -6);

        stroke(c);
        point(-4, -6);
        point(-3, -7);
        line(-2, -8, 3, -8);
        point(3, -7);
        point(4, -7);
        point(5, -6);

        line(2,-5, 10, -5);
        point(11,-4);
        point(12,-4);
        point(14,-3);
        point(15,-3);
        line(16,-2, 18, -2);

        //bottom half of fish
        //finn fill
        stroke(240);
        fill(240);
        rect(-5, 4, 4, 2);

        stroke(220);
        point(-16, 4);
        point(-15, 4);
        line(-14, 3, -10, 3);
        line(-10, 4, -6, 4);
        line(-6, 5, 0, 5);

        //fin
        stroke(220)
        point(-6,5);
        point(-7,5);
        point(-7, 6);
        line(-6, 7, -2, 7);
        line(-2, 6, 10, 6)

        stroke(240);
        line(11, 5, 0, 5);
        line(13, 5, 0, 5);
        line(16, 4, -5, 4);
        line(17, 3, -10, 3);
        line(14, 2, -10, 2);
        line(13, 1, -10, 1);
        line(12, 0, -10, 0);
        line(18, -1, -10, -1);

        stroke(204,194,194);
        point(0,2);
        point(1,1);
        point(2,2);
        point(3,1);
        point(4,2);
        point(5,1);
        point(6,2);

        stroke(220);
        point(10, 5);
        point(11, 5);
        point(12, 5);
        point(13, 4);
        point(14, 4);
        point(15, 4);
        point(16, 3);
        point(17, 3);

        //eye
        fill(255);
        stroke(255);
        rect(9, -1, 4, 2);
        rect(10, -2, 2, 4);
        stroke(0);
        point(11,0);

        pop();
    }
}

var count = 0;
var mouthClosed;
var lookingFord;

function draw() {
    background('lightblue');

    if (count%32==0) {
        count = 0;
        col1 = col2;
        chooseColor2();
        //osc.start();
        //bg.play();
        //bg.loop();
    }

    if (count > 8) {
        mouthClosed = true;
        //osc.stop();
        //lookignFord = false;
    } else {
        mouthClosed = false;
        //lookignFord = true;
    }

    if (count <= 8) {
        if (count%2==0) {
            drawFish1(width/2, height/2, 3, col1, true);
            //osc.freq(midiToFreq(52));
        } else if ((count+1)%2==0) {
            //osc.freq(midiToFreq(53));
            drawFish2(width/2, height/2, 3, col1, true);
        }
    }

    var bigFishX = map(count, 0, 12, -200, 200);
    var bigFishS = map(count, 12, 24, 10, 3);

    if (count == 5) {
        //chomp.play();
    }

    if (count <= 12) {
        if (count%2==0) {
            drawFish1(bigFishX, height/2, 10, col2, mouthClosed);
        } else if ((count+1)%2==0) {
            drawFish2(bigFishX, height/2, 10, col2, mouthClosed);
        }
    } if (count > 12 && count <= 24) {
        if (count%2==0) {
            drawFish1(width/2, height/2, bigFishS, col2, mouthClosed);
        } else if ((count+1)%2==0) {
            drawFish2(width/2, height/2, bigFishS, col2, mouthClosed);
        }
    } if (count > 24) {
        if (count%2==0) {
            drawFish1(width/2, height/2, 3, col2, mouthClosed);
        } else if ((count+1)%2==0) {
            drawFish2(width/2, height/2, 3, col2, mouthClosed);
        }
    }

    count += 1;
}

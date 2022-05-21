var nPoints = 100;

function setup() {
    createCanvas(400, 400);
    frameRate(10);
}


function draw() {
    background(255);

    // draw the frame
    fill(0);
    noStroke();
    stroke(0);
    noFill();

    // draw the curve
    push();
    translate(width / 2, height / 2);
    drawCurve();
    pop();
}

//--------------------------------------------------
function drawCurve() {
    // Hypotrochoid
    // https://mathworld.wolfram.com/Hypotrochoid.html

    var x;
    var y;

    var a = constrain(map(mouseX, 0, width, 50, 150), 50, 150);
    var b = a / constrain(map(mouseX, 10, width-10, 1, 8), 1, 8);
    var h = b;
    var ph = mouseX / 50.0;

    var n = 12;

    for (var j = 0; j < n; j++) {
        var c = map(j, 0, n, 0, 256);
        stroke(256-c,114,c);
        beginShape();
        for (var i = 0; i < nPoints; i++) {
            var t = map(i, 0, nPoints, 0, TWO_PI);
            var r = map(mouseY, 0, height, 0, 5)

            x = (j/n)*(a - b) * cos(t) + (j/n)*h * cos(ph + t * (a - b) / b);
            y = (j/n)*(a - b) * sin(t) - (j/n)*h * sin(ph + t * (a + b) / b);
            vertex(x + random(-r,r), y + random(-r,r));
        }
        endShape(CLOSE);
    }

}

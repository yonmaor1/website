var gravity = 9.8;   // downward acceleration
var spring = 0.0; // how much velocity is retained after bounce
var drag = 0.0000001;    // drag causes particles to slow down
var mouseReppel = 140;
var np = 30;      // how many particles

HEIGHT = 500;


function particleStep() {
    this.age++;
    this.x += this.dx;
    this.y += this.dy;
    if (this.y >= height - this.size) { // bounce off bottom
        this.y = height - this.size;
        this.dy = 0;
    } else if (this.y < 0 + this.size) { // bounce off top
        this.y = 0 + this.size;
        this.dy = 0;
    }

    //  particels reppeling mouse
    var mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistance < 1){
        mouseDistance = 1;
    }
    var f = mouseReppel / (mouseDistance^2);
    var dirx = (this.x - mouseX) / mouseDistance;
    var diry = (this.y - mouseY) / mouseDistance;
    this.x += dirx*f;
    this.y += diry*f;

    //this.dy = this.dy + gravity; // force of gravity
    // drag is proportional to velocity squared
    // which is the sum of the squares of dx and dy
    //var vs = Math.pow(this.dx, 2) + Math.pow(this.dy, 2);
    // d is the ratio of old velocty to new velocity
    //var d = vs * drag;
    // d goes up with velocity squared but can never be
    // so high that the velocity reverses, so limit d to 1
    //d = min(d, 1);
    // scale dx and dy to include drag effect
    //this.dx *= (1 - d);
    //this.dy *= (1 - d);
}


function particleDraw() {
    noFill();
    strokeWeight(2);
    numConcentric = 5

    for (var i=0; i <= numConcentric; i++){
        mappedRadius = map(i, 0, numConcentric, 10, this.size);
        mappedRed = map(i, 0, numConcentric, 0, red(this.color));
        mappedGreen = map(i, 0, numConcentric, 0, green(this.color));
        mappedBlue = map(i, 0, numConcentric, 0, blue(this.color));
        mappedAlpha = map(i, 0, numConcentric, 255, 0);
        stroke(red(this.color), green(this.color), blue(this.color), mappedAlpha);
        circle(this.x, this.y, mappedRadius);
    }
}


// create a "Particle" object with position and velocity
function makeParticle(px, py, pdx, pdy, r, c, shape) {
    p = {x: px, y: py,
         dx: pdx, dy: pdy,
         size: r, color: c,
         shape: shape,
         age: 0,
         stepFunction: particleStep,
         drawFunction: particleDraw
        }
    return p;
}

var particles = [];
var mayCanvas;

function setup() {
    myCanvas = createCanvas(windowWidth, HEIGHT);
    myCanvas.parent('description');
    frameRate(10);
}

function draw() {
    background('white');
    stroke(0);
    strokeWeight(10);

    if (particles.length < np){
        var newp = makeParticle(-100, random(0, height),
                                random(1,10), 0,
                                random(50,200), color(random(120,180), random(120,180), random(120,180)),
                                random(2,6));
        particles.push(newp);
    }

    // newParticles will hold all the particles that we want to
    // retain for the next call to draw() -- we will retain particles
    // if the age is < 200 (frames). Initially, newParticle is empty
    // because we have not found any "young" particles yet.
    newParticles = [];
    for (var i = 0; i < particles.length; i++) { // for each particle
        var p = particles[i];
        p.stepFunction();
        p.drawFunction();
        // since we are "looking" at every particle in order to
        // draw it, let's use the opportunity to see if particle[i]
        // is younger than 200 frames. If so, we'll push it onto the
        // end of newParticles.
        if (p.x < width + 100) {
            newParticles.push(p);
        }
    }
    // now, newParticles has EVERY particle with an age < 200 frames.
    // these are the particles we want to draw next time, so assign
    // particles to this new array. The old value of particles, i.e.
    // the entire array, is simply "lost" -- Javascript will reclaim
    // and reuse the memory since that array is no longer needed.
    particles = newParticles;


    }


function mousePressed(){
        var newp = makeParticle(mouseX, mouseY,
                                random(5,15), 0,
                                random(50,100), color(random(100,200), random(100,200), random(100,200)),
                                random(2,6));
        particles.push(newp);
    }

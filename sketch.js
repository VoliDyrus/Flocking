const flock = [];

function setup() {
  createCanvas(1080, 1080);
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(0);
  for (let boid of flock) {
    boid.flock(flock);
    boid.update();
    boid.show();
    boid.edges();
  }
}

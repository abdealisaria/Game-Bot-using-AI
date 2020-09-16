let gen = 2;
// let sval = 2; slider value
function nextGeneration() {
  console.log("generation : " + gen);
  gen++;
  slider.value(sval);
  if (sval > 10) {
    console.log("difficulty level : 10");
  } else {
    console.log("difficulty level : " + sval);
  }
  sval++;

  calculateFitness();
  for (let i = 0; i < TOTAL; i++) {
    scc = 0;
    birds[i] = pickOne();
  }
  for (let i = 0; i < TOTAL; i++) {
    savedBirds[i].dispose();
  }
  savedBirds = [];
}
function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedBirds[index].fitness;
    index++;
  }
  index--;
  let bird = savedBirds[index];
  let child = new Bird(bird.brain);
  child.mutate();
  return child;
}
// selection
function calculateFitness() {
  let sum = 0;
  for (let bird of savedBirds) {
    sum += bird.score;
  }
  for (let bird of savedBirds) {
    bird.fitness = bird.score / sum;
  }
}

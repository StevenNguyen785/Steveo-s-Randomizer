var spot = {
  x: 200,
  y: 100
};

let x = 200;
let y = 200;

let col = {
  r: 255,
  g: 150,
  b: 0
};
let brainfart = [{
  name: "braincells",
  color: "The Walking Dead"
}, {
  name: "medulla oblongata",
  color: "Dawn of the Dead"
}, {
  name: "mindfreak",
  color: "Train to Busan"
}, {
  name: "mindblown",
  color: "28 Days Later"
}, {
  name: "BRAINS!!!",
  color: "Night of the Living Dead"
}, {
  name: "skin walker",
  color: "World War Z"
}, {
  name: "Bag of Bones",
  color: "Resident Evil"
}, {
  name: "BITE!",
  color: "The Last of Us"
}, {
  name: "mindfuck",
  color: "High School of the Dead"
}, {
  name: "mindfreak",
  color: "Return of the Living Dead"
}];


let randomIndex;
let counter = 0;
let animating = true;
let gm = [];
let imageCounter = 0;
let button;
let cnv;
let nameInputs = [];

function preload() {

  for (let i = 0; i <= 9; i++) {
    gm[i] = loadImage(`assets/gm_${i}.JPG`)
  }
}

function setup() {
  cnv = createCanvas(600, 500);
  cnv.parent("#canvasDiv");
  extraCanvas = createGraphics(200, 200);
  extraCanvas.background(204, 255, 255);
  background(0);
  textSize(42);
  imageMode(CENTER);
  frameRate(6);

  text("click to randomize", width / 2, height / 2);
  (gm);
  setTimeout(changeBackground, 2000);
  button = select("#randButton")
  button.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(buttonPressed);


  button.style("padding", "10px");
  button.style("background-color", "#fc0808");

for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs [nameInputs.length -
  1].parent("#inputFields");
  }
}

function draw() {

  if (animating == true) {
    clear();


    if (imageCounter < gm.length - 1) {
      imageCounter++;
      (imageCounter);
      ellipse(random(width), random(height), random(50, 200));
    } else {
      imageCounter = 0;
    }
  }
}

function changeBackground() {
  if (counter <= 5) {
    counter++;
    // (counter)
    background(random(255), random(255), random(255));
    setTimeout(changeBackground, 1000);
  } else {
    image(extraCanvas, 0, 0, );
    col.r = random(100, 255);
    col.g = 80;
    col.b = random(200, 255);
    spot.x = random(255, width);
    spot.y = random(0, height);

    fill(col.r, col.g, col.b, 1000);
    ellipse(spot.x, spot.y, 24, 24);

    background(0);
    x += random(-5, 5);
    y += random(-5, 5);
    fill(255, 0, 0);
    stroke(255);
    rectMode(CENTER);
    rect(x, y, 20, 20);
  }
}


function randomizer() {
  animating = false;
  if (brainfart[0]) {

    background(random(255));
    randomIndex = int(random(brainfart.length));
    image(random(gm), width / 2, height / 2);
    text(brainfart[randomIndex].name, width / 2, height - 100);
    text(brainfart[randomIndex].color, 50, 50);
    brainfart.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("Too Late! You've been bitten!", 40, 40);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);

}

function mousePressed() {
  console.log("mousey")
  fill(250, 12, 7);
  noStroke();

  square(mouseX, mouseY, 90, 90);
}

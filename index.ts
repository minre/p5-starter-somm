// CSS Styles importieren; kann gelöscht werden falls nicht benötigt
import './style.css';

// Wir laden p5js
import p5 = require('p5');
import { drawCircle } from './circle';

// Wir informieren p5js, welche Funktionen unser Programm bereitstellt.
// Mit TypeScript und p5js verwendet man am besten den "instance mode"
// statt dem "global mode" (https://p5js.org/reference/#/p5/p5).
// Man kann die Funktionen entfernen, die man in der jeweiligen Übung
// nicht braucht (z.B. kein Reagieren auf Tastatur -> `keyPressed` weg).
export let p: p5;
let state = false;

new p5((p5: p5) => {
  p = p5;
  p.preload = preload;
  p.setup = setup;

  p.draw = draw;
  p.keyPressed = keyPressed;
  p.mousePressed = mousePressed;
});

function preload() {
  // Diese Funktion wird vor `setup` aufgerufen. Wir verwenden sie,
  // um z.B. Bilder zu laden.
  // https://p5js.org/reference/#/p5/preload
}

function setup() {
  // Diese Funktion wird einmal beim Programmstart aufgerufen.
  // https://p5js.org/reference/#/p5/setup
  p.createCanvas(500, 500);
  p.frameRate(2);
}

function keyPressed() {
  // Diese Funktion wird aufgerufen, wenn eine Taste gedrückt wird.
  // https://p5js.org/reference/#/p5/keyPressed
  console.log(`Key ${p.keyCode} has been pressed`);
}

function mousePressed() {
  // Diese Funktion wird aufgerufen, wenn die Mause geklickt wird.
  // https://p5js.org/reference/#/p5/mousePressed
  console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);
}

function draw() {
  // Diese Funktion wird aufgerufen, wenn der Bildschirm aktualisiert
  // werden muss.
  // https://p5js.org/reference/#/p5/draw
  p.background('white');

  // Beispiel für Aufruf einer Hilfsfunktion in einer anderen Datei.
  //drawCircle({ x: 200, y: 200 });

  //Linie zeichnen
  //p.stroke('black');
  //p.line(25, 25, 675, 25);
  //p.line(25, 25, 675, 475);

  /*
  for (let y = 25; y < 475; y += 40) {
    p.line(25, y, 675, y);
  }

  p.arc(50, 50, 50, 50, 0, Math.PI - 0, p.OPEN);

  if (state) {
    drawCircle({ x: 300, y: 300 });
    state = false;
  } else {
    drawCircle({ x: 400, y: 400 });
    state = true;
  }
  */

  // Level 1: Zeichnen wir einen Smilie

    p.stroke('black');
    p.fill('yellow');
    p.strokeWeight(5);
    p.circle(50, 50, 100);

    if (state == true) {
      p.fill('black');
      p.circle(30, 35, 10);
      state = false;
    } else {
      p.arc(30, 35, 10, 10, 0, Math.PI, p.OPEN);
      state = true;
    }

    p.fill('black');
    p.circle(70, 35, 10);
    p.noFill();
    p.arc(50, 50, 50, 50, 0.5, Math.PI - 0.5, p.OPEN);
  
}

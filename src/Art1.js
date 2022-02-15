import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;

let y = 5;
let x = 5;
let direction = ">";

let dotCount = 10;

const Grid2 = (props) => {
  function setup(p5, canvasParentRef) {
    p5.frameRate(50);

    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.noLoop();
  }

  // Render loop that draws shapes with p5
  const draw = (p5) => {
    //Background fill
    p5.background(0);

    //Ellipse Fill

    p5.fill(250, 250, 10);

    //Ellipse 1
    p5.ellipse(x, canvasHeight / 2, 10);

    //Ellipse 1.2
    p5.ellipse(x, canvasHeight / 2 + 100, 10);

    //Ellipse 1.3
    p5.ellipse(x, canvasHeight / 2 - 100, 10);

    //Ellipse 2
    p5.ellipse(canvasWidth / 2, y, 10);

    //Ellipse 2.2
    p5.ellipse(canvasWidth / 2 + 100, y, 10);

    //Ellipse 2.3
    p5.ellipse(canvasWidth / 2 - 100, y, 10);

    //Ellipse Y coordinates value updates
    if (y > p5.height) direction = "";
    if (y < 0) {
      direction = "^";
    }
    if (direction === "^") y += 4;
    else y -= 4;

    //Ellipse X coordinates value updates

    if (x > p5.height) direction = "";
    if (x < 0) {
      direction = "^";
    }
    if (direction === "^") x += 4;
    else x -= 4;
  };

  function mousePressed(p5, event) {
    p5.loop();
  }

  function mouseReleased(p5, event) {
    p5.noLoop();
  }

  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        mousePressed={mousePressed}
        mouseReleased={mouseReleased}
      />
    </>
  );
};

export default Grid2;

import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;

let y = 30;
let x = 10;
let direction = ">";

let dotCount = 10;

const Grid2 = (props) => {
  function setup(p5, canvasParentRef) {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  }

  // Render loop that draws shapes with p5
  const draw = (p5) => {
    p5.background(0);
    p5.fill(130, y * 100, 10);

    p5.ellipse(x, y, 10);
    p5.ellipse(y, x, 10);

    p5.ellipse(x + 10, y, 10);
    p5.ellipse(y, x + 10, 10);

    if (y > p5.height) direction = "";
    if (y < 0) {
      direction = "^";
    }
    if (direction === "^") y += 8;
    else y -= 4;
    if (x > p5.height) direction = "";
    if (x < 0) {
      direction = "^";
    }
    if (direction === "^") x += 4;
    else x -= 2;
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Grid2;

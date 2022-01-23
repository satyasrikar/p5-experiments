import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;

const Grid1 = (props) => {
  function setup(p5, canvasParentRef) {
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  }

  // Render loop that draws shapes with p5
  const draw = (p5) => {
    // For consistent sizing regardless of portrait/landscape
    const dim = Math.min(canvasWidth, canvasHeight);

    // Black background
    p5.background(0);

    // Stroke only with a specific join style and thickness
    p5.noFill();
    p5.stroke(255);
    p5.strokeCap(p5.ROUND);
    p5.strokeWeight(dim * 0.0075);

    // # of elements we wish to draw
    const count = 9;

    // Margin from edge of screen
    const margin = dim * 0.2;

    // The size with margin in consideration
    const innerWidth = canvasWidth - margin * 2;

    // Compute the diameter of each circle
    const diameter = innerWidth / (count - 1);

    // Draw each circle
    for (let i = 0; i < count; i++) {
      // Get a 0..1 value across our loop
      const t = count <= 1 ? 0.5 : i / (count - 1);

      // The x position is linearly spaced across the inner canvasWidth
      const x = p5.lerp(margin, canvasWidth - margin, t);

      // The y position is centred vertically
      const y = p5.lerp(margin, canvasHeight - margin, t);

      p5.ellipse(x, y, diameter, diameter, 0, p5.PI * 2);
    }
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
};

export default Grid1;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h4> p5 Sandbox</h4>
      <Link to="/noise1">Noise 1</Link>
      <Link to="/grid1">Grid 1</Link>
    </div>
  );
}

export default Home;

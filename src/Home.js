import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h4 className="bg-pink-300"> p5 Sandbox</h4>
      <ul>
        <li>
          <button className="bg-red-300 p-2 w-24 rounded-xl">
            <Link to="/noise1">Noise 1</Link>
          </button>
        </li>
        <li>
          <button className="bg-red-300 p-2 w-24 rounded-xl">
            <Link to="/grid1">Grid 1</Link>
          </button>
        </li>
        <li>
          <button className="bg-red-300 p-2 w-24 rounded-xl">
            <Link to="/grid2">Grid 2</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Home;

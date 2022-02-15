import "./App.css";
import Noise1 from "./Noise1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid1 from "./Grid1";
import Home from "./Home";
import Grid2 from "./Grid2";
import Art1 from "./Art1";
const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="h-screen flex justify-center items-center">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/noise1" element={<Noise1 />}></Route>
            <Route exact path="/grid1" element={<Grid1 />}></Route>
            <Route exact path="/grid2" element={<Grid2 />}></Route>
            <Route exact path="/art1" element={<Art1 />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

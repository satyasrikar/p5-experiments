import "./App.css";
import Noise1 from "./Noise1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid1 from "./Grid1";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/noise1" element={<Noise1 />}></Route>
          <Route exact path="/grid1" element={<Grid1 />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

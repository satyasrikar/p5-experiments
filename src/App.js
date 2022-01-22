import "./App.css";
import Noise1 from "./Noise1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/noise1" element={<Noise1 />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

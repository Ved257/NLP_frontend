import Landing from "./Landing/Landing";
import Home from "./Home/Home";
import Lang from "./Lang/Lang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
             <Route path="/lang" element={<Lang />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

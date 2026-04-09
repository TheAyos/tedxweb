import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import PreviousSpeakers from "./pages/PreviousSpeakers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/partners" element={<Partners />} />
        <Route path="/" element={<Home />} />
        <Route path="/previous-speakers" element={<PreviousSpeakers />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;

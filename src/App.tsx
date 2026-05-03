import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PreviousPartners from "./pages/PreviousPartners";
import Team from "./pages/Team";
import PreviousSpeakers from "./pages/PreviousSpeakers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/previous-partners" element={<PreviousPartners />} />
        <Route path="/" element={<Home />} />
        <Route path="/previous-speakers" element={<PreviousSpeakers />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;

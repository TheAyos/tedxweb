import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/partners" element={<Partners />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

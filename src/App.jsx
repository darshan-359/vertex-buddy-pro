import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Branches from "./pages/Branches";
import BranchDetail from "./pages/BranchDetail";
import Compare from "./pages/Compare";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branch/:id" element={<BranchDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© 2026 Vertex Buddy Pro — Post-Intermediate Student Counselling</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;


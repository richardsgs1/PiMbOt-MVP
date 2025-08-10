import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#007bff" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
        <Link to="/onboarding" style={{ color: "#fff", marginRight: "1rem" }}>Onboarding</Link>
        <Link to="/chat" style={{ color: "#fff" }}>Chat</Link>
      </nav>

      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

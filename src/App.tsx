import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Browse from "./components/Browse";
import ScrollToTop from "./components/ScrollToTop";
import BookDetail from "./components/BookDetail";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          padding: "1rem",
          background: "rgba(10,10,10,0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          zIndex: 50,
        }}
      >
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/browse" style={{ color: "#fff", textDecoration: "none" }}>
          Browse
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}



import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Discover from "./components/Discover";

export default function App() {
  return (
    <BrowserRouter>
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
          Discover
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
}


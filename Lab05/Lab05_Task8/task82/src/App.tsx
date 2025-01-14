import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";

const App: React.FC = () => {
  return (
    <Router>
      <div style={appStyle}>
        <nav style={navStyle}>
          <Link
            to="/"
            style={navLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Home
          </Link>
          <Link
            to="/blog"
            style={navLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Blog
          </Link>
          <Link
            to="/dodaj"
            style={navLinkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e88e5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Dodaj Artykuł
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<AddArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

const appStyle: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #1e1e1e, #121212)",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  padding: "15px 20px",
  background: "rgba(0, 0, 0, 0.8)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  gap: "20px",
};

const navLinkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px 15px",
  borderRadius: "5px",
  transition: "background-color 0.3s, color 0.3s",
};

export default App;
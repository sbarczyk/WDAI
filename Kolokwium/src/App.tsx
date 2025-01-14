import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShapeDetails from "./pages/ShapeDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shape/:id" element={<ShapeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
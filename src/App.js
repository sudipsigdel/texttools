import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Convert from "./pages/Convert";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar title={"TextTools"} />

      <Routes>
      <Route path="/" element={<Navigate to="/index" />} />
        <Route path="/index" element={<Home />} />
        <Route
          path="/convert"
          element={<Convert heading={"Enter text to Convert"} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
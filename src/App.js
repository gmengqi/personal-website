import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/landingPage";
import About from "./pages/about"; 
import Work from "./pages/work"; 
import Contact from "./pages/contact"; 

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}


import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./landingPage/landingPage";
import About from "./pages/about"; 
import Work from "./pages/work"; 
import Contact from "./pages/contact"; 
import HawkerTown from "./pages/hawkerTown";
import BiggieBot from "./pages/teleBot";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/work" exact element={<Work />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/work/hawkertown" exact element={<HawkerTown />} />
        <Route path="/work/biggiebot" exact element={<BiggieBot />} />
      </Routes>
    </div>
  );
}

